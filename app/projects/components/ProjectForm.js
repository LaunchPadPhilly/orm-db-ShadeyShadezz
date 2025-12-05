// ProjectForm.js
import { useForm } from 'react-hook-form';
import TechnologyInput from './TechnologyInput';

export default function ProjectForm({ onSubmit, defaultValues = {} }) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: { technologies: [], ...defaultValues },
  });

  const handleTechChange = (techs) => {
    setValue('technologies', techs, { shouldValidate: true });
  };

  const onFormSubmit = (data) => {
    if (!data.technologies || data.technologies.length === 0) {
      setError('technologies', {
        type: 'manual',
        message: 'At least one technology is required',
      });
      return;
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Technologies</label>
        <TechnologyInput
          value={defaultValues.technologies || []}
          onChange={handleTechChange}
        />
        {errors.technologies && <p>{errors.technologies.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

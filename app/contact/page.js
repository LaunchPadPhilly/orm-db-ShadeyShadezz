export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-5xl font-bold">Contact</h1>

      <p className="text-lg">You can reach me here:</p>

      <ul className="space-y-3 text-lg">
        <li>
          <span className="font-semibold">Email:</span> your-email@example.com
        </li>
        <li>
          <span className="font-semibold">LinkedIn:</span> linkedin.com/in/yourprofile
        </li>
        <li>
          <span className="font-semibold">GitHub:</span> github.com/yourusername
        </li>
      </ul>
    </section>
  );
}

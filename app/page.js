export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-8">

      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to My Portfolio
      </h1>

      <p className="text-lg max-w-2xl text-gray-700">
        Explore my work, learn about who I am, and feel free to reach out.
      </p>

      {/* Example cards section */}
      <div className="grid md:grid-cols-2 gap-6 w-full mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-gray-600 mt-2">
            Learn more about my background, skills, and experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="text-gray-600 mt-2">
            Browse the work I&apos;ve completed and what I&apos;m currently building.
          </p>
        </div>
      </div>

    </section>
  );
}

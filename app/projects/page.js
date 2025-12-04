import Image from "next/image";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <h1 className="text-6xl font-bold">Welcome!</h1>

      <p className="text-lg">
        This is my developer portfolio, built with Next.js and Tailwind CSS.
      </p>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Featured Image</h2>
        <Image
          src="/profile.jpg"
          width={300}
          height={300}
          alt="Profile"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

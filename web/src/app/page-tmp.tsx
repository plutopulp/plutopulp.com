import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Pluto&apos;s Portfolio
      </h1>

      <p className="text-xl mb-8 max-w-2xl">
        This is a playground for exploring different components and ideas. You
        can navigate through various examples using the links below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        <Link
          href="/landing"
          className="group flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg transition duration-200 ease-in-out"
        >
          <span className="mr-2">Visit Landing Page</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <Link
          href="/projects"
          className="group flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg transition duration-200 ease-in-out"
        >
          <span className="mr-2">View Projects</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <Link
          href="/components"
          className="group flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-lg transition duration-200 ease-in-out"
        >
          <span className="mr-2">Component Showcase</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      <p className="mt-12 text-gray-600 dark:text-gray-400 max-w-2xl">
        The landing page showcases the spiral circles animation with a header
        similar to the original portfolio. The projects section displays my
        portfolio work, and the component showcase contains various UI elements
        and design patterns.
      </p>
    </main>
  );
}

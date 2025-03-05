import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl w-full">
        <Link
          href="/landing"
          className="group inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Landing</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl mb-6">
            I&apos;m a software developer with a passion for creating intuitive
            and engaging user experiences.
          </p>

          <p className="mb-6">
            This is a placeholder for the About page. In a complete
            implementation, this would include:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li>Professional background and experience</li>
            <li>Skills and technologies</li>
            <li>Education and certifications</li>
            <li>Personal projects and achievements</li>
            <li>Contact information</li>
          </ul>

          <p>
            The content for this page would be ported over from the original
            portfolio project, maintaining the same information while updating
            the design to match the new site&apos;s aesthetic.
          </p>
        </div>
      </div>
    </main>
  );
}

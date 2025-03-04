import { Button } from "@/components/ui/Button";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ComponentsPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-8">Button Component</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="sm">
            Small Button
          </Button>
          <Button variant="primary" size="md">
            Medium Button
          </Button>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            rightIcon={<ArrowRightIcon className="w-5 h-5" />}
          >
            Learn More
          </Button>
          <Button
            variant="secondary"
            rightIcon={<ChevronDownIcon className="w-5 h-5" />}
          >
            Check Out My Skills
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowRightIcon className="w-5 h-5" />}
          >
            View Projects
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button as Links</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/portfolio">
            Portfolio
          </Button>
          <Button
            variant="outline"
            href="/about"
            rightIcon={<ArrowRightIcon className="w-5 h-5" />}
          >
            About Me
          </Button>
        </div>
      </section>

      <section className="p-10 bg-gray-100 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4">Learn More Button</h2>
        <div className="flex justify-center">
          <Button variant="learn-more">Learn More</Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Color System</h2>
        <p className="mb-4">
          Button colors are defined in{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">
            src/lib/colors.ts
          </code>
          for consistent use across the application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold mb-2">Primary Colors</h3>
            <div className="flex gap-2 mb-2">
              <div className="w-12 h-12 rounded bg-[#6AA7BF]"></div>
              <div className="w-12 h-12 rounded bg-[#5893AB]"></div>
              <div className="w-12 h-12 rounded bg-[#47768D]"></div>
              <div className="w-12 h-12 rounded bg-[#345667]"></div>
            </div>
            <div className="text-sm text-gray-500">
              Light / Default / Dark / Darkest
            </div>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold mb-2">Gray Scale</h3>
            <div className="flex gap-2 mb-2">
              <div className="w-12 h-12 rounded bg-[#F9FAFB] border"></div>
              <div className="w-12 h-12 rounded bg-[#F3F4F6]"></div>
              <div className="w-12 h-12 rounded bg-[#E5E7EB]"></div>
              <div className="w-12 h-12 rounded bg-[#1F2937]"></div>
            </div>
            <div className="text-sm text-gray-500">
              Lightest / Light / Default / Darkest
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

interface ProjectCaptionProps {
  caption: string;
}

export default function ProjectCaption({ caption }: ProjectCaptionProps) {
  return (
    <div className="my-4 text-center">
      <span className="text-[#a3a3ff] font-semibold text-lg">{caption}</span>
    </div>
  );
}

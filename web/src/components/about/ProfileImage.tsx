"use client";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white shadow-xl">
        <Image
          src="/images/headshot.jpg"
          alt="Yvan Buggy"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

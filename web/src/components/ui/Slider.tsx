"use client";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { SliderMedia } from "@/types/project";

interface SliderProps {
  media: SliderMedia[];
  onSlideChange?: (index: number) => void;
}

// Slide component for rendering individual slides
const Slide = ({ item, index }: { item: SliderMedia; index: number }) => {
  const aspectVideoClass = "relative w-full aspect-video";
  const objectContainClass = "object-contain";
  if (item.type === "image") {
    return (
      <div className={`${aspectVideoClass} bg-white`}>
        <Image
          src={item.source}
          alt={item.caption}
          fill
          className={objectContainClass}
          priority={index === 0}
        />
      </div>
    );
  }

  return (
    <div className={aspectVideoClass}>
      <video
        src={item.source}
        controls
        className={`w-full h-full ${objectContainClass}`}
      />
    </div>
  );
};

// Navigation buttons component
const NavigationButtons = ({
  scrollPrev,
  scrollNext,
}: {
  scrollPrev: () => void;
  scrollNext: () => void;
}) => {
  const navButtonBaseClass =
    "cursor-pointer absolute top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-colors focus:outline-none";
  return (
    <>
      <button
        onClick={scrollPrev}
        className={`${navButtonBaseClass} left-2`}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
      </button>
      <button
        onClick={scrollNext}
        className={`${navButtonBaseClass} right-2`}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-700" />
      </button>
    </>
  );
};

// Dots indicator component
const DotsIndicator = ({
  totalSlides,
  currentIndex,
  onDotClick,
}: {
  totalSlides: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}) => {
  const dotBaseClass = "cursor-pointer h-4 w-4 rounded-full transition-all";

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={`${dotBaseClass} ${
            index === currentIndex ? "w-8 bg-gray-800" : "bg-gray-400"
          }`}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export function Slider({ media, onSlideChange }: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setCurrentIndex(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  }, [emblaApi, onSlideChange]);

  // Setup event listeners
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Initialize
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navigation buttons
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const handleDotClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  if (!media || media.length === 0) {
    return null;
  }

  const hasMultipleSlides = media.length > 1;
  const slideItemClass =
    "relative flex-grow-0 flex-shrink-0 basis-full min-w-0";

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="overflow-hidden bg-gray-800" ref={emblaRef}>
        <div className="flex">
          {media.map((item, index) => (
            <div
              key={index}
              className={slideItemClass}
              style={{ padding: item.padding || "0" }}
            >
              <Slide item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {hasMultipleSlides && (
        <NavigationButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />
      )}

      {/* Dots indicator */}
      {hasMultipleSlides && (
        <DotsIndicator
          totalSlides={media.length}
          currentIndex={currentIndex}
          onDotClick={handleDotClick}
        />
      )}
    </div>
  );
}

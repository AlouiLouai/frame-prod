"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    src: "/chagui.jpg?height=400&width=225&text=Story+1",
    alt: "Story 1",
  },
  {
    id: 2,
    src: "/bav.jpg?height=400&width=225&text=Story+2",
    alt: "Story 2",
  },
  {
    id: 3,
    src: "/media1.jpg?height=400&width=225&text=Story+3",
    alt: "Story 3",
  },
  {
    id: 4,
    src: "/media1.jpg?height=400&width=225&text=Story+4",
    alt: "Story 4",
  },
  {
    id: 5,
    src: "/media2.jpg?height=400&width=225&text=Story+5",
    alt: "Story 5",
  },
  {
    id: 6,
    src: "/media3.jpg?height=400&width=225&text=Story+1",
    alt: "Story 1",
  },
  {
    id: 7,
    src: "/media4.jpg?height=400&width=225&text=Story+2",
    alt: "Story 2",
  },
  {
    id: 8,
    src: "/media5.jpg?height=400&width=225&text=Story+3",
    alt: "Story 3",
  },
  {
    id: 9,
    src: "/frame_prod.jpg?height=400&width=225&text=Story+4",
    alt: "Story 4",
  },
  {
    id: 10,
    src: "/frame_prod.jpg?height=400&width=225&text=Story+5",
    alt: "Story 5",
  },
];

export default function HorizontalStorySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: activeIndex * 240, // 225px width + 15px gap
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "450px" }}
    >
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="flex-shrink-0 w-[225px] h-[400px] relative rounded-lg overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={story.src}
              alt={story.alt}
              layout="fill"
              objectFit="cover"
            />
            <div
              className={`absolute inset-0 border-4 transition-opacity duration-300 ${
                index === activeIndex
                  ? "border-orange-500 opacity-100"
                  : "border-transparent opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

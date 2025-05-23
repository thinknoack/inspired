// components/ParallaxImage.tsx
"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

interface ParallaxProps {
  src: string | StaticImageData; 
  alt: string;
  width: number;
  height: number;
  yParallaxAmount?: number;
  xParallaxAmount?: number;
  startViewportFromBottom?: number;
  endViewportFromTop?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  yParallaxAmount = -200,
  xParallaxAmount = 0,
  startViewportFromBottom = 0,
  endViewportFromTop = 0,
  sizes,
  className,
  priority
}: ParallaxProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const animationFrameId = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (imageRef.current) {
      const { top } = imageRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * (1 - startViewportFromBottom);
      const end = viewportHeight * endViewportFromTop;

      let progress = 0;

      if (end >= start) {
        progress = 0;
      } else if (top < start && top > end) {
        progress = 1 - (top - end) / (start - end);
        progress = Math.min(1, Math.max(0, progress));
      } else if (top <= end) {
        progress = 1;
      } else {
        progress = 0;
      }

      setTranslateY(Math.round((1 - progress) * -yParallaxAmount));
      setTranslateX(Math.round((1 - progress) * -xParallaxAmount));
    }
    animationFrameId.current = null;
  }, [
    yParallaxAmount,
    xParallaxAmount,
    startViewportFromBottom,
    endViewportFromTop,
  ]);

  const handleScroll = useCallback(() => {
    if (!animationFrameId.current) {
      animationFrameId.current = window.requestAnimationFrame(updateParallax);
    }
  }, [updateParallax]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    updateParallax();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll, updateParallax]);

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        transform: `translateY(${translateY}px) translateX(${translateX}px)`,
        transition: "transform 0.3s linear",
        willChange: "transform",
        width: "100%",
        height: "auto",
      }}
      sizes={sizes}
      className={className}
      unoptimized
      priority={priority}
    />
  );
}

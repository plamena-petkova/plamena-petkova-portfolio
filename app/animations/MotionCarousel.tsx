"use client";

import { AnimatePresence, motion, usePresenceData } from "motion/react";
import { forwardRef, useState, SVGProps} from "react";

interface Props {
  items: string[];
}

export default function UsePresenceData({ items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const setSlide = (newDirection: 1 | -1) => {
    const newIndex = (selectedIndex + newDirection + items.length) % items.length;
    setSelectedIndex(newIndex);
    setDirection(newDirection);
  };

  return (
    <div className="flex justify-center items-center gap-5 p-6">
      <motion.button
        initial={false}
        animate={{ backgroundColor: "bg-base-300" }}
        aria-label="Previous"
        className="btn btn-circle bg-base-200 hover:bg-base-300 transition-colors"
        onClick={() => setSlide(-1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft />
      </motion.button>

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide key={items[selectedIndex]} src={items[selectedIndex]} />
      </AnimatePresence>

      <motion.button
        initial={false}
        animate={{ backgroundColor: "bg-base-300" }}
        aria-label="Next"
        className="btn btn-circle bg-base-200 hover:bg-base-300 transition-colors"
        onClick={() => setSlide(1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  );
}

interface SlideProps {
  src: string;
}

const Slide = forwardRef<HTMLDivElement, SlideProps>(({ src }, ref) => {
  const direction = usePresenceData();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      className="aspect-[3/4] w-full max-w-lg rounded-xl overflow-hidden shadow-lg bg-base-100"
    >
      <img
        src={src}
        alt="Certificate"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
});
Slide.displayName = "Slide";

/**
 * Icons
 */
const iconsProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

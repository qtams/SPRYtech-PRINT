import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { bannersData } from "@/data/bannersData";

const AUTOPLAY_DELAY = 5000;
const SWIPE_DISTANCE = 50;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const activeBanner = bannersData[activeIndex];

  const handleNext = () => {
    setDirection(1);

    setActiveIndex((currentIndex) =>
      currentIndex === bannersData.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const handlePrevious = () => {
    setDirection(-1);

    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? bannersData.length - 1 : currentIndex - 1,
    );
  };

  const handleSlideSelect = (index) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused || bannersData.length <= 1) return;

    const interval = window.setInterval(() => {
      setDirection(1);

      setActiveIndex((currentIndex) =>
        currentIndex === bannersData.length - 1 ? 0 : currentIndex + 1,
      );
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  if (!activeBanner) return null;

  return (
    <section id="home" className="w-full">
      <div
        className="
          group
          relative
          w-full
          overflow-hidden
          bg-[#f4e3cb]
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="
            relative
            aspect-[18/7]
            w-full
            overflow-hidden
            lg:aspect-[17/7]
          "
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeBanner.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? "4%" : "-4%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? "-4%" : "4%",
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (info.offset.x <= -SWIPE_DISTANCE) {
                  handleNext();
                  return;
                }

                if (info.offset.x >= SWIPE_DISTANCE) {
                  handlePrevious();
                }
              }}
              className="
                absolute
                inset-0
                cursor-grab
                touch-pan-y
                active:cursor-grabbing
              "
            >
              {/* Banner Image */}
              <img
                src={activeBanner.image}
                alt={activeBanner.title}
                draggable={false}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  select-none
                  object-cover
                  object-center
                "
              />

              {/* LEFT GRADIENT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                "
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,250,243,0.98) 0%, rgba(255,250,243,0.92) 20%, rgba(255,250,243,0.66) 36%, rgba(255,250,243,0.20) 52%, rgba(255,250,243,0) 68%)",
                }}
              />

              {/* TITLE + DESCRIPTION */}
              <div
                className="
                  absolute
                  left-[7%]
                  top-1/2
                  z-20
                  w-[42%]
                  -translate-y-1/2
                  sm:w-[38%]
                  lg:left-[7.5%]
                  lg:w-[32%]
                "
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.18,
                    duration: 0.45,
                  }}
                >
                  <p
                    className="
                      mb-1
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-[#90602f]
                      sm:mb-2
                      sm:text-[10px]
                      md:text-xs
                    "
                  >
                    Our Collection
                  </p>

                  <h1
                    className="
                      max-w-[520px]
                      font-serif
                      text-xl
                      font-medium
                      leading-[0.95]
                      tracking-[-0.03em]
                      text-[#84501E]
                      sm:text-3xl
                      md:text-4xl
                      lg:text-5xl
                      xl:text-6xl
                    "
                  >
                    {activeBanner.title}
                  </h1>

                  <p
                    className="
                      mt-2
                      max-w-md
                      text-[8px]
                      leading-relaxed
                      text-[#51483e]
                      sm:mt-3
                      sm:text-[11px]
                      md:text-sm
                      lg:mt-5
                      lg:text-base
                    "
                  >
                    {activeBanner.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT ARROW */}
        {bannersData.length > 1 && (
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous banner"
            className="
              absolute
              left-2
              top-1/2
              z-30
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              cursor-pointer
              rounded-full
              bg-[#fffaf3]/95
              text-[#84501e]
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-200
              hover:scale-105
              hover:bg-white
              sm:left-4
              sm:h-10
              sm:w-10
              lg:left-5
              lg:h-11
              lg:w-11
              lg:opacity-0
              lg:group-hover:opacity-100
            "
          >
            <FiChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        )}

        {/* RIGHT ARROW */}
        {bannersData.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next banner"
            className="
              absolute
              right-2
              top-1/2
              z-30
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              cursor-pointer
              rounded-full
              bg-[#fffaf3]/95
              text-[#84501e]
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-200
              hover:scale-105
              hover:bg-white
              sm:right-4
              sm:h-10
              sm:w-10
              lg:right-5
              lg:h-11
              lg:w-11
              lg:opacity-0
              lg:group-hover:opacity-100
            "
          >
            <FiChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        )}

        {/* DOTS */}
        {bannersData.length > 1 && (
          <div
            className="
              absolute
              bottom-2
              left-1/2
              z-30
              flex
              -translate-x-1/2
              items-center
              gap-1
              rounded-full
              bg-[#6a3d19]/45
              px-2
              py-1
              backdrop-blur-md
              sm:bottom-4
              sm:gap-1.5
              sm:px-2.5
              sm:py-1.5
            "
          >
            {bannersData.map((banner, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => handleSlideSelect(index)}
                  aria-label={`Show banner ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`
                    h-1
                    cursor-pointer
                    rounded-full
                    transition-all
                    duration-300
                    sm:h-1.5
                    ${
                      isActive
                        ? "w-5 bg-[#fbe6c7] sm:w-6"
                        : "w-1 bg-[#fbe6c7]/55 hover:bg-[#fbe6c7] sm:w-1.5"
                    }
                  `}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

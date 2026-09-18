import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";

import { useState } from "react";

import { FiArrowUp } from "react-icons/fi";

/* =========================================================
   SCROLL PROGRESS
========================================================= */

export default function ScrollProgress() {
  const { scrollY, scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  /* =======================================================
     SMOOTH SCROLL PROGRESS
  ======================================================= */

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  /* =======================================================
     SHOW AFTER USER SCROLLS
  ======================================================= */

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 220);
  });

  /* =======================================================
     SCROLL BACK TO TOP
  ======================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 12,
            scale: 0.92,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            bottom-5
            right-5
            z-[80]

            sm:bottom-7
            sm:right-7
          "
        >
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 25,
            }}
            className="
              group
              relative

              flex
              h-[50px]
              w-[50px]
              items-center
              justify-center

              rounded-full

              border
              border-[#dcc8ae]

              bg-[#fffdfa]

              text-[#3b2418]

              shadow-[0_10px_30px_rgba(59,36,24,0.12)]

              outline-none

              transition-shadow
              duration-300

              hover:shadow-[0_14px_35px_rgba(59,36,24,0.17)]

              sm:h-[54px]
              sm:w-[54px]
            "
          >
            {/* =============================================
                SVG PROGRESS RING
            ============================================== */}

            <svg
              viewBox="0 0 54 54"
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                h-full
                w-full

                -rotate-90
              "
            >
              {/* TRACK */}

              <circle
                cx="27"
                cy="27"
                r="25"
                fill="none"
                stroke="#eadfd2"
                strokeWidth="1.5"
              />

              {/* ACTIVE PROGRESS */}

              <motion.circle
                cx="27"
                cy="27"
                r="25"
                fill="none"
                stroke="#b8793e"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="1"
                style={{
                  pathLength: smoothProgress,
                }}
              />
            </svg>

            {/* =============================================
                INNER CIRCLE
            ============================================== */}

            <motion.span
              className="
                relative
                z-10

                flex
                h-[38px]
                w-[38px]
                items-center
                justify-center

                rounded-full

                bg-[#f8f1e7]

                text-[#3b2418]

                transition-colors
                duration-300

                group-hover:bg-[#3b2418]
                group-hover:text-[#f8f1e7]

                sm:h-[40px]
                sm:w-[40px]
              "
            >
              {/* ARROW */}

              <motion.span
                className="
                  flex
                  items-center
                  justify-center
                "
                initial={false}
                animate={{
                  y: 0,
                }}
                whileHover={{
                  y: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 430,
                  damping: 22,
                }}
              >
                <FiArrowUp size={17} strokeWidth={1.5} />
              </motion.span>
            </motion.span>

            {/* =============================================
                SMALL DECORATIVE DOT
            ============================================== */}

            <motion.span
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.3,
              }}
              className="
                pointer-events-none

                absolute
                left-1/2
                top-[3px]

                h-[4px]
                w-[4px]

                -translate-x-1/2

                rounded-full

                bg-[#b8793e]
              "
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

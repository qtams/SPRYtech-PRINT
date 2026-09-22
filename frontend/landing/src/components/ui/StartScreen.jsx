import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const StartScreen = ({ onStart }) => {
  const [visible, setVisible] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  /* =====================================================
     MOBILE ONLY
  ====================================================== */

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      onStart();
    }
  }, [onStart]);

  /* =====================================================
     ENTER WEBSITE
  ====================================================== */

  const handleStart = () => {
    setVisible(false);

    window.setTimeout(() => {
      onStart();
    }, 450);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            fixed
            inset-0
            z-[99999]
            h-[100dvh]
            w-full
            overflow-hidden
            bg-[#f8f1e7]
          "
        >
          {/* =====================================================
              BACKGROUND IMAGE
          ====================================================== */}

          <motion.img
            src="/images/startup/startup.png"
            alt="SPRYtech Print personalized products"
            draggable={false}
            onLoad={() => setImageLoaded(true)}
            initial={{
              opacity: 0,
              scale: 1.035,
            }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              scale: imageLoaded ? 1 : 1.035,
            }}
            transition={{
              opacity: {
                duration: 0.65,
              },
              scale: {
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              select-none
              object-cover
              object-center
            "
          />

          {/* =====================================================
              LOADER
          ====================================================== */}

          <AnimatePresence>
            {!imageLoaded && (
              <motion.div
                key="loader"
                initial={{
                  opacity: 1,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  absolute
                  inset-0
                  z-50
                  flex
                  items-center
                  justify-center
                  bg-[#f8f1e7]
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  {/* BRAND */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      flex
                      items-baseline
                      justify-center
                      gap-1
                    "
                  >
                    <span
                      className="
                        text-[20px]
                        font-bold
                        tracking-[-0.045em]
                        text-[#84501e]
                      "
                    >
                      SPRYtech
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#a1846a]
                      "
                    >
                      PRINT
                    </span>
                  </motion.div>

                  {/* LOADING LINE */}

                  <div
                    className="
                      relative
                      mt-5
                      h-[2px]
                      w-20
                      overflow-hidden
                      rounded-full
                      bg-[#ddcdbd]
                    "
                  >
                    <motion.div
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-8
                        rounded-full
                        bg-[#84501e]
                      "
                      animate={{
                        x: [-32, 80],
                      }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="
                      mt-4
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-[#9c8370]
                    "
                  >
                    Personalizing your experience
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =====================================================
              STRONG BOTTOM GRADIENT
          ====================================================== */}

          {imageLoaded && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                z-10
                h-[500px]
              "
              style={{
                background:
                  "linear-gradient(180deg, rgba(248,241,231,0) 0%, rgba(248,241,231,0.03) 8%, rgba(248,241,231,0.08) 18%, rgba(248,241,231,0.18) 28%, rgba(248,241,231,0.34) 40%, rgba(248,241,231,0.54) 52%, rgba(248,241,231,0.72) 64%, rgba(248,241,231,0.86) 74%, rgba(248,241,231,0.95) 84%, rgba(248,241,231,0.99) 92%, #f8f1e7 100%)",
              }}
            />
          )}

          {/* =====================================================
              SECOND LOWER FADE
              
              Makes the button area even cleaner.
          ====================================================== */}

          {imageLoaded && (
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                z-[11]
                h-[190px]
              "
              style={{
                background:
                  "linear-gradient(180deg, rgba(248,241,231,0) 0%, rgba(248,241,231,0.55) 35%, rgba(248,241,231,0.90) 70%, #f8f1e7 100%)",
              }}
            />
          )}

          {/* =====================================================
              BOTTOM ACTION
          ====================================================== */}

          <AnimatePresence>
            {imageLoaded && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 12,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-30
                  px-5
                  pb-[max(1.5rem,env(safe-area-inset-bottom))]
                "
              >
                <div
                  className="
                    mx-auto
                    w-full
                    max-w-[420px]
                  "
                >
                  {/* EXPLORE */}

                  <motion.button
                    type="button"
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={handleStart}
                    className="
                      group
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      rounded-full
                      border
                      border-white/10
                      bg-[#3b2418]
                      px-5
                      py-3.5
                      text-left
                      shadow-[0_14px_40px_rgba(59,36,24,0.22)]
                      transition-all
                      duration-300
                      hover:bg-[#84501e]
                    "
                  >
                    <div
                      className="
                        min-w-0
                        pr-4
                      "
                    >
                      <span
                        className="
                          block
                          text-[13px]
                          font-semibold
                          tracking-[-0.015em]
                          text-white
                        "
                      >
                        Explore SPRYtech Print
                      </span>

                      <span
                        className="
                          mt-0.5
                          block
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-white/50
                        "
                      >
                        Personalized with care
                      </span>
                    </div>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#84501e]
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    >
                      <FiArrowUpRight size={16} strokeWidth={1.8} />
                    </span>
                  </motion.button>

                  {/* BOTTOM TEXT */}

                  <p
                    className="
                      mt-3
                      text-center
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[#8f7562]/70
                    "
                  >
                    Personalized gifts made meaningful
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartScreen;

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

import { navigationItems } from "../../data/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          border-b
          border-[var(--border)]
          bg-[rgba(250,247,242,0.92)]
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-full
            max-w-[1440px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-12
          "
        >
          {/* =========================================
              LOGO
          ========================================= */}
          <a
            href="#home"
            onClick={closeMenu}
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
              text-[var(--heading)]
              no-underline
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[var(--brand)]
                text-sm
                font-semibold
                tracking-[0.08em]
                text-white
                transition-transform
                duration-300
                group-hover:rotate-6
              "
            >
              SP
            </div>

            <div className="flex flex-col items-start leading-none">
              <span
                className="
                  font-[var(--font-heading)]
                  text-[21px]
                  font-semibold
                  tracking-[-0.02em]
                  sm:text-[23px]
                "
              >
                SPRYtech
              </span>

              <span
                className="
                  mt-1
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[var(--text-muted)]
                "
              >
                Print & Engraving
              </span>
            </div>
          </a>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <nav
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="
                  relative
                  rounded-full
                  px-4
                  py-2
                  text-[13px]
                  font-medium
                  text-[var(--text)]
                  no-underline
                  transition-colors
                  duration-300
                  hover:bg-[var(--surface)]
                  hover:text-[var(--heading)]
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* =========================================
              DESKTOP CTA
          ========================================= */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[var(--brand)]
                px-5
                py-2.5
                text-[13px]
                font-medium
                text-white
                no-underline
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--brand-dark)]
              "
            >
              Get a Quote
              <FiArrowUpRight className="text-base" />
            </a>
          </div>

          {/* =========================================
              MOBILE MENU BUTTON
          ========================================= */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex
              h-11
              w-11
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-white
              text-[var(--heading)]
              transition-colors
              duration-300
              hover:bg-[var(--surface)]
              lg:hidden
            "
          >
            {isOpen ? (
              <FiX className="text-[21px]" />
            ) : (
              <FiMenu className="text-[21px]" />
            )}
          </button>
        </div>

        {/* =========================================
            MOBILE DROPDOWN
        ========================================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                border-t
                border-[var(--border)]
                bg-[var(--background)]
                lg:hidden
              "
            >
              <motion.div
                initial={{
                  y: -20,
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: -20,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mx-auto
                  flex
                  w-full
                  max-w-[1440px]
                  flex-col
                  px-5
                  pb-6
                  pt-4
                  sm:px-8
                "
              >
                <nav className="flex flex-col">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.3,
                      }}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[var(--border)]
                        py-4
                        text-[15px]
                        font-medium
                        text-[var(--heading)]
                        no-underline
                      "
                    >
                      {item.label}

                      <FiArrowUpRight className="text-[17px] text-[var(--text-muted)]" />
                    </motion.a>
                  ))}
                </nav>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[var(--brand)]
                    px-5
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    no-underline
                  "
                >
                  Get a Quote
                  <FiArrowUpRight />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

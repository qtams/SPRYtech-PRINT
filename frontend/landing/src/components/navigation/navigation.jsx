import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import { navigationData } from "@/data/navigationData";
import "./navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="site-navigation">
      {/* DESKTOP */}

      <nav className="notch-menu" aria-label="Primary navigation">
        {navigationData.map((item) => (
          <a key={item.id} href={item.href} className="notch-menu__link">
            {item.label}
          </a>
        ))}
      </nav>

      {/* MOBILE */}

      <div className="mobile-navigation">
        <div className="mobile-navigation__bar">
          <a
            href="#home"
            className="mobile-navigation__logo"
            onClick={closeMenu}
          >
            <span className="mobile-navigation__logo-main">SPRYtech</span>

            <span className="mobile-navigation__logo-secondary">PRINT</span>
          </a>

          <button
            type="button"
            className={`mobile-navigation__toggle ${
              isMenuOpen ? "mobile-navigation__toggle--open" : ""
            }`}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="mobile-navigation__toggle-inner">
              <motion.span
                className="mobile-navigation__burger-line"
                animate={
                  isMenuOpen
                    ? {
                        rotate: 45,
                        y: 5.5,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <motion.span
                className="mobile-navigation__burger-line"
                animate={
                  isMenuOpen
                    ? {
                        opacity: 0,
                        scaleX: 0,
                      }
                    : {
                        opacity: 1,
                        scaleX: 1,
                      }
                }
                transition={{
                  duration: 0.16,
                }}
              />

              <motion.span
                className="mobile-navigation__burger-line"
                animate={
                  isMenuOpen
                    ? {
                        rotate: -45,
                        y: -5.5,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* BACKDROP */}

              <motion.button
                type="button"
                aria-label="Close navigation menu"
                className="mobile-navigation__backdrop"
                onClick={closeMenu}
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
                  duration: 0.22,
                }}
              />

              {/* MENU */}

              <motion.nav
                className="mobile-navigation__menu"
                aria-label="Mobile navigation"
                initial={{
                  opacity: 0,
                  y: -14,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.99,
                }}
                transition={{
                  duration: 0.24,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mobile-navigation__menu-header">
                  <span>Menu</span>

                  <span>SPRYtech PRINT</span>
                </div>

                <div className="mobile-navigation__links">
                  {navigationData.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      className="mobile-navigation__link"
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: 0.04 + index * 0.035,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="mobile-navigation__link-label">
                        {item.label}
                      </span>

                      <span className="mobile-navigation__link-arrow">
                        <FiArrowUpRight size={16} strokeWidth={1.6} />
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="mobile-navigation__menu-footer">
                  <span>Personalized with care.</span>

                  <span>Made for you.</span>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { navigationData } from "@/data/navigationData";
import "./navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-navigation">
      {/* Desktop */}
      <nav className="notch-menu" aria-label="Primary navigation">
        {navigationData.map((item) => (
          <a key={item.id} href={item.href} className="notch-menu__link">
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile */}
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
            className="mobile-navigation__toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <div className="mobile-navigation__burger">
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.15 }}
              />

              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="mobile-navigation__menu"
              aria-label="Mobile navigation"
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {navigationData.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className="mobile-navigation__link"
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.18,
                    delay: index * 0.03,
                  }}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">→</span>
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;

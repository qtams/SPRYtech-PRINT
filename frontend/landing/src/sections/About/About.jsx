import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f8f1e7]
        px-0
        py-16

        sm:py-20

        lg:px-12
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
        "
      >
        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-12
            lg:items-center
            lg:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              px-5

              sm:px-7

              lg:col-span-5
              lg:px-0
              lg:pr-6
            "
          >
            {/* LABEL */}

            <p
              className="
                mb-3

                text-[9px]
                font-semibold
                uppercase
                tracking-[0.26em]

                text-[#a36d39]

                sm:mb-4
                sm:text-xs
              "
            >
              Our Story
            </p>

            {/* TITLE */}

            <h2
              className="
                max-w-[600px]

                text-[38px]
                font-medium

                leading-[0.98]

                tracking-[-0.045em]

                text-[#34271d]

                sm:text-5xl

                lg:text-[60px]
              "
            >
              Turning ideas into{" "}
              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-[#84501e]
                "
              >
                meaningful pieces.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <div
              className="
                mt-5
                max-w-[520px]

                space-y-4

                sm:mt-7
                sm:space-y-5
              "
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#786657]

                  sm:text-base
                  sm:leading-7
                "
              >
                We create personalized pieces through precise laser engraving
                and thoughtful design. From everyday items to meaningful gifts,
                every piece is made to feel personal, useful, and lasting.
              </p>

              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#786657]

                  sm:text-base
                  sm:leading-7
                "
              >
                Whether it is for a celebration, business, event, giveaway, or
                everyday use, we help turn your idea into something that feels
                uniquely yours.
              </p>
            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="
                group

                mt-6

                inline-flex
                items-center
                gap-2

                text-[12px]
                font-medium

                text-[#84501e]

                sm:mt-8
                sm:text-sm
              "
            >
              Start your project
              <FiArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-1
                "
              />
            </a>
          </motion.div>

          {/* =====================================================
              IMAGE

              MOBILE = FULL WIDTH
              DESKTOP = ROUNDED
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative

              mt-10
              w-full

              lg:col-span-7
              lg:mt-0
            "
          >
            <div
              className="
                relative

                aspect-[16/10]

                w-full

                overflow-hidden

                bg-[#e9dccd]

                rounded-none

                sm:aspect-[16/9]

                lg:aspect-[4/3]
                lg:rounded-[28px]
              "
            >
              <img
                src="/images/about/about-laser.png"
                alt="Laser engraving personalized products"
                loading="lazy"
                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover
                  object-center

                  transition-transform
                  duration-[1200ms]
                  ease-out

                  hover:scale-[1.025]
                "
              />

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-gradient-to-t

                  from-[#3b2418]/15
                  via-transparent
                  to-transparent
                "
              />

              {/* MOBILE IMAGE LABEL */}

              <div
                className="
                  absolute
                  bottom-4
                  left-5

                  rounded-full

                  bg-[#fffaf3]/90

                  px-3
                  py-1.5

                  text-[8px]
                  font-semibold
                  uppercase

                  tracking-[0.16em]

                  text-[#84501e]

                  shadow-sm
                  backdrop-blur-md

                  lg:hidden
                "
              >
                Laser Personalization
              </div>
            </div>

            {/* DESKTOP CAPTION */}

            <div
              className="
                hidden

                lg:mt-4
                lg:flex
                lg:items-center
                lg:justify-between
                lg:gap-4
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#9b8069]
                "
              >
                Laser personalization
              </p>

              <p
                className="
                  text-xs
                  text-[#9b8069]
                "
              >
                Made with precision and care
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              VALUES

              MOBILE = BELOW IMAGE
              DESKTOP = BELOW LEFT CONTENT POSITION
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
            }}
            className="
              mt-0

              px-5

              sm:px-7

              lg:col-span-5
              lg:mt-[-120px]
              lg:px-0
              lg:pr-6
            "
          >
            <div
              className="
                border-t
                border-[#ddcfbe]
              "
            >
              {/* VALUE 1 */}

              <div
                className="
                  grid
                  grid-cols-[28px_minmax(0,1fr)]

                  gap-4

                  border-b
                  border-[#ddcfbe]

                  py-6
                "
              >
                <span
                  className="
                    pt-0.5

                    text-[9px]
                    font-medium

                    tracking-[0.14em]

                    text-[#b29a83]
                  "
                >
                  01
                </span>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]

                      text-[#a36d39]
                    "
                  >
                    Thoughtful Design
                  </p>

                  <p
                    className="
                      mt-2

                      text-[13px]
                      leading-6

                      text-[#5f4d40]

                      sm:text-sm
                    "
                  >
                    Personalized with care and attention to the smallest
                    details.
                  </p>
                </div>
              </div>

              {/* VALUE 2 */}

              <div
                className="
                  grid
                  grid-cols-[28px_minmax(0,1fr)]

                  gap-4

                  py-6
                "
              >
                <span
                  className="
                    pt-0.5

                    text-[9px]
                    font-medium

                    tracking-[0.14em]

                    text-[#b29a83]
                  "
                >
                  02
                </span>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]

                      text-[#a36d39]
                    "
                  >
                    Quality Finish
                  </p>

                  <p
                    className="
                      mt-2

                      text-[13px]
                      leading-6

                      text-[#5f4d40]

                      sm:text-sm
                    "
                  >
                    Clean and precise engraving designed to look good and last.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

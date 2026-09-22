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
        px-5
        py-20
        sm:px-7
        sm:py-24
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
            items-center
            gap-12
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              lg:col-span-5
              lg:pr-6
            "
          >
            {/* LABEL */}

            <p
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#a36d39]
                sm:text-xs
              "
            >
              Our Story
            </p>

            {/* TITLE */}

            <h2
              className="
                max-w-[600px]
                text-4xl
                font-medium
                leading-[0.98]
                tracking-[-0.045em]
                text-[#34271d]
                sm:text-5xl
                lg:text-[60px]
              "
            >
              Turning ideas into
              <span
                className="
                  ml-2
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

            <p
              className="
                mt-7
                max-w-[520px]
                text-sm
                leading-7
                text-[#786657]
                sm:text-base
              "
            >
              We create personalized pieces through precise laser engraving and
              thoughtful design. From everyday items to meaningful gifts, every
              piece is made to feel personal, useful, and lasting.
            </p>

            <p
              className="
                mt-5
                max-w-[520px]
                text-sm
                leading-7
                text-[#786657]
                sm:text-base
              "
            >
              Whether it is for a celebration, business, event, giveaway, or
              everyday use, we help turn your idea into something that feels
              uniquely yours.
            </p>

            {/* =================================================
                VALUES
            ================================================== */}

            <div
              className="
                mt-9
                grid
                grid-cols-1
                gap-6
                border-t
                border-[#ddcfbe]
                pt-7
                sm:grid-cols-2
              "
            >
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
                    text-sm
                    leading-6
                    text-[#5f4d40]
                  "
                >
                  Personalized with care and attention to the smallest details.
                </p>
              </div>

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
                    text-sm
                    leading-6
                    text-[#5f4d40]
                  "
                >
                  Clean and precise engraving designed to look good and last.
                </p>
              </div>
            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-2
                border-b
                border-[#84501e]/30
                pb-1
                text-sm
                font-medium
                text-[#84501e]
                transition-colors
                duration-300
                hover:border-[#84501e]
              "
            >
              Start your project
              <FiArrowUpRight
                size={17}
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
              RIGHT IMAGE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              lg:col-span-7
            "
          >
            <div
              className="
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-[28px]
                bg-[#e9dccd]
              "
            >
              <img
                src="/images/about/about-laser.png"
                alt="Laser engraving personalized products"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  hover:scale-[1.025]
                "
              />

              {/* SUBTLE IMAGE OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3b2418]/10
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* SMALL CAPTION */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                gap-4
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
                  hidden
                  text-xs
                  text-[#9b8069]
                  sm:block
                "
              >
                Made with precision and care
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

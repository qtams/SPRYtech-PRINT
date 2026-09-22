import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiEdit3,
  FiGift,
  FiPackage,
  FiUsers,
} from "react-icons/fi";

const servicesData = [
  {
    icon: FiEdit3,
    number: "01",
    title: "Personalized Design",
    description:
      "Add names, short messages, logos, and custom touches to make every item feel personal.",
  },
  {
    icon: FiGift,
    number: "02",
    title: "Thoughtful Gift Ideas",
    description:
      "Simple and meaningful product options made for birthdays, giveaways, celebrations, and special moments.",
  },
  {
    icon: FiPackage,
    number: "03",
    title: "Bulk Orders",
    description:
      "For events, corporate needs, and larger quantities with a clean and consistent finish across every piece.",
  },
  {
    icon: FiUsers,
    number: "04",
    title: "Client Friendly Process",
    description:
      "Easy coordination from inquiry to final order so you can focus on the idea while we help with the details.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-hidden
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
        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* ===================================================
              INTRO
          ==================================================== */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              px-5

              sm:px-7

              lg:col-span-4
              lg:px-0
              lg:pr-5
            "
          >
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
              Our Services
            </p>

            <h2
              className="
                max-w-[560px]

                text-[38px]
                font-medium
                leading-[0.98]

                tracking-[-0.045em]

                text-[#34271d]

                sm:text-5xl

                lg:text-[58px]
              "
            >
              More than just{" "}
              <span
                className="
                  font-serif
                  font-normal
                  italic

                  text-[#84501e]
                "
              >
                personalized products.
              </span>
            </h2>

            <p
              className="
                mt-5

                max-w-[440px]

                text-[13px]
                leading-6

                text-[#786657]

                sm:mt-7
                sm:text-base
                sm:leading-7
              "
            >
              We create personalized pieces for gifts, events, business needs,
              and everyday use with a simple process and thoughtful finish.
            </p>

            <a
              href="#contact"
              className="
                group

                mt-5

                inline-flex
                items-center

                gap-2

                text-[12px]
                font-medium

                text-[#84501e]

                sm:mt-6
                sm:text-sm
              "
            >
              Start a custom order
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

          {/* ===================================================
              SERVICES LIST
          ==================================================== */}

          <div
            className="
              mt-10

              px-5

              sm:mt-14
              sm:grid
              sm:grid-cols-2
              sm:gap-x-7
              sm:px-7

              lg:col-span-8
              lg:mt-0
              lg:gap-x-9
              lg:px-0
            "
          >
            {servicesData.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.48,
                    delay: Math.min(index * 0.06, 0.18),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group

                    grid
                    grid-cols-[44px_minmax(0,1fr)]
                    gap-4

                    border-t
                    border-[#e8d9c7]

                    py-6

                    sm:block
                    sm:py-8

                    lg:py-10
                  "
                >
                  {/* =========================================
                      ICON
                  ========================================== */}

                  <div
                    className="
                      flex
                      h-11
                      w-11

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#eadac7]

                      bg-[#fffaf3]

                      text-[#84501e]

                      transition-all
                      duration-300

                      sm:mb-6

                      group-hover:border-[#84501e]
                      group-hover:bg-[#84501e]
                      group-hover:text-white
                    "
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* =========================================
                      CONTENT
                  ========================================== */}

                  <div className="min-w-0">
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <h3
                        className="
                          text-[17px]
                          font-medium

                          leading-tight

                          tracking-[-0.025em]

                          text-[#34271d]

                          sm:text-xl
                          lg:text-[21px]
                        "
                      >
                        {service.title}
                      </h3>

                      <span
                        className="
                          shrink-0

                          pt-0.5

                          text-[9px]
                          font-medium

                          tracking-[0.15em]

                          text-[#b6a08b]

                          sm:text-[10px]
                        "
                      >
                        {service.number}
                      </span>
                    </div>

                    <p
                      className="
                        mt-2

                        max-w-[420px]

                        text-[12px]
                        leading-5

                        text-[#786657]

                        sm:mt-3
                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE BOTTOM LINE
        ====================================================== */}

        <div
          className="
            mt-4
            px-5

            sm:px-7

            lg:hidden
          "
        >
          <div
            className="
              h-px
              w-full
              bg-[#e8d9c7]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

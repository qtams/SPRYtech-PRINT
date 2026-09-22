import { motion } from "motion/react";
import { FiEdit3, FiGift, FiPackage, FiUsers } from "react-icons/fi";

const servicesData = [
  {
    icon: FiEdit3,
    title: "Personalized Design",
    description:
      "Add names, short messages, logos, and custom touches to make every item feel personal.",
  },
  {
    icon: FiGift,
    title: "Thoughtful Gift Ideas",
    description:
      "Simple and meaningful product options made for birthdays, giveaways, celebrations, and special moments.",
  },
  {
    icon: FiPackage,
    title: "Bulk Orders",
    description:
      "For events, corporate needs, and larger quantities with a clean and consistent finish across every piece.",
  },
  {
    icon: FiUsers,
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
        px-5
        py-24
        sm:px-7
        sm:py-28
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
            gap-14
            lg:grid-cols-12
            lg:gap-14
          "
        >
          {/* LEFT */}
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
              lg:col-span-4
              lg:pr-8
            "
          >
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
              Our Services
            </p>

            <h2
              className="
                max-w-[500px]
                text-4xl
                font-medium
                leading-[0.98]
                tracking-[-0.045em]
                text-[#34271d]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              More than
              <br />
              just{" "}
              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-[#84501e]
                "
              >
                personalized
              </span>
              <br />
              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-[#84501e]
                "
              >
                products.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[420px]
                text-sm
                leading-7
                text-[#786657]
                sm:text-base
              "
            >
              We create personalized pieces for gifts, events, business needs,
              and everyday use with a clean process and thoughtful presentation.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div
            className="
              grid
              grid-cols-1
              gap-x-7
              sm:grid-cols-2
              lg:col-span-8
            "
          >
            {servicesData.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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
                    duration: 0.5,
                    delay: Math.min(index * 0.07, 0.2),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    border-t
                    border-[#e8d9c7]
                    py-8
                    sm:py-9
                    lg:py-10
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      mb-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#eadac7]
                      bg-white
                      text-[#84501e]
                    "
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-xl
                      font-medium
                      tracking-[-0.025em]
                      text-[#34271d]
                      sm:text-[21px]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      max-w-[420px]
                      text-sm
                      leading-6
                      text-[#786657]
                    "
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

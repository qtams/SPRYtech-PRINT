import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiBox,
  FiEdit3,
  FiFeather,
  FiGift,
  FiKey,
  FiWind,
} from "react-icons/fi";

import { productsData } from "@/data/productsData";

const iconMap = {
  pen: FiEdit3,
  key: FiKey,
  flask: FiBox,
  brush: FiFeather,
  fan: FiWind,
  gift: FiGift,
};

const Collection = () => {
  return (
    <section
      id="collection"
      className="
        relative
        w-full
        bg-[#fffaf3]
        px-5
        py-16

        sm:px-7
        sm:py-20

        lg:px-12
        lg:py-24
      "
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div
          className="
            mb-10
            flex
            flex-col
            gap-6

            md:mb-14
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-[680px]">
            <p
              className="
                mb-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#9a693a]

                sm:text-xs
              "
            >
              Our Collection
            </p>

            <h2
              className="
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#34271d]

                sm:text-4xl

                lg:text-5xl
              "
            >
              Made personal,
              <span
                className="
                  ml-2
                  font-serif
                  font-normal
                  italic
                  text-[#84501e]
                "
              >
                just for you.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[580px]
                text-sm
                leading-7
                text-[#786657]

                sm:text-base
              "
            >
              Thoughtful personalized pieces for gifting, celebrations, events,
              and everyday moments.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2

              text-sm
              font-semibold
              text-[#84501e]
            "
          >
            View all products
            <FiArrowUpRight
              size={17}
              className="
                transition-transform
                duration-200

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* Products */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3
            lg:gap-5
          "
        >
          {productsData.map((product, index) => {
            const Icon = iconMap[product.icon] || FiGift;

            return (
              <motion.a
                key={product.id}
                href={product.href}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  duration: 0.45,
                  delay: Math.min(index * 0.05, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[290px]
                  cursor-pointer
                  flex-col
                  justify-between
                  overflow-hidden

                  rounded-[18px]
                  border
                  border-[#eadfce]

                  bg-white

                  p-6

                  text-decoration-none

                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#d6b892]
                  hover:shadow-[0_18px_45px_rgba(82,47,19,0.09)]

                  sm:min-h-[310px]
                  sm:p-7

                  lg:min-h-[330px]
                "
              >
                {/* Decorative background */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16

                    h-48
                    w-48

                    rounded-full

                    bg-[#f7e6cf]

                    opacity-70

                    transition-transform
                    duration-500

                    group-hover:scale-125
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-20

                    h-52
                    w-52

                    rounded-full

                    bg-[#fff7eb]
                  "
                />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#a47b54]
                    "
                  >
                    {product.category}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#eadac6]

                      text-[#84501e]

                      transition-all
                      duration-200

                      group-hover:border-[#84501e]
                      group-hover:bg-[#84501e]
                      group-hover:text-white
                    "
                  >
                    <FiArrowUpRight size={15} />
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10

                    flex
                    flex-1
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#ead7bf]

                      bg-[#fffaf3]

                      text-[#84501e]

                      transition-all
                      duration-500

                      group-hover:scale-105
                      group-hover:bg-[#f9ecd9]

                      sm:h-28
                      sm:w-28
                    "
                  >
                    <Icon
                      className="
                        h-10
                        w-10

                        stroke-[1.3]

                        sm:h-12
                        sm:w-12
                      "
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="
                      text-xl
                      font-semibold
                      tracking-[-0.025em]
                      text-[#34271d]

                      sm:text-[22px]
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[390px]

                      text-sm
                      leading-6
                      text-[#786657]
                    "
                  >
                    {product.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2

                      text-xs
                      font-semibold
                      text-[#84501e]
                    "
                  >
                    Explore
                    <FiArrowUpRight
                      className="
                        transition-transform
                        duration-200

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collection;

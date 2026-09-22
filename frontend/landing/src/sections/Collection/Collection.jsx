import { useRef, useState } from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { productsData } from "@/data/productsData";

const Collection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* =====================================================
     UPDATE ACTIVE MOBILE SLIDE
  ====================================================== */

  const handleMobileScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = Array.from(slider.querySelectorAll("[data-mobile-product]"));

    if (!cards.length) return;

    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;

      const distance = Math.abs(sliderCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  /* =====================================================
     DOT NAVIGATION
  ====================================================== */

  const goToSlide = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = slider.querySelectorAll("[data-mobile-product]");

    const target = cards[index];

    if (!target) return;

    slider.scrollTo({
      left: target.offsetLeft - (slider.clientWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section
      id="collection"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-14
        sm:px-7
        sm:py-20
        lg:px-12
        lg:py-28
      "
      style={{
        background:
          "linear-gradient(180deg, #fffaf3 0%, #fffaf3 58%, #faf4eb 78%, #f8f1e7 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1500px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mb-8
            grid
            grid-cols-1
            gap-5
            border-b
            border-[#e7dac9]
            pb-7

            sm:mb-12
            sm:gap-7
            sm:pb-10

            lg:mb-16
            lg:grid-cols-[1fr_420px]
            lg:items-end
          "
        >
          <div>
            <p
              className="
                mb-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#9f6734]

                sm:mb-4
                sm:text-xs
              "
            >
              Our Collection
            </p>

            <h2
              className="
                max-w-[850px]
                text-[36px]
                font-medium
                leading-[0.98]
                tracking-[-0.045em]
                text-[#30241c]

                sm:text-5xl
                lg:text-[64px]
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
          </div>

          <div className="lg:pb-1">
            <p
              className="
                max-w-[390px]
                text-[13px]
                leading-6
                text-[#7b6858]

                sm:text-base
                sm:leading-7
              "
            >
              Thoughtful personalized pieces made for gifting, celebrations,
              special events, and everyday moments.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-4
                inline-flex
                items-center
                gap-2
                text-[13px]
                font-medium
                text-[#84501e]

                sm:mt-6
                sm:text-sm
              "
            >
              View all products
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
          </div>
        </div>

        {/* =====================================================
            MOBILE SLIDER
        ====================================================== */}

        <div className="lg:hidden">
          <div
            ref={sliderRef}
            onScroll={handleMobileScroll}
            className="
              -mx-4
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              overscroll-x-contain
              px-4
              pb-2
              scroll-smooth

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:-mx-7
              sm:px-7
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {productsData.map((product, index) => (
              <motion.a
                key={product.id}
                data-mobile-product
                href={product.href}
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
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.16),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group

                  w-[calc(100vw-56px)]
                  max-w-[360px]
                  shrink-0

                  snap-center
                  [scroll-snap-stop:always]

                  overflow-hidden

                  rounded-[22px]

                  border
                  border-[#e6d9c9]

                  bg-white

                  no-underline

                  shadow-[0_8px_24px_rgba(80,50,25,0.05)]
                "
              >
                {/* =============================================
                    IMAGE
                ============================================== */}

                <div
                  className="
                    relative
                    aspect-[16/9]
                    w-full
                    overflow-hidden
                    bg-[#eee2d4]
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    draggable={false}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      select-none
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />

                  {/* CATEGORY */}

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      z-10
                      rounded-full
                      bg-[#fffaf3]/95
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#84501e]
                      shadow-sm
                      backdrop-blur-md
                    "
                  >
                    {product.category}
                  </div>

                  {/* ARROW */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      z-10
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fffaf3]
                      text-[#84501e]
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:bg-[#84501e]
                      group-hover:text-white
                    "
                  >
                    <FiArrowUpRight size={16} strokeWidth={1.8} />
                  </div>
                </div>

                {/* =============================================
                    CONTENT
                ============================================== */}

                <div className="p-4">
                  <h3
                    className="
                      text-[17px]
                      font-medium
                      leading-tight
                      tracking-[-0.025em]
                      text-[#34271d]
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      leading-5
                      text-[#786657]
                    "
                  >
                    {product.description}
                  </p>

                  <div
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-[11px]
                      font-medium
                      text-[#84501e]
                    "
                  >
                    Explore
                    <FiArrowUpRight size={13} />
                  </div>
                </div>
              </motion.a>
            ))}

            {/* END SPACER */}
            <div
              aria-hidden="true"
              className="
                w-[1px]
                shrink-0
              "
            />
          </div>

          {/* =================================================
              MOBILE INDICATOR
          ================================================== */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#9a806b]
              "
            >
              Swipe to explore
            </span>

            <div className="flex items-center gap-1.5">
              {productsData.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  aria-label={`Go to ${product.name}`}
                  onClick={() => goToSlide(index)}
                  className={`
                    h-[4px]
                    rounded-full
                    border-0
                    p-0
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "w-6 bg-[#84501e]"
                        : "w-1.5 bg-[#d7c3ad]"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP BENTO
        ====================================================== */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-12
            lg:auto-rows-[270px]
            lg:gap-5
          "
        >
          {productsData.map((product, index) => {
            const layoutClass =
              index === 0
                ? "lg:col-span-8 lg:row-span-2"
                : "lg:col-span-4 lg:row-span-1";

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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.06, 0.22),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  block
                  min-h-0
                  overflow-hidden
                  rounded-[24px]
                  bg-[#eee2d4]
                  no-underline
                  ${layoutClass}
                `}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[900ms]
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/5
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-10
                    rounded-full
                    bg-[#fffaf3]/95
                    px-3
                    py-1.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#84501e]
                    backdrop-blur-md
                  "
                >
                  {product.category}
                </div>

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fffaf3]
                    text-[#84501e]
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:bg-[#84501e]
                    group-hover:text-white
                  "
                >
                  <FiArrowUpRight size={18} strokeWidth={1.8} />
                </div>

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-8
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-[-0.025em]
                      text-white
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className={`
                      mt-2
                      max-w-[500px]
                      text-sm
                      leading-6
                      text-white/80
                      ${index !== 0 ? "line-clamp-2" : ""}
                    `}
                  >
                    {product.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            mt-9
            flex
            flex-col
            gap-5
            border-t
            border-[#e7dac9]
            pt-7

            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:pt-8
          "
        >
          <p
            className="
              max-w-[500px]
              text-[13px]
              leading-6
              text-[#786657]
              sm:text-sm
            "
          >
            Looking for something more personal? Tell us what you have in mind
            and we can help bring it to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collection;

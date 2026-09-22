import { FiUser } from "react-icons/fi";
import { motion } from "motion/react";

const reviews = [
  {
    id: 1,
    name: "Maria S.",
    date: "January 18, 2026",
    title: "Exactly what I wanted.",
    text: "The engraving came out clean and detailed. The finished piece looked even better than I expected and made the gift feel much more personal.",
  },
  {
    id: 2,
    name: "Angela R.",
    date: "February 06, 2026",
    title: "Beautifully personalized.",
    text: "I ordered customized tumblers for a small event and everything looked neat and consistent. The names were clear and the finish was really nice.",
  },
  {
    id: 3,
    name: "Mark D.",
    date: "March 14, 2026",
    title: "Great attention to detail.",
    text: "They helped me turn a simple idea into a personalized piece that looked clean and professional. I was very happy with the engraving quality.",
  },
  {
    id: 4,
    name: "Camille P.",
    date: "April 09, 2026",
    title: "Perfect for our giveaway.",
    text: "We needed several personalized items for an event and the results were consistent across every piece. Everything looked polished and ready to give.",
  },
  {
    id: 5,
    name: "Joshua L.",
    date: "May 23, 2026",
    title: "Simple process, great result.",
    text: "It was easy to explain what I wanted and the final engraving matched the design well. The whole process felt straightforward from start to finish.",
  },
  {
    id: 6,
    name: "Nicole A.",
    date: "June 11, 2026",
    title: "A gift worth keeping.",
    text: "The personalized details made such a big difference. It turned an everyday item into something thoughtful and memorable.",
  },
];

export default function Reviews() {
  /*
    KEEPING YOUR ORIGINAL CAROUSEL.
    Duplicate reviews for continuous movement.
  */
  const carouselReviews = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="
        relative
        w-full
        overflow-hidden

        px-0
        py-16

        sm:py-24
        md:py-28
        lg:py-36
      "
      style={{
        background:
          "linear-gradient(180deg, #f8f1e7 0%, #fbf6ef 14%, #fffaf3 28%, #ffffff 48%, #ffffff 52%, #fffaf3 72%, #fbf6ef 86%, #f8f1e7 100%)",
      }}
    >
      {/* =================================================
          SECTION INTRO
      ================================================== */}

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
          relative
          z-10

          mx-auto
          w-full
          max-w-3xl

          px-5

          text-center

          sm:px-7
        "
      >
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.3em]

            text-[#a36d39]

            sm:text-xs
          "
        >
          Kind Words
        </p>

        <h2
          className="
            mt-4

            text-[38px]
            font-medium
            leading-[0.96]
            tracking-[-0.045em]

            text-[#34271d]

            sm:mt-5
            sm:text-5xl

            md:text-6xl

            lg:text-[64px]
          "
        >
          Made personal,
          <span
            className="
              block

              font-serif
              font-normal
              italic

              text-[#84501e]
            "
          >
            remembered longer.
          </span>
        </h2>

        <p
          className="
            mx-auto

            mt-5

            max-w-[560px]

            text-[13px]
            leading-6

            text-[#786657]

            sm:mt-6
            sm:text-base
            sm:leading-7
          "
        >
          A few words from customers who turned their ideas into personalized
          gifts, keepsakes, event pieces, and everyday essentials.
        </p>
      </motion.div>

      {/* =================================================
          ORIGINAL AUTOMATIC CAROUSEL
      ================================================== */}

      <div
        className="
          relative
          z-10

          mt-10
          w-full

          sm:mt-14
          lg:mt-16
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <motion.div
          className="
            flex
            w-max

            gap-3

            px-3

            sm:gap-5
            sm:px-5
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {carouselReviews.map((review, index) => (
            <article
              key={`${review.id}-${index}`}
              className="
                group

                w-[82vw]
                max-w-[300px]
                shrink-0

                rounded-[18px]

                border
                border-[#eadfd2]

                bg-white/90

                p-5

                shadow-[0_8px_28px_rgba(59,36,24,0.05)]

                backdrop-blur-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#d9c2a7]
                hover:shadow-[0_16px_45px_rgba(59,36,24,0.08)]

                sm:w-[340px]
                sm:max-w-none
                sm:rounded-[20px]
                sm:p-6
              "
            >
              {/* =================================================
                  PROFILE
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex

                    h-10
                    w-10

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#e5d5c2]

                    bg-[#f8f1e7]

                    text-[#84501e]

                    sm:h-11
                    sm:w-11
                  "
                >
                  <FiUser size={18} strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                      truncate

                      text-[13px]
                      font-semibold

                      text-[#34271d]

                      sm:text-sm
                    "
                  >
                    {review.name}
                  </h3>

                  <p
                    className="
                      mt-0.5

                      text-[10px]

                      text-[#9a806b]

                      sm:text-[11px]
                    "
                  >
                    {review.date}
                  </p>
                </div>
              </div>

              {/* =================================================
                  STARS
              ================================================== */}

              <div
                className="
                  mt-4

                  flex
                  gap-1

                  text-[#c99545]

                  sm:mt-5
                "
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="
                      text-[12px]
                      sm:text-sm
                    "
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <h4
                className="
                  mt-3

                  font-serif

                  text-[22px]
                  font-medium

                  leading-[1.05]

                  text-[#34271d]

                  sm:mt-4
                  sm:text-[24px]
                "
              >
                {review.title}
              </h4>

              {/* =================================================
                  REVIEW
              ================================================== */}

              <p
                className="
                  mt-3

                  text-[12px]
                  leading-5

                  text-[#665244]

                  sm:mt-4
                  sm:text-sm
                  sm:leading-6
                "
              >
                {review.text}
              </p>
            </article>
          ))}
        </motion.div>
      </div>

      {/* =================================================
          BOTTOM NOTE
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        className="
          relative
          z-10

          mt-10

          px-5

          text-center

          text-[8px]
          font-medium
          uppercase
          tracking-[0.24em]

          text-[#9a806b]

          sm:mt-14
          sm:text-[10px]
          sm:tracking-[0.28em]
        "
      >
        Personalized with care, one detail at a time.
      </motion.div>
    </section>
  );
}

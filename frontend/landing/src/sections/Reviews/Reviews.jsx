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
  const carouselReviews = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="
        relative
        w-full
        overflow-hidden
        py-24
        sm:py-28
        md:py-32
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
          max-w-3xl
          px-6
          text-center
        "
      >
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.32em]
            text-[#a36d39]
            sm:text-xs
          "
        >
          Kind Words
        </p>

        <h2
          className="
            mt-5
            text-4xl
            font-medium
            leading-[0.96]
            tracking-[-0.04em]
            text-[#34271d]
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
            mt-6
            max-w-[560px]
            text-sm
            leading-7
            text-[#786657]
            sm:text-base
          "
        >
          A few words from customers who turned their ideas into personalized
          gifts, keepsakes, event pieces, and everyday essentials.
        </p>
      </motion.div>

      {/* =================================================
          CAROUSEL
      ================================================== */}

      <div
        className="
          relative
          z-10
          mt-14
          w-full
          sm:mt-16
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.div
          className="
            flex
            w-max
            gap-5
            px-5
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
                w-[290px]
                shrink-0
                rounded-[20px]
                border
                border-[#eadfd2]
                bg-white/90
                p-5
                shadow-[0_10px_35px_rgba(59,36,24,0.055)]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#d9c2a7]
                hover:shadow-[0_16px_45px_rgba(59,36,24,0.08)]
                sm:w-[340px]
                sm:p-6
              "
            >
              {/* PROFILE */}

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
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#e5d5c2]
                    bg-[#f8f1e7]
                    text-[#84501e]
                  "
                >
                  <FiUser size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-[#34271d]
                    "
                  >
                    {review.name}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      text-[#9a806b]
                    "
                  >
                    {review.date}
                  </p>
                </div>
              </div>

              {/* STARS */}

              <div
                className="
                  mt-5
                  flex
                  gap-1
                  text-[#c99545]
                "
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* TITLE */}

              <h4
                className="
                  mt-4
                  font-serif
                  text-[24px]
                  font-medium
                  leading-[1]
                  text-[#34271d]
                "
              >
                {review.title}
              </h4>

              {/* REVIEW */}

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-[#665244]
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
          mt-14
          text-center
          text-[10px]
          font-medium
          uppercase
          tracking-[0.28em]
          text-[#9a806b]
        "
      >
        Personalized with care, one detail at a time.
      </motion.div>
    </section>
  );
}

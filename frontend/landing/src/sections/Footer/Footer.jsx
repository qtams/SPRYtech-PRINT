import { FiFacebook, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="
        relative
        w-full
        overflow-hidden
        px-0
        pb-0
        pt-16
        sm:pt-20
        lg:pt-24
      "
      style={{
        background:
          "linear-gradient(180deg, #f8f1e7 0%, #fbf6ef 18%, #fffaf3 35%, #ffffff 58%, #ffffff 100%)",
      }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-7
          lg:px-12
        "
      >
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-t
            border-[#e8ddd0]
            pb-10
            pt-10

            sm:pb-12
            sm:pt-12

            lg:grid-cols-12
            lg:gap-12
            lg:pb-14
          "
        >
          {/* ===================================================
              BRAND
          ==================================================== */}

          <div
            className="
              lg:col-span-5
              lg:pr-10
            "
          >
            <div
              className="
                flex
                items-center
                gap-2.5
              "
            >
              {/* LOGO PLACEHOLDER */}

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#34271d]
                  text-[11px]
                  font-semibold
                  text-white
                "
              >
                S
              </div>

              <div
                className="
                  flex
                  items-baseline
                  gap-1
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-[-0.025em]
                    text-[#34271d]
                  "
                >
                  SPRYtech
                </span>

                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.12em]
                    text-[#a36d39]
                  "
                >
                  PRINT
                </span>
              </div>
            </div>

            <p
              className="
                mt-5
                max-w-[430px]
                text-[13px]
                leading-6
                text-[#786657]
                sm:text-sm
              "
            >
              Personalized gifts and laser engraved pieces made with care,
              precision, and attention to detail.
            </p>

            {/* SOCIAL */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
              "
            >
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dfd1c2]
                  text-[#6f5e50]
                  transition-all
                  duration-200
                  hover:border-[#84501e]
                  hover:bg-[#84501e]
                  hover:text-white
                "
              >
                <FiFacebook size={14} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dfd1c2]
                  text-[#6f5e50]
                  transition-all
                  duration-200
                  hover:border-[#84501e]
                  hover:bg-[#84501e]
                  hover:text-white
                "
              >
                <FiInstagram size={14} />
              </a>

              <a
                href="#contact"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dfd1c2]
                  text-[#6f5e50]
                  transition-all
                  duration-200
                  hover:border-[#84501e]
                  hover:bg-[#84501e]
                  hover:text-white
                "
              >
                <FiMail size={14} />
              </a>
            </div>
          </div>

          {/* ===================================================
              LINKS
          ==================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-9

              sm:grid-cols-3

              lg:col-span-7
              lg:gap-x-12
            "
          >
            {/* PRODUCTS */}

            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#34271d]
                "
              >
                Products
              </p>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >
                <a
                  href="#collection"
                  className="
                    text-[12px]
                    text-[#887466]
                    transition-colors
                    duration-200
                    hover:text-[#84501e]
                  "
                >
                  Collection
                </a>

                <a
                  href="#services"
                  className="
                    text-[12px]
                    text-[#887466]
                    transition-colors
                    duration-200
                    hover:text-[#84501e]
                  "
                >
                  Services
                </a>

                <a
                  href="#contact"
                  className="
                    text-[12px]
                    text-[#887466]
                    transition-colors
                    duration-200
                    hover:text-[#84501e]
                  "
                >
                  Custom Orders
                </a>
              </div>
            </div>

            {/* RESOURCES */}

            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#34271d]
                "
              >
                Resources
              </p>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >
                <a
                  href="#about"
                  className="
                    text-[12px]
                    text-[#887466]
                    transition-colors
                    duration-200
                    hover:text-[#84501e]
                  "
                >
                  About
                </a>

                <a
                  href="#reviews"
                  className="
                    text-[12px]
                    text-[#887466]
                    transition-colors
                    duration-200
                    hover:text-[#84501e]
                  "
                >
                  Reviews
                </a>

                <a
                  href="#contact"
                  className="
                    text-[12px]
                    text-[#887466]
                    transition-colors
                    duration-200
                    hover:text-[#84501e]
                  "
                >
                  Contact
                </a>
              </div>
            </div>

            {/* COMPANY */}

            <div
              className="
                col-span-2
                sm:col-span-1
              "
            >
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#34271d]
                "
              >
                Company
              </p>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >
                <a
                  href="#about"
                  className="
                    text-[12px]
                    text-[#887466]
                    transition-colors
                    duration-200
                    hover:text-[#84501e]
                  "
                >
                  Our Story
                </a>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[12px]
                    text-[#887466]
                  "
                >
                  <FiMapPin size={12} className="shrink-0" />

                  <span>Philippines</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-[#eee7df]
            py-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[10px]
              leading-5
              text-[#a08f82]
            "
          >
            © {currentYear} SPRYtech PRINT. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
            "
          >
            <a
              href="#"
              className="
                text-[10px]
                text-[#a08f82]
                transition-colors
                hover:text-[#84501e]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-[10px]
                text-[#a08f82]
                transition-colors
                hover:text-[#84501e]
              "
            >
              Terms of Service
            </a>

            <a
              href="#contact"
              className="
                text-[10px]
                text-[#a08f82]
                transition-colors
                hover:text-[#84501e]
              "
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM WHITE SPACE
      ====================================================== */}

      <div className="h-3 w-full bg-white sm:h-5" />
    </footer>
  );
};

export default Footer;

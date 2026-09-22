import { FiFacebook, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        w-full
        bg-[#f8f1e7]
        px-4
        pb-4
        pt-8
        sm:px-5
        lg:px-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1900px]
          rounded-[24px]
          border
          border-[#eee7df]
          bg-white
          px-6
          py-8
          shadow-[0_10px_35px_rgba(52,39,29,0.04)]
          sm:px-8
          lg:px-12
          lg:py-10
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-12
            lg:gap-8
          "
        >
          {/* BRAND */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2">
              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-md
                  bg-[#34271d]
                  text-[11px]
                  font-semibold
                  text-white
                "
              >
                P
              </div>

              <span
                className="
                  text-sm
                  font-semibold
                  tracking-[-0.02em]
                  text-[#34271d]
                "
              >
                Your Brand
              </span>
            </div>

            <p
              className="
                mt-4
                max-w-[430px]
                text-xs
                leading-6
                text-[#887466]
              "
            >
              Personalized gifts and laser engraved pieces made with care,
              precision, and attention to detail.
            </p>

            {/* SOCIAL */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  text-[#6f5e50]
                  transition-colors
                  duration-200
                  hover:text-[#84501e]
                "
              >
                <FiFacebook size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  text-[#6f5e50]
                  transition-colors
                  duration-200
                  hover:text-[#84501e]
                "
              >
                <FiInstagram size={15} />
              </a>

              <a
                href="#contact"
                aria-label="Email"
                className="
                  text-[#6f5e50]
                  transition-colors
                  duration-200
                  hover:text-[#84501e]
                "
              >
                <FiMail size={15} />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div
            className="
              grid
              grid-cols-2
              gap-8
              sm:grid-cols-3
              lg:col-span-6
            "
          >
            {/* PRODUCTS */}
            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  text-[#34271d]
                "
              >
                Products
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href="#collection"
                  className="text-xs text-[#887466] hover:text-[#84501e]"
                >
                  Collection
                </a>

                <a
                  href="#services"
                  className="text-xs text-[#887466] hover:text-[#84501e]"
                >
                  Services
                </a>

                <a
                  href="#contact"
                  className="text-xs text-[#887466] hover:text-[#84501e]"
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
                  text-[#34271d]
                "
              >
                Resources
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href="#about"
                  className="text-xs text-[#887466] hover:text-[#84501e]"
                >
                  About
                </a>

                <a
                  href="#reviews"
                  className="text-xs text-[#887466] hover:text-[#84501e]"
                >
                  Reviews
                </a>

                <a
                  href="#contact"
                  className="text-xs text-[#887466] hover:text-[#84501e]"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  text-[#34271d]
                "
              >
                Company
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href="#about"
                  className="text-xs text-[#887466] hover:text-[#84501e]"
                >
                  Our Story
                </a>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-[#887466]
                  "
                >
                  <FiMapPin size={12} />
                  Philippines
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-[#eee7df]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[10px] text-[#a08f82]">
            © {currentYear} Your Brand. All rights reserved.
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
              className="text-[10px] text-[#a08f82] hover:text-[#84501e]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[10px] text-[#a08f82] hover:text-[#84501e]"
            >
              Terms of Service
            </a>

            <a
              href="#contact"
              className="text-[10px] text-[#a08f82] hover:text-[#84501e]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

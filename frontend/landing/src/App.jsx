import Navigation from "@/components/navigation/navigation";

import Hero from "@/sections/Hero/Hero";
import Collection from "@/sections/Collection/Collection";
import Services from "@/sections/Services/Services";
import About from "@/sections/About/About";
import Reviews from "@/sections/Reviews/Reviews";

// import Location from "@/sections/Location/Location";
// import Contact from "@/sections/Contact/Contact";

import Footer from "@/sections/Footer/Footer";

const App = () => {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-[#34271d]
      "
    >
      <main
        className="
          w-full
          bg-white

          p-0

          sm:px-4
          sm:pb-10
          sm:pt-4

          lg:px-4
          lg:pb-14
          lg:pt-5
        "
      >
        {/* =====================================================
            MAIN WEBSITE
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1900px]
          "
        >
          {/* STICKY NAVIGATION */}

          <Navigation />

          {/* ===================================================
              CONTENT
              
              MOBILE:
              Full width
              No outer padding
              No rounded corners

              TABLET/DESKTOP:
              Rounded container
          =================================================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden

              rounded-none

              bg-[linear-gradient(180deg,#fffdf9_0%,#fff8ee_45%,#f8e7cf_100%)]

              sm:rounded-[24px]
            "
          >
            <Hero />

            <Collection />

            <Services />

            <About />

            <Reviews />

            {/*
            <Location />
            <Contact />
            */}
          </div>
        </div>

        {/* =====================================================
            FOOTER
            OUTSIDE MAIN ROUNDED WEBSITE
        ====================================================== */}

        <Footer />
      </main>
    </div>
  );
};

export default App;

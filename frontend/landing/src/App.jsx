import Navigation from "@/components/navigation/navigation";

import Hero from "@/sections/Hero/Hero";
import Collection from "@/sections/Collection/Collection";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#34271d]">
      <main
        className="
          w-full
          bg-white
          px-3
          pb-10
          pt-3

          sm:px-4
          sm:pt-4

          lg:px-4
          lg:pb-14
          lg:pt-5
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1900px]
            overflow-hidden
            rounded-[24px]
            bg-[linear-gradient(180deg,#fffdf9_0%,#fff8ee_45%,#f8e7cf_100%)]
          "
        >
          <Navigation />

          <Hero />

          <Collection />
        </div>
      </main>
    </div>
  );
};

export default App;

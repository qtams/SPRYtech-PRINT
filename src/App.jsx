import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />

      <main>
        {/* =========================================
            TEMPORARY HERO
        ========================================= */}
        <section
          id="home"
          className="
            flex
            min-h-screen
            scroll-mt-20
            items-center
            justify-center
            px-5
            pt-20
            sm:px-8
            lg:px-12
          "
        >
          <div className="mx-auto w-full max-w-[1440px] py-20 text-center">
            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[var(--brand)]
              "
            >
              Custom Laser Engraving
            </p>

            <h1
              className="
                mx-auto
                max-w-4xl
                font-[var(--font-heading)]
                text-5xl
                font-medium
                leading-[0.95]
                tracking-[-0.04em]
                text-[var(--heading)]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Crafted with precision.
              <br />
              Made personal.
            </h1>

            <p
              className="
                mx-auto
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-[var(--text)]
                sm:text-base
              "
            >
              Personalized laser engraving for gifts, corporate items,
              keepsakes, accessories, and custom-made products.
            </p>
          </div>
        </section>

        <section
          id="services"
          className="min-h-screen scroll-mt-20 bg-[var(--surface)]"
        />

        <section id="products" className="min-h-screen scroll-mt-20" />

        <section
          id="gallery"
          className="min-h-screen scroll-mt-20 bg-[var(--surface)]"
        />

        <section id="about" className="min-h-screen scroll-mt-20" />

        <section
          id="contact"
          className="min-h-screen scroll-mt-20 bg-[var(--surface)]"
        />
      </main>
    </div>
  );
}

export default App;

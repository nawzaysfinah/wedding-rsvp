import "./App.css";
import Hero from "./components/Hero";
import RSVPSection from "./components/RSVPsection";
import Gallery from "./components/gallery";
import VenueDetails from "./components/VenueDetails";
import Schedule from "./components/Schedule";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="fixed top-0 left-0 w-full h-full m-0 p-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen">
          <Hero />
        </section>
        <section className="snap-start h-screen">
          <VenueDetails />
        </section>
        <section className="snap-start h-screen">
          <Gallery />
        </section>
        <section className="snap-start h-screen">
          <GoogleMap />
        </section>
        <section className="snap-start h-screen">
          <Schedule />
        </section>
        <section className="snap-start h-screen">
          <RSVPSection />
        </section>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import Hero from "./components/Hero";
import RSVPSection from "./components/RSVPSection";
import Gallery from "./components/gallery";
import VenueDetails from "./components/VenueDetails";
import backgroundImage from "./assets/gallery/photo1.jpeg";
import Schedule from "./components/Schedule";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div
      className="min-h-screen w-full m-0 p-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
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

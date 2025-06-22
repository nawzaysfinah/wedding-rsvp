import "./App.css";
import Hero from "./components/Hero";
import RSVPSection from "./components/RSVPSection";
import Gallery from "./components/gallery";
import VenueDetails from "./components/VenueDetails";
import backgroundImage from "./assets/gallery/photo1.jpeg";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div
      className="min-h-screen w-full m-0 p-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <main>
        <Hero />
        <VenueDetails />
        <Gallery />
        <Schedule />
        <RSVPSection />
      </main>
    </div>
  );
}

export default App;

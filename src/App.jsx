import "./App.css";
import Hero from "./components/Hero";
import RSVPSection from "./components/RSVPsection";
import Gallery from "./components/Gallery";
import VenueDetails from "./components/VenueDetails";
import Schedule from "./components/Schedule";
import GoogleMap from "./components/GoogleMap";
import HeartCursor from "./components/heart-cursor";
import SpotifyPlayer from "./components/SpotifyPlayer";
import HeartBurst from "./components/HeartBurst";

// Inside your App component JSX

function App() {
  return (
    <div className="fixed top-0 left-0 w-full h-full m-0 p-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      <HeartCursor />
      <HeartBurst />;
      <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Spotify Player Responsive Positioning */}
        <div className="z-50 w-[300px] max-w-[90%] fixed bottom-[20px] left-1/2 -translate-x-1/2">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/6MYoV7Pes2uOg7GoIIgTLY?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

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

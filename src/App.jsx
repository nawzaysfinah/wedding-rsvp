import React, { Suspense, lazy } from "react";
import "./App.css";

const Hero = lazy(() => import("./components/Hero"));
const RSVPSection = lazy(() => import("./components/RSVPsection"));
const Gallery = lazy(() => import("./components/Gallery"));
const VenueDetails = lazy(() => import("./components/VenueDetails"));
const Schedule = lazy(() => import("./components/Schedule"));
const GoogleMap = lazy(() => import("./components/GoogleMap"));
const GoogleForm = lazy(() => import("./components/Googleform"));
const HeartCursor = lazy(() => import("./components/heart-cursor"));
const SpotifyPlayer = lazy(() => import("./components/SpotifyPlayer"));
const HeartBurst = lazy(() => import("./components/HeartBurst"));
const BouncingCloud = lazy(() => import("./components/BouncingCloud"));

function App() {
  return (
    <div className="fixed top-0 left-0 w-full h-full m-0 p-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      <HeartCursor />
      <HeartBurst />
      <BouncingCloud />
      <Suspense
        fallback={<div className="text-white text-center mt-8">Loading...</div>}
      >
        <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
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
            <RSVPSection />
          </section>
          <section className="snap-start h-screen">
            <GoogleForm />
          </section>
          <section className="snap-start h-screen">
            <GoogleMap />
          </section>
          <section className="snap-start h-screen">
            <Schedule />
          </section>
        </main>
      </Suspense>
    </div>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import "./App.css";
import BouncingBall from "./components/BouncingBall";
import BouncingCloud from "./components/BouncingCloud";
import NOG from "./components/NOG";
import AudioPlayer from "./components/AudioPlayer";
const Hero = lazy(() => import("./components/Hero"));
const RSVPSection = lazy(() => import("./components/RSVPsection"));
const Gallery = lazy(() => import("./components/Gallery"));
const VenueDetails = lazy(() => import("./components/VenueDetails"));
const Schedule = lazy(() => import("./components/Schedule"));
const GoogleMap = lazy(() => import("./components/GoogleMap"));
const GoogleForm = lazy(() => import("./components/Googleform"));
const HeartCursor = lazy(() => import("./components/heart-cursor"));
const HeartBurst = lazy(() => import("./components/HeartBurst"));

function App() {
  return (
    <div className="fixed top-0 left-0 w-full h-full m-0 p-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      <HeartBurst />
      <AudioPlayer />
      <BouncingCloud />
      <BouncingBall />
      <Suspense
        fallback={<div className="text-white text-center mt-8">Loading...</div>}
      >
        <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
          {/* Spotify Player Responsive Positioning */}

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
            <Schedule />
          </section>
          <section className="snap-start h-screen">
            <GoogleMap />
          </section>
          <section className="snap-start h-screen">
            <NOG />
          </section>
        </main>
      </Suspense>
    </div>
  );
}

export default App;

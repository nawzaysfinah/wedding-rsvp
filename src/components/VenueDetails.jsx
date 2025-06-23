import React from "react";

const VenueDetails = () => {
  return (
    <div className="font-serif">
      <section
        id="venue"
        className="h-screen w-full flex flex-col justify-center items-center text-center px-4 py-20 text-[#4a4a4a] "
      >
        <div className="bg-white bg-opacity-100">
          <h1 className="text-4xl font-bold mb-6">You're Invited 💌</h1>
          <p className="text-lg font-medium mb-4">25th October 2025</p>
          <br></br>
          <p className="text-2xl font-semibold mb-4">
            Join us for a special day of love and celebration
          </p>
          <br />
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-xl px-8 py-6 max-w-xl">
            <h3 className="text-3xl font-bold mb-2">Burkill Hall</h3>
            <p className="text-lg font-medium mb-2">National Orchid Garden</p>
            <p className="text-lg font-medium mb-2">
              Singapore Botanic Gardens
            </p>
            <br></br>
            <p className="text-lg font-semibold">
              Attire: Linen, Florals & Comfort
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenueDetails;

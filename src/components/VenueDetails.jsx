import React from "react";

const VenueDetails = () => {
  return (
    <section
      id="venue"
      className="h-screen w-full flex flex-col justify-center items-center text-center px-4 py-20 text-[#4a4a4a]"
    >
      <h2 className="text-4xl font-bold mb-6">You're Invited</h2>
      <p className="text-xl mb-4">
        Join us for a special day of love and celebration
      </p>
      <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-xl px-8 py-6 max-w-xl">
        <h3 className="text-2xl font-semibold mb-2">Burkill Hall</h3>
        <p className="mb-2">National Orchid Garden</p>
        <p className="mb-2">Singapore Botanic Gardens</p>
        <p className="mb-4">25th October 2025</p>
        <p className="font-medium">Attire: Linen, Florals & Comfort</p>
      </div>
    </section>
  );
};

export default VenueDetails;

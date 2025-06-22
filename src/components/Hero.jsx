const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center px-6 pt-24 text-center bg-transparent text-[#FFC300]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Syazwan & Huan are getting married
      </h1>
      <p className="text-lg md:text-xl mb-2">
        Burkill Hall, National Orchid Garden, Singapore Botanic Gardens<br></br>
        25th October 2025<br></br>
        Attire: Linen, Florals & Comfort
      </p>
      {/* <p className="text-md md:text-lg mb-4">25th October 2025</p>
      <p className="italic text-yellow-500">Attire: Linen, Florals & Comfort</p> */}
    </section>
  );
};

export default Hero;

export default function NOG() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center"></h2>
      <div className="w-full md:w-3/4 flex justify-center items-center">
        <a href="/nog-map.jpg" download>
          <img
            src="/nog-map.jpg"
            alt="National Orchid Garden Map"
            className="max-w-[80vw] max-h-[80vh] sm:max-w-full sm:max-h-full cursor-pointer hover:opacity-90 transition sm:rotate-0"
          />
        </a>
      </div>
    </div>
  );
}

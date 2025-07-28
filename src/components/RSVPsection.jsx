import { useState } from "react";

function RSVPSection() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleClick = (type) => {
    const formUrl =
      type === "lunch"
        ? "https://docs.google.com/forms/d/e/1FAIpQLSeXBQ7yRnWQi1M05yvE1Laa9BvpqiXy2I1tEkJUnfeMLfADDA/viewform?embedded=true"
        : "https://docs.google.com/forms/d/e/1FAIpQLSdYXxgKdSpGdb0xNk-tNW2E6GIUCRuqBmLCLuTheFHSTzxT5A/viewform?embedded=true";
    const encodedUrl = encodeURIComponent(formUrl);
    window.location.href = `/googleform?url=${encodedUrl}`;
  };

  return (
    <>
      <section
        id="rsvp"
        className="h-screen w-full px-4 flex items-center justify-center text-black"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">
            <a
              href="#googleform"
              className="text-3xl font-bold text-center text-[#4a4a4a]"
            >
              RSVP
            </a>
          </h1>
          <p className="text-center mb-6 text-[#4a4a4a]">
            Please RSVP by 31st August 2025 to help us plan better.
          </p>
        </div>
      </section>
    </>
  );
}

export default RSVPSection;

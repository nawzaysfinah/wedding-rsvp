import React, { useState } from "react";

function GoogleForm() {
  const [formUrl, setFormUrl] = useState("");

  const handleFormLoad = (type) => {
    if (type === "lunch") {
      setFormUrl(
        "https://docs.google.com/forms/d/e/1FAIpQLSeXBQ7yRnWQi1M05yvE1Laa9BvpqiXy2I1tEkJUnfeMLfADDA/viewform?embedded=true"
      );
    } else if (type === "dinner") {
      setFormUrl(
        "https://docs.google.com/forms/d/e/1FAIpQLSdYXxgKdSpGdb0xNk-tNW2E6GIUCRuqBmLCLuTheFHSTzxT5A/viewform?embedded=true"
      );
    }
  };

  return (
    <section
      id="googleform"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      {/* <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="flex justi"></div>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          onClick={() => handleFormLoad("lunch")}
        >
          Lunch
        </button>
        <button
          className="bg-white text-black px-6 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => handleFormLoad("dinner")}
        >
          Dinner
        </button>
      </div> */}

      <div className="max-w-3xl mx-auto">
        <p className="text-center mb-6">
          <span className="block text-[#4a4a4a] text-center font-bold text-black mb-4">
            Please select the group you were invited to. If you’re unsure, refer
            to your invitation.
          </span>
          <br></br>
        </p>

        <div className="flex justify-around">
          <button
            onClick={() => handleFormLoad("lunch")}
            className="px-6 py-3 bg-[#C70039] rounded-full shadow-md hover:bg-[#FFC300]"
          >
            LUNCH
          </button>
          <button
            onClick={() => handleFormLoad("dinner")}
            className="px-6 py-3 bg-[#C70039] rounded-full shadow-md hover:bg-[#1b4f72]"
          >
            DINNER
          </button>
        </div>
        <br></br>
      </div>

      {formUrl && (
        <div className="w-[90%] md:w-[50%] h-[80vh] rounded-lg bg-white bg-opacity-90 shadow-md overflow-y-auto p-4">
          <iframe
            title="Google Form"
            src={formUrl}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default GoogleForm;

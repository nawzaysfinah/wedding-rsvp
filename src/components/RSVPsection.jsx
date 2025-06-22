import { useState } from "react";

function RSVPSection() {
  const [selectedForm, setSelectedForm] = useState(null);

  const formLinks = {
    lunch:
      "https://docs.google.com/forms/d/e/1FAIpQLSeXBQ7yRnWQi1M05yvE1Laa9BvpqiXy2I1tEkJUnfeMLfADDA/viewform?embedded=true",
    dinner:
      "https://docs.google.com/forms/d/e/1FAIpQLSci3UH_WVruaSzOGVHpiBZ56WiAUEDv9ZkVt_fhd8B04GKsGQ/viewform?embedded=true",
    both: "", // placeholder – to be filled later
  };

  return (
    <section
      id="rsvp"
      className="h-screen w-full px-4 flex items-center justify-center text-[#FFC300]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">RSVP</h2>
        <p className="text-center mb-6">
          Please select the group you were invited to.<br></br>
          If you’re unsure, refer to your invitation.<br></br>
          <br></br>
        </p>

        <div className="flex justify-center items-center gap-12 mb-8">
          <button
            onClick={() => setSelectedForm("lunch")}
            className="px-6 py-3 text-lg font-semibold bg-[#87CEEB] rounded-full shadow-md hover:bg-[#e6ddd3] transition-colors duration-300"
          >
            🥢 Lunch (Family)
          </button>
          <button
            onClick={() => setSelectedForm("dinner")}
            className="px-6 py-3 text-lg font-semibold bg-[#87CEEB] rounded-full shadow-md hover:bg-[#e6ddd3] transition-colors duration-300"
          >
            🍽️ Dinner (Friends)
          </button>
        </div>
        <br></br>

        {selectedForm && formLinks[selectedForm] && (
          <div className="w-[80%] h-[700px] border rounded overflow-hidden mx-auto">
            <iframe
              src={formLinks[selectedForm]}
              width="100%"
              height="100%"
              frameBorder="0"
              title="RSVP Form"
              style={{ backgroundColor: "transparent" }}
            >
              Loading…
            </iframe>
          </div>
        )}
      </div>
    </section>
  );
}

export default RSVPSection;

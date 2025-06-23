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
      className="h-screen w-full px-4 flex items-center justify-center text-[#ff8033]"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">RSVP</h1>
        <p className="text-center mb-6">
          Please select the group you were invited to.<br></br>
          If you’re unsure, refer to your invitation.<br></br>
          <br></br>
        </p>

        <div className="flex justify-around">
          <button
            onClick={() => setSelectedForm("lunch")}
            className="px-6 py-3 bg-[#C70039] rounded-full shadow-md hover:bg-[#FFC300]"
          >
            LUNCH
          </button>
          <button
            onClick={() => setSelectedForm("dinner")}
            className="px-6 py-3 bg-[#C70039] rounded-full shadow-md hover:bg-[#1b4f72]"
          >
            DINNER
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

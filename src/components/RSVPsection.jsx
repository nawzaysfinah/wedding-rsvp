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
    <section id="rsvp" className="h-screen w-full bg-[#fdfaf6] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">RSVP</h2>
        <p className="text-center mb-6">
          Please select the group you were invited to. If you’re unsure, refer
          to your invitation.
        </p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setSelectedForm("lunch")}
            className="px-4 py-2 bg-[#f0eae2] rounded hover:bg-[#e6ddd3]"
          >
            🥢 Lunch (Family)
          </button>
          <button
            onClick={() => setSelectedForm("dinner")}
            className="px-4 py-2 bg-[#f0eae2] rounded hover:bg-[#e6ddd3]"
          >
            🍽️ Dinner (Friends)
          </button>
        </div>

        {selectedForm && formLinks[selectedForm] && (
          <div className="w-full h-[700px] border rounded overflow-hidden">
            <iframe
              src={formLinks[selectedForm]}
              width="100%"
              height="100%"
              frameBorder="0"
              title="RSVP Form"
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

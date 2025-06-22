import React from "react";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="h-screen w-full px-4 text-[#4a4a4a] flex items-center justify-center pt-12"
    >
      <div className="w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            📅 25 October 2025
          </h2>
          <br></br>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">🍵 Tea Ceremony</h3>
              <p className="text-gray-700">10:30 AM – 11:30 AM</p>
              <br></br>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🍽️ Lunch</h3>
              <p className="text-gray-700">11:30 AM – 2:00 PM</p>
              <br></br>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🍸 Cocktail Hour</h3>
              <p className="text-gray-700">4:30 PM – 5:30 PM</p>
              <br></br>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🍷 Dinner</h3>
              <p className="text-gray-700">5:30 PM - 9:00 PM</p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

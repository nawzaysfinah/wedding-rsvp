import React from "react";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="h-screen w-full py-12 px-4 text-[#4a4a4a]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Schedule</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Lunch</h3>
            <p className="text-gray-700">11:30 AM at Burkill Hall</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Dinner</h3>
            <p className="text-gray-700">5:00 PM at Burkill Hall</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

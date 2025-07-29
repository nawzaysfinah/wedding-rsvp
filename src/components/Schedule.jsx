import React from "react";
import BouncingBall from "./BouncingBall";

const Schedule = () => {
  return (
    <>
      <section
        id="schedule"
        className="h-screen w-full px-4 text-[#4a4a4a] flex items-center justify-center pt-12"
      >
        <div className="w-full">
          <div className="max-w-4xl mx-auto">
            {/* <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              25<sup>th</sup> October 2025
            </h2> */}

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold font-serif">
                  Tea Ceremony
                </h3>
                <p className="text-gray-700">10:30 AM – 11:30 AM</p>
              </div>
              <br></br>
              <div>
                <h3 className="text-xl font-semibold font-serif">
                  Lunch Reception
                </h3>
                <p className="text-gray-700">11:30 AM – 2:00 PM</p>
              </div>
              <br></br>
              <div>
                <h3 className="text-xl font-semibold font-serif">
                  Pre‑Reception
                </h3>
                <p className="text-gray-700">4:20 PM – 5:30 PM</p>
              </div>
              <br></br>
              <div>
                <h3 className="text-xl font-semibold font-serif">
                  Dinner Reception
                </h3>
                <p className="text-gray-700">5:30 PM - 9:00 PM</p>
              </div>
            </div>
            <br></br>
            <div className="mt-8">
              <h3 className="text-xl font-semibold font-serif">Attire</h3>
              <p className="text-gray-700">Linen, Florals & Comfort</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;

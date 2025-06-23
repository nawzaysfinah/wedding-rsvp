import React from "react";
import cloudBackground from "../assets/cloud-background.png";
import BouncingCloud from "./BouncingCloud";

const GoogleMap = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 text-[#FFC300] -mt-20 md:-mt-32 overflow-hidden relative">
      <BouncingCloud />

      {/* Foreground Content */}
      <div className="w-[80%] max-w-[900px] min-h-[600px] shadow-lg rounded-[20px] overflow-hidden flex flex-col bg-white/90 relative z-10">
        <div className="bg-white bg-opacity-90 p-6 text-base md:text-lg w-full text-left">
          <h3 className="font-bold mb-2">🏎️ By Car:</h3>
          <p>
            <b>Learning Forest Public Carpark</b>
            <br></br>
            <i>Tyersall Ave</i>
          </p>
          <p className="italic mb-4">
            Note: We recommend to carpool due to limited parking space
          </p>
          <br></br>

          <h3 className="font-bold mb-2">🚕 By Taxi: (Recommended) 💡</h3>
          <p>
            Set Destination <b>“Learning Forest”</b>
            <br></br> or <b>“The Halia”</b> drop off
          </p>
          <br></br>
        </div>
        <div className="my-4" />
        <iframe
          title="Burkill Hall"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.5436376362795!2d103.81106337684679!3d1.3123222616914116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a19644470c5%3A0x107457e7bf40268!2sBurkill%20Hall!5e0!3m2!1sen!2ssg!4v1750603019017!5m2!1sen!2ssg"
          className="w-full max-w-full"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;

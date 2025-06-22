import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-[900px] h-[75vh] shadow-lg rounded-[20px] overflow-hidden">
        <iframe
          title="Burkill Hall"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.794323446428!2d103.81711022153348!3d1.312536245054358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16.5!3m3!1m2!1s0x31da19c5c4b80001%3A0xd759927d7c0d7c92!2sBurkill%20Hall!5e0!3m2!1sen!2ssg!4v1719063949334!5m2!1sen!2ssg"
          width="100%"
          height="100%"
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

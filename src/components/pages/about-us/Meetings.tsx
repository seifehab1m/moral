import React from "react";
import img from "@/assets/images/meeting.png";

export default function Meetings() {
  return (
    <div
      style={{
        backgroundImage: `url(${img?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full mt-14 min-h-screen py-12 lg:py-28 bg-no-repeat bg-cover bg-center"
    >
        
    </div>
  );
}

import React, { useState } from "react";
import { FaSun } from "react-icons/fa";

const HomePage = () => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching weather for:", city);
    setCity(""); // Clear input after submission
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen pt-4">
      <h1 className="text-4xl">Search for the weather</h1>

      <div className="p-4 px-6 shadow-2xl rounded-2xl flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl">Weather info- </h1>
        <div>
          <img className="h-20 rounded-sm" src="https://media.istockphoto.com/id/531889697/photo/weather-forecast-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=lXbZdVHgxSFdx8Ud0Q66wybUZ5xy7BlGIuLYaConVMQ=" alt="" />
        </div>
        <div className="text-white">
          <h>John Doe</h>
          <h></h>
          <h></h>
          <h></h>
          <h></h>
        </div>
      </div>

      <button className="text-4xl shadow-2xl rounded-2xl cursor-pointer absolute top-5 right-5 bg-white p-2 text-white">
        <FaSun />
      </button>
    </div>
  );
};

export default HomePage;

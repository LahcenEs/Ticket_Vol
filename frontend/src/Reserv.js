import React, { useEffect, useState, useRef } from "react";
import SlimSelect from "slim-select";
import "./Reserve.css";
import { MdLocationPin } from "react-icons/md";
import { FaClosedCaptioning, FaExchangeAlt } from "react-icons/fa";

const moroccanCities = [
  { id: 1, city: "Casablanca" },
  { id: 2, city: "Rabat" },
  // Add other cities
];

const Reserv = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const selectRef2 = useRef(null);
  const selectRef = useRef(null);

  const handleChang = (e) => {
    setTo(e.target.value);
    console.log(e.target.value);
  };
  const handleChan = (e) => {
    setStartDate(e.target.value);
    console.log(e.target.value);
  };
  const handleCha = (e) => {
    setEndDate(e.target.value);
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    setFrom(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    const slimSelect1 =
      selectRef.current &&
      new SlimSelect({
        select: selectRef.current,
        placeholder: "Sélectionnez une ville",
      });

    const slimSelect2 =
      selectRef2.current &&
      new SlimSelect({
        select: selectRef2.current,
        placeholder: "Sélectionnez une ville",
      });
  }, [moroccanCities]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/vols?from=${from}&to=${to}&startDate=${startDate}&endDate=${endDate}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Assuming the response is JSON
      console.log(data); // Log or handle the response data
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      // Handle errors, show a message to the user, etc.
    }
  };

  return (
    <div className="container reservation">
      <div
        style={{
          marginTop: 30,
          textAlign: "center",
          marginBottom: 40,
          fontSize: 70,
          color: "blue",
        }}
      >
        Reservation
      </div>
      <div className="row bg-secondary-subtle rounded-4 p-2">
        <div className="col-md-3">
          <p>Location</p>
          <select className="form-select" value={from} onChange={(handleChange)}>
            <option data-placeholder="true" >
              Select a city
            </option>
            {moroccanCities.map((option) => (
              <option key={option.id} value={option.city}>
                {option.city}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <p>ou</p>
          <select className="form-select" value={to} onChange={(handleChang)}>
            <option data-placeholder="true" >
              Select a city
            </option>
            {moroccanCities.map((option) => (
              <option key={option.id} value={option.city}>
                {option.city}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <p>Start Date</p>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(handleChan)}
          />
        </div>
        <div className="col-md-3">
          <p>Return Date</p>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(handleCha)}
          />
        </div>
        <form className="d-flex justify-content-end" onSubmit={handleSubmit}>
          <button
            className="btn btn-outline-success mt-4"
            style={{ marginLeft: -8, borderRadius: "10px" }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reserv;

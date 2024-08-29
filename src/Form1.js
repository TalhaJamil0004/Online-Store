import React, { useState } from "react";
import "./style.css";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    manufacturer: "",
    model: "",
    prod_year: "",
    category: "",
    fuel_type: "",
    mileage: "",
    drive_wheels: "",
    doors: "",
    wheel: "",
    color: "",
    airbags: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    let { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch("http://127.0.0.1:5000/predict", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   const data = await response.json();
  //   setPrediction(data.prediction);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert form data values to integers
    const payload = {
      ...formData,
      category: parseInt(formData.category, 10),
      fuel_type: parseInt(formData.fuel_type, 10),
      drive_wheels: parseInt(formData.drive_wheels, 10),
      doors: parseInt(formData.doors, 10),
      wheel: parseInt(formData.wheel, 10),
      color: parseInt(formData.color, 10),
    };
  
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    const data = await response.json();
    setPrediction(data.prediction);
  };
 
  return (
    <div className="mid">
      <h1>Car Price Prediction</h1>
      <div className="mid">
        <form onSubmit={handleSubmit} className="form1">
          <label>Manufacturer:</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
          />

          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />

          <label>Production Year:</label>
          <input
            type="number"
            name="prod_year"
            value={formData.prod_year}
            onChange={handleChange}
          />

          <label htmlFor="carCategory">Category:</label>
          <select
            id="carCategory"
            onChange={handleChange}
            name="category"
            value={formData.category}
          >
           
            <option value="">Choose options</option>
            <option value="4">Jeep</option>
            <option value="3">Hatchback</option>
            <option value="8">Sedan</option>
            <option value="5">Microbus</option>
            <option value="9">Universal</option>
            <option value="1">Coupe</option>
            <option value="6">Minivan</option>
            <option value="0">Sedan</option>
            <option value="2">Cabriolet</option>
            <option value="7">Goods wagon</option>

            <option value="Pickup">Pickup</option>
          </select>

          <label htmlFor="fuelType">Fuel Type:</label>
          <select
            id="fuelType"
            name="fuel_type"
            value={formData.fuel_type}
            onChange={handleChange}
          >
            
            <option value="">Choose options</option>
            <option value="2">Hybrid</option>
            <option value="5">Petrol</option>
            <option value="1">Diesel</option>
            <option value="0">CNG</option>
            <option value="4">LPG</option>
            <option value="6">Plug-in Hybrid</option>
            <option value="3">Hydrogen</option>
          </select>

          <label>Mileage:</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
          />

          <label htmlFor="driveWheels">Drive Wheels:</label>
          <select
            id="driveWheels"
            name="drive_wheels"
            value={formData.drive_wheels}
            onChange={handleChange}
          >
            <option value="">Choose options</option>
            <option value="0">4x4</option>
            <option value="1">Front</option>
            <option value="2">Rear</option>
          </select>

          <label htmlFor="doors">Doors:</label>
          <select
            id="doors"
            name="doors"
            value={formData.doors}
            onChange={handleChange}
          >
            <option value="">Choose options</option>
            <option value="1">4</option>
            <option value="0">2</option>
            <option value="2">{`>5`}</option>
          </select>

          <label htmlFor="wheel">Wheel:</label>
          <select
            id="wheel"
            name="wheel"
            value={formData.wheel}
            onChange={handleChange}
          >
            <option value="">Choose options</option>
            <option value="0">Left-hand drive</option>
            <option value="1">Right-hand drive</option>
          </select>

          <label htmlFor="carColor">Color:</label>
          <select
            id="carColor"
            onChange={handleChange}
            name="color"
            value={formData.color}
          >
            
            <option value="">Choose options</option>
            <option value="12">Silver</option>
            <option value="1">Black</option>
            <option value="14">White</option>
            <option value="7">Grey</option>
            <option value="2">Blue</option>
            <option value="13">Sky blue</option>
            <option value="6">Green</option>
            <option value="11">Red</option>
            <option value="15">Yellow</option>
            <option value="3">Brown</option>
            <option value="0">Beige</option>
            <option value="8">Orange</option>
            <option value="5">Golden</option>
            <option value="10">Purple</option>
            <option value="4">Carnelian red</option>
            <option value="9">Pink</option>
          </select>

          <label>Airbags:</label>
          <input
            type="number"
            name="airbags"
            value={formData.airbags}
            onChange={handleChange}
            min="0"
            max="16"
          />

          <button type="submit">Predict</button>
        </form>
      </div>
      {prediction && (
        <div>
          <h2>Predicted Price: {prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

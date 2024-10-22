import React, { useState } from 'react';
import './BMIcalculator.css'; 

const BMIcalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height');
      return;
    }

    const heightInMeters = height / 100; 
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBMI);
   
    if (calculatedBMI < 18.5) {
      setCategory('Underweight');
    } else if (calculatedBMI < 24.9) {
      setCategory('Normal weight');
    } else if (calculatedBMI < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <div>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight (kg)"
        />
      </div>
      <div>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height (cm)"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
};

export default BMIcalculator;


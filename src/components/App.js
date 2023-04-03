import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [selectedShape, setSelectedShape] = useState("Square");
  const [shapes, setShapes] = useState([]);
  const [count, setCount] = useState(0);

  const addShape = () => {
    const newShape = selectedShape === "Square" ? "square" : "circle";
    setShapes([...shapes, newShape]);
    setCount(count + 1);
  }

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={addShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape, index) => (
          <div key={index} className={shape}>
            {index}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;

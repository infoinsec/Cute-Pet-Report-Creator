import React, { useState } from "react";
import Report from "./Report";
import Config from "./Config";

function App() {
  const [animalName, setAnimalName] = useState("");
  const [imageType, setImageType] = useState("cat");
  const [selectedUpsideDown, setSelectedUpsideDown] = useState("nope");
  const [selectedInvertColors, setSelectedInvertColors] = useState("nope");
  const [favoriteColor, setFavoriteColor] = useState("");

  const handleAnimalNameChange = (e) => {
    setAnimalName(e.target.value);
  };

  const handleImageTypeChange = (e) => {
    setImageType(e.target.value);
  };

  const handleUpsideDownSelectionChange = (e) => {
    setSelectedUpsideDown(e.target.value);
  };

  const handleInvertColorsSelectionChange = (e) => {
    setSelectedInvertColors(e.target.value);
  };

  const handleFavoriteColorChange = (e) => {
    setFavoriteColor(e.target.value);
  };

  return (
    <div>
      <h2>Cute Pet Report Tool</h2>
      <Config
        animalName={animalName}
        imageType={imageType}
        selectedUpsideDown={selectedUpsideDown}
        selectedInvertColors={selectedInvertColors}
        onAnimalNameChange={handleAnimalNameChange}
        onImageTypeChange={handleImageTypeChange}
        onUpsideDownSelectionChange={handleUpsideDownSelectionChange}
        onInvertColorsSelectionChange={handleInvertColorsSelectionChange}
        onFavoriteColorChange={handleFavoriteColorChange}
      />
      <Report
        animalName={animalName}
        imageType={imageType}
        selectedUpsideDown={selectedUpsideDown}
        selectedInvertColors={selectedInvertColors}
        favoriteColor={favoriteColor}
      />
    </div>
  );
}
export default App;

import React, { useState } from "react";

function Config({
  animalName,
  imageType,
  selectedUpsideDown,
  selectedInvertColors,
  favoriteColor,
  onAnimalNameChange,
  onImageTypeChange,
  onUpsideDownSelectionChange,
  onInvertColorsSelectionChange,
  onFavoriteColorChange
}) {

  return (
    <div>
      <div style={{ paddingBottom:"10px" }}>
        <span>Pet type: </span>
        <select value={imageType} onChange={onImageTypeChange}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="rock">Rock</option>
        </select>
      </div>
      <div style={{ paddingBottom:"10px" }}>
        <span>Name: </span>
        <input
          placeholder={`Give your ${imageType} a name!`}
          onChange={onAnimalNameChange}
        ></input>
      </div>
      <div style={{ paddingBottom:"10px" }}>
        <span>Upside-down?: </span>
        <select
          value={selectedUpsideDown}
          onChange={onUpsideDownSelectionChange}
        >
          <option value="nope">Nope</option>
          <option value="whynot">Why not!</option>
        </select>
      </div>
      <div style={{ paddingBottom:"10px" }}>
        <span>Invert Colors?: </span>
        <select
          value={selectedInvertColors}
          onChange={onInvertColorsSelectionChange}
        >
          <option value="nope">Nope</option>
          <option value="invert">Invert!</option>
        </select>
      </div>
      <div>
        <span>Favorite color?: </span>
        <input
          placeholder={`Does your ${imageType} have a favorite color?`}
          size={
            favoriteColor && favoriteColor.length > 0
              ? favoriteColor.length
              : `Does your ${imageType} have a favorite color?`.length - 4
          }
          type="text"
          value={favoriteColor}
          onChange={onFavoriteColorChange}
        ></input>
      </div>
    </div>
  );
}

export default Config;

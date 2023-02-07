import React, { useState, useEffect } from "react";

function Report({
  animalName,
  imageType,
  selectedUpsideDown,
  selectedInvertColors,
  favoriteColor
}) {
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [inverted, setInverted] = useState(false);
  const [validColor, setValidColor] = useState(true);
  const [fact, setFact] = useState("")

  useEffect(() => {
    setLoading(true);
    if (imageType === "cat") {
      fetch("https://aws.random.cat/meow")
        .then((response) => response.json())
        .then((data) => {
          setImgSrc(data.file);
          setLoading(false);
        });
    } else if (imageType === "dog") {
      fetch("https://random.dog/woof.json")
        .then((response) => response.json())
        .then((data) => {
          fetch(data.url).then((response) => {
            setImgSrc(response.url);
            setLoading(false);
          });
        });
    } else if (imageType === "rock") {
      setImgSrc( petRockImageMap[getRandomInt(1, 5)] )
      setLoading(false);
    }
  }, [imageType]);

  const petRockImageMap = {
    1: "/Cute-Pet-Report-Creator/assets/petrock-1.jpeg",
    2: "/Cute-Pet-Report-Creator/assets/petrock-2.jpg",
    3: "/Cute-Pet-Report-Creator/assets/petrock-3.gif",
    4: "/Cute-Pet-Report-Creator/assets/petrock-4.jpeg",
    5: "/Cute-Pet-Report-Creator/assets/petrock-5.jpg"
  }

  useEffect(() => {
    setInverted(selectedInvertColors === "invert");
  }, [selectedInvertColors]);

  useEffect(() => {
    // Check if favoriteColor is a valid CSS color
    const color = new Option().style;
    color.color = favoriteColor;
    setValidColor(color.color === favoriteColor);
  }, [favoriteColor]);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  return (
    <>
      <hr />
      <div>
        <h2 style={{ marginBottom: "0px" }}>
          Here is your pet {imageType}
          {animalName ? `, your ${imageType}'s name is ${animalName}` : ""}!
        </h2>
        <br />
        {loading ? (
          <div>Loading image...</div>
        ) : (
          <div>
            <img
              src={imgSrc}
              alt={imageType}
              className={inverted ? "inverted" : ""}
              style={{
                maxHeight: "500px",
                maxWidth: "100%",
                transform:
                  selectedUpsideDown === "whynot" ? "rotate(180deg)" : ""
              }}
            />
            {/* CODE REVIEW: Any way to continue onto the next statement reguardelss of what console.log happens to return? Didn't know whether to use || or && at first and had to guess and check. */}
            {console.log("favorite color: " + favoriteColor) ||
              favoriteColor &&
              favoriteColor.length > 0 && (
                <div style={{ marginBottom: "10px" }}>
                  {`Your ${imageType}'s favorite color is `}
                  <span
                    style={{ color: validColor ? favoriteColor : "" }}
                  >
                    {favoriteColor}
                  </span>
                  {`!`}
                </div>
              )}
            {fact && fact.length > 0 && (
              <>
                <h3>
                  Did you know?
                </h3>
                <div>
                  {fact}
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <hr />
    </>
  );
}

export default Report;
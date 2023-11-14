import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("Emoji meaning will appear here");
  var emojiDictionary = {
    "🙂": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "😑": "annoyance",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": " Beaming Face with Smiling Eyes",
    "😆": " Grinning Squinting Face",
    "😅": " Grinning Face with Sweat",
    "🤣": " Rolling on the Floor Laughing",
    "😂": " Face with Tears of Joy",
    "🙃": " Upside-Down Face",
    "😉": " Winking Face",
    "😊": " Smiling Face with Smiling Eyes",
    "😇": " Smiling Face with Halo",
    "🥰": " Smiling Face with Hearts",
    "😍": " Smiling Face with Heart-Eyes",
    "🤩": " Star-Struck",
    "😘": " Face Blowing a Kiss",
    "😗": " Kissing Face",
    "😚": " Kissing Face with Closed Eyes",
    "😙": " Kissing Face with Smiling Eyes",
    "😭": " Loudly Crying Face",
    "😱": " Face Screaming in Fear",
    "😖": " Confounded Face",
    "😣": " Persevering Face",
    "😞": " Disappointed Face",
    "😓": " Downcast Face with Sweat",
    "😩": " Weary Face",
    "😫": " Tired Face",
    "🥱": " Yawning Face",
    "😤": " Face with Steam From Nose"
  };

  var emojiArray = Object.keys(emojiDictionary);

  function inputChangeHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "Sorry! This emoji is not available in our dictionary.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    if (meaning === undefined) {
      meaning = "Sorry! This emoji is not available in our dictionary.";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange={inputChangeHandler}></input>
      <div id="emojiMeaning">{meaning}</div>
      <div>
        {emojiArray.map((item) => (
          <span id="emojis" key={item} onClick={() => emojiClickHandler(item)}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

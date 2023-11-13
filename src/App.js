import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  var emojiDictionary = {
    "😀" : "Grinning Face",
    "😂" : "Face with Tears of Joy"
  };

  var emojiArray = Object.keys(emojiDictionary);

  function inputChangeHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning===undefined) {
      meaning = "Sorry! This emoji is not available in our dictionary."
    }
    setMeaning(meaning);    
  }

  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    if (meaning===undefined) {
      meaning = "Sorry! This emoji is not available in our dictionary."
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange= {inputChangeHandler}></input>
      <div>{meaning}</div>
      <div>emojis we know</div>
      <div>{
        emojiArray.map(item => 
        <span key={item} >{item}
        </span>)
      }</div>
                       
    </div>
  );
}

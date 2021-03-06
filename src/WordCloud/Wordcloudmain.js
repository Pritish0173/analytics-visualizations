import React, {useState} from 'react';
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import WordcloudStart from './WordcloudStart';


function Wordcloud({words,defaultcase}) {

  const [value, setValue] = useState(null);

  function getCallback(callback) {
      return function (word, event) {
        const isActive = callback !== "onWordMouseOut";
        const element = event.target;
        const text = select(element);
        text
          .on("click", () => {
            if (isActive) {
              setValue(word.text);
            }
          })
      };
  }
    
  const callbacks = {
      // getWordColor: (word) => (word.value > 10 ? "#C2571A" : "#107896"),
      getWordTooltip: (word) =>
          `Frequency of "${word.text}" is ${word.value}.`,
      onWordClick: getCallback("onWordClick"),
      onWordMouseOut: getCallback("onWordMouseOut"),
      onWordMouseOver: getCallback("onWordMouseOver")
  };
  
  const options = {
      rotations: 3,
      rotationAngles: [0, 0],
      fontSizes: [20, 40],
      fontFamily: "Arial",
      fontWeight: "bold"
  };

  const handleReset = () => {
    setValue('default');
  }

  if(value !== null) {
    return(<WordcloudStart selected={value} defaultcase={defaultcase} />);
  }
  else{
    return(
      <div>
        <ReactWordcloud callbacks={callbacks} words={words.slice(0,50)} options={options} style={{height: '25em'}}/>
        <br></br>
        <div className="buttoncontainer">
          <button className="btn"onClick={handleReset}>Reset Wordcloud</button>
        </div>
        
      </div>
      // <ReactWordcloud callbacks={callbacks} words={words} options={options}/>
    );
  }

  // return(<ReactWordcloud callbacks={callbacks} words={words} options={options}/>);
}

export default Wordcloud;
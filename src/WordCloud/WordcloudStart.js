import React, {useState, useEffect} from 'react';
import Wordcloud from './Wordcloudmain';
import axios from "axios";
import Loader from '../Loader/Loader';

function WordcloudStart({ selected, defaultcase }) {

    // console.log(words);

    const [words, setWords] = useState(null);

    useEffect(() => {
        if(selected==='default'){
            // setWords(words[defaultcase]);
            axios.post("https://kcer3p8oa2.execute-api.ap-south-1.amazonaws.com/getdnbanalytics", {
                key: "Company Employment Industry"
            })
            .then((response) => {
                console.log(response.data.data);
                setWords(response.data.data[defaultcase]);
    
            });
        }
        else{
            axios.post("https://006j3je5g0.execute-api.ap-south-1.amazonaws.com/compAnalysis", {
                key1 :  "EmploymentIndustry-Title-freq",
                company: defaultcase,
                key2: selected
            })
            .then((response) => {
                console.log(response.data);
                setWords(response.data.data);
            });
        }
        
    }, [])

    if(words === null) {
        return(<Loader />);
    }

    return (
        <Wordcloud words={words} defaultcase={defaultcase} />
        // <Wordcloud words={words} selected={selected} />
    );
}

export default WordcloudStart;
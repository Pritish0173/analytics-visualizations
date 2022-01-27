import React, {useState, useEffect} from 'react';
import Wordcloud from './Wordcloudmain';
import axios from "axios";
import Loader from '../Loader/Loader';

function WordcloudStart({selected}) {

    const [words, setWords] = useState(null);

    const sendGetRequestWord = async () => {
        try {
            const datawordcloud = await axios.
            get(`https://cors-everywhere.herokuapp.com/http://3.110.131.196:8080/api/Individual/wordcloud/` + selected.toLowerCase() + '/')
            .then(res => {
              const wordcloudwords = res.data;
              setWords(wordcloudwords);
            })
    
        } catch (err) {
            // Handle Error Here
            console.error(err);
            sendGetRequestWord2();
        }
      };
    
    const sendGetRequestWord2 = async () => {
        try {
            const datawordcloud = await axios.
            get(`https://cors-everywhere.herokuapp.com/http://3.110.131.196:8080/api/Individual/wordcloud/` + selected.toLowerCase() + '/')
            .then(res => {
                const wordcloudwords = res.data;
                setWords(wordcloudwords);
            })

        } catch (err) {
            // Handle Error Here
            console.error(err);
            sendGetRequestWord();
        }
    };

    const sendGetRequestWorddefault = async () => {
        try {
            const datawordcloud = await axios.
            get(`https://cors-everywhere.herokuapp.com/http://3.110.131.196:8080/api/Individual/wordcloud`)
            .then(res => {
                const wordcloudwords = res.data;
                setWords(wordcloudwords);
            })

        } catch (err) {
            // Handle Error Here
            console.error(err);
            sendGetRequestWorddefault2();
        }
    };

    const sendGetRequestWorddefault2 = async () => {
        try {
            const datawordcloud = await axios.
            get(`https://cors-everywhere.herokuapp.com/http://3.110.131.196:8080/api/Individual/wordcloud`)
            .then(res => {
                const wordcloudwords = res.data;
                setWords(wordcloudwords);
            })

        } catch (err) {
            // Handle Error Here
            console.error(err);
            sendGetRequestWorddefault();
        }
    };

    useEffect(() => {
        if(selected==='default'){
            sendGetRequestWorddefault();
        }
        else{
            sendGetRequestWord();
        }
        
    }, [])

    if(words === null) {
        return(<Loader />);
    }

    return (
        <Wordcloud words={words.slice(0,50)} />
        // <Wordcloud words={words} selected={selected} />
    );
}

export default WordcloudStart;
import React, {useState, useEffect} from 'react';
import Wordcloud from './WordcloudStart';
// import axios from "axios";
import Loader from '../Loader/Loader';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { makeStyles } from '@mui/styles';

const useTabStyles = makeStyles({
    root: {
      justifyContent: "center"
    },
    scroller: {
      flexGrow: "0"
    }
  });
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'div'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function WordcloudStart() {

    const classes = useTabStyles();

    const [value, setValue] = useState(0);

    // const [words, setWords] = useState(null);

    // useEffect(() => {

        // axios.post("https://kcer3p8oa2.execute-api.ap-south-1.amazonaws.com/getdnbanalytics", {
        //     key: "Company Employment Industry"
        // })
        // .then((response) => {
        //     console.log(response.data.data);
        //     setWords(response.data.data);
        //     // console.log(words["dnb"]);
        //     // console.log(words["equifax"]);
        //     // console.log(words["experian"]);

        // });

    // }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // if(words === null) {
    //     return(<Loader />);
    // }

    return (
        <div>
          {/* <Wordcloud selected="default" defaultcase="dnb" /> */}
          {/* <Wordcloud words={words["dnb"]} selected="default" defaultcase="dnb" /> */}
            <Box sx={{bgcolor: 'transparent' }}>
                <Tabs
                    classes={{ root: classes.root, scroller: classes.scroller }}
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="D and B" {...a11yProps(0)} style={{ color: 'rgb(66, 66, 252)', fontWeight: 'bold', fontSize: '1.5em', textShadow: '2px 2px 8px rgb(66, 66, 252)' }} />
                    <Tab label="Equifax" {...a11yProps(1)} style={{ color: 'rgb(66, 66, 252)', fontWeight: 'bold', fontSize: '1.5em', textShadow: '2px 2px 8px rgb(66, 66, 252)' }} />
                    <Tab label="Experian" {...a11yProps(2)} style={{ color: 'rgb(66, 66, 252)', fontWeight: 'bold', fontSize: '1.5em', textShadow: '2px 2px 8px rgb(66, 66, 252)' }} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Wordcloud selected="default" defaultcase="dnb" />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Wordcloud selected="default" defaultcase="equifax" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Wordcloud selected="default" defaultcase="experian" />
            </TabPanel>
        </div>        
    );
}

export default WordcloudStart;
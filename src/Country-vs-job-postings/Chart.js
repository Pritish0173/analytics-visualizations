import React, {useState,useEffect} from 'react';
import BarChart from '../BarChart/HorizontalBarMultiple';
import axios from "axios";

function Chart() {

    const [chartdata, setChartData] = useState(null);

    useEffect(() => {

        axios.post("https://kcer3p8oa2.execute-api.ap-south-1.amazonaws.com/getdnbanalytics", {
            key: "country wise jobpostings"
        })
        .then((response) => {
            // console.log(response.data.data);
            setChartData(response.data.data);
        });

    }, [])

    if(chartdata === null) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div>
            <BarChart data={chartdata.slice(0,11)} xAxisLabel="No. of Job Postings" yAxisLabel="Countries"/>
        </div>
    );
}

export default Chart;
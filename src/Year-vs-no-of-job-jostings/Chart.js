import React, {useState,useEffect} from 'react';
import BarChart from '../BarChart/HorizontalBarMultiple';
import axios from "axios";

function Chart() {

    const [chartdata, setChartData] = useState(null);

    useEffect(() => {

        axios.post("https://kcer3p8oa2.execute-api.ap-south-1.amazonaws.com/getdnbanalytics", {
            key: "Year wise job postings"
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
            <BarChart data={chartdata} xAxisLabel="No. of Job Postings" yAxisLabel="Year"/>
        </div>
    );
}

export default Chart;
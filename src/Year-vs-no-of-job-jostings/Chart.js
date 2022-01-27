import React, {useState,useEffect} from 'react';
import BarChart from '../BarChart/HorizontalBarMultiple';
// import axios from "axios";

function Chart() {

    // const [chartdata, setChartData] = useState(null);

    // useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //         setChartData(response.data);
    //       });
    // }, [])

    // if(chartdata === null) {
    //     return (
    //         <div>
    //             Loading...
    //         </div>
    //     );
    // }

    const chartdata = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
    ];

    return (
        <div>
            <BarChart data={chartdata}/>
        </div>
    );
}

export default Chart;
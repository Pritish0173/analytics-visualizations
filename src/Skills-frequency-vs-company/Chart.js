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
        ["Element", "Density"],
        ["Copper", 8.94],
        ["Silver", 10.49],
        ["Gold", 19.3],
        ["Platinum", 21.45]
    ];

    return (
        <div>
            <BarChart data={chartdata}/>
        </div>
    );
}

export default Chart;
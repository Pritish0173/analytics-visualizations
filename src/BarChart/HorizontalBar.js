import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//   ["Element", "Density"],
//   ["Copper", 8.94],
//   ["Silver", 10.49],
//   ["Gold", 19.3],
//   ["Platinum", 21.45]
// ];

export default function BarChart({data}) {

    const options = {
        title: "Density of Precious Metals, in g/cm^3",
        bar: { groupWidth: "90%" },
        legend: { position: "none" }
    };

    return (
        <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        />
    );
}

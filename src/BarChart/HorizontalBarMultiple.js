import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//   ["Year", "Sales", "Expenses", "Profit"],
//   ["2014", 1000, 400, 200],
//   ["2015", 1170, 460, 250],
//   ["2016", 660, 1120, 300],
//   ["2017", 1030, 540, 350],
// ];

// const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017",
//   },
//   bars: "horizontal",
//   axes: {
//     x: {
//       0: { side: 'bottom', label: 'Numbers'}
//     },
//     y: {
//       0: { side: 'left', label: 'Something'}
//     }
//   }
// };

export default function Barchart({data}) {

  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    bars: "horizontal",
    axes: {
      x: {
        0: { side: 'bottom', label: 'Numbers'}
      },
      y: {
        0: { side: 'left', label: 'Something'}
      }
    }
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="30em"
      data={data}
      options={options}
    />
  );
}
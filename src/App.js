import './App.css';
import Firstchart from './Year-vs-no-of-job-jostings/Chart';
import Secondchart from './Skills-frequency-vs-company/Chart';
import Thirdchart from './Country-vs-job-postings/Chart';
import Fourthchart from './Country-vs-Employment-Industry/Chart';
import Wordcloud from './WordCloud/WordcloudStart';

function App() {
  return (
    <div>
      <h1 className="heading">Visualizations for Analytics</h1>
      <br></br>
      <div className="charts">
        <Firstchart />
        <br></br>
        <Secondchart />
        <br></br>
        <Thirdchart />
        <br></br>
        <Fourthchart />
      </div>
      {/* <Firstchart />
      <br></br>
      <Secondchart />
      <br></br>
      <Thirdchart />
      <br></br>
      <Fourthchart /> */}
      <br></br>
      <br></br>
      <div className="wordcloud">
        <Wordcloud selected='default'/>
      </div>
      {/* <Wordcloud selected='default'/> */}
    </div>
  );
}

export default App;

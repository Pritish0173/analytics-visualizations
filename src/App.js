import './App.css';
import Firstchart from './Year-vs-no-of-job-jostings/Chart';
import Secondchart from './Country-vs-job-postings/Chart';
import Thirdchart from './Skills-frequency-vs-company/Chart';
// import Fourthchart from './Country-vs-Employment-Industry/Chart';
import Wordcloud from './WordCloud/Wordcloud';

function App() {
  return (
    <div>
      <h1 className="heading">Competitor Analysis of Dun {"&"} Bradstreet</h1>
      <br></br>
      <div className="charts">
        <h2 className="graphheading">Job Postings Vs Year</h2>
        <p className="graphdescription">This graph shows job postings posted by D&B, Equifax and Experian year-wise.</p>
        <Firstchart />
        
        <br></br>
        <hr></hr>
        <br></br>
        <h2 className="graphheading">Location wise job postings</h2>
        <p className="graphdescription">This graph shows job postings posted by D&B, Equifax and Experian in different countries.</p>
        <Secondchart />
      </div>
        <br></br>
        <hr style={{width: '90%'}}></hr>
        <br></br>
      <div className="wordcloud">
        <h2 className="graphheading">Wordcloud of Employment Industries</h2>
        <p className="graphdescription">This word cloud displays the employment industries present in each company and frequency represents the job postings of that particular employment industry. On clicking on any employment industry, job titles associated with selected industry are displayed. Frequency of each job title represents no. of  job postings associated with it.</p>
        <Wordcloud />
        <br></br>
        <hr></hr>
        <br></br>
      <h2 className="graphheading">Top skills of each company</h2>
      <p className="graphdescription">This graph shows top skills from combined job postings of each company.</p>
      <Thirdchart />
      </div>
    </div>
  );
}

export default App;

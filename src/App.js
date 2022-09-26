import logo from './logo.svg';
import './App.css';
import { questions } from './questions'; 
const generate = () => {
  return Math.floor(Math.random()*14)
}

function App() {
  const num = generate();
  return (
    <div className="body">
      <div className="card">
        <div className="c-1"></div>
        <div className="c-2">
          <h2 className="question">{questions[num]["q"]}</h2>
          <div className="questions">
            <button className="ans">{questions[num]["f_ans"][0]}</button>
            <button className="ans">{questions[num]["f_ans"][1]}</button>
            <button className="ans">{questions[num]["f_ans"][2]}</button>
            <button className="ans">{questions[num]["f_ans"][3]}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

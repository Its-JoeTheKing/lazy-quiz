import logo from './logo.svg';
import './App.css';
const generate = () => {
  var num = Math.floor(Math.random()*14)
  console.log(num);
}
generate()
function App() {
  return (
    <div className="body">
      <div className="card">
        <div className="c-1"></div>
        <div className="c-2">
          <h2 className="question">The QUestion is bla bla bla bla bla bla bla bal</h2>
          <div className="questions">
            <button className="ans">The Answer 1</button>
            <button className="ans">The Answer 2</button>
            <button className="ans">The Answer 3</button>
            <button className="ans">The Answer 4</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

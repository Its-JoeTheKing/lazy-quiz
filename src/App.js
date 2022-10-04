import {useState} from 'react';
import './App.css';
import { questions } from './questions'; 


function App() {
  const [score,setScore] = useState(0);
  const [count,setCount] = useState(0);
  const [color,setColor] = useState('white');
  const [game,setGame] = useState(true);

  const generate = () => {
    return Math.floor(Math.random()*14)
  }
  const checkAnswer = (asn,tans) => {
    if (count === 14) {
      setGame(false)
    }
    if (game === false) {
      console.log('finished')
    }
    setCount(count+1)
    if(asn === tans) {
      setScore(score + 1)
      if (score > 0 ) {
        setColor('green');
      } else {
        setColor('red');
      }
    }
    else {
      setScore(score - 1)
      if (score > 0 ) {
        setColor('green');
      } else {
        setColor('red');
      }
    }
  }
  var num = generate();
  const answer = questions[num]['t_ans']
  
  return (
    <div className="body">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="card">
        <div className="c-1">
          <h2 className='sco'><i className="fa-solid fa-star"></i> Scores : <span style={{color: color}}>{score}</span></h2>
          <h2 className='sco'><i className="fa-solid fa-pen"></i> Questions : <span>{count}/14</span></h2>

        </div>
        <div className="c-2">
          <div style={{display: game?('none'):('block')}}>
          <h2 className='finished'>Quiz Fished, Thank You !!!</h2>
          {score == 14 && <p className='cong'> Perfect !!! You Are High Skilled , Keep Going </p>}
          {score > 10 && <p className='cong'> Great !!! A Litle Bit To Perfection, Keep Practicing </p>}
          {(score > 5 && score < 10) && <p className='cong'> Good level !!! Just Need More Practice, It's Ok Keep Going </p>}
          {(score < 5) && <p className='cong'>It's Ok, You're Not Weak Just Need More Practice </p>}
          </div>
          <div style={{display: game?('block'):('none')}}>
          <h2 className="question">{questions[num]["q"]}</h2>
          <div className="questions">
            <button className="ans" onClick={()=>{checkAnswer(questions[num]["f_ans"][0],answer)}}>{questions[num]["f_ans"][0]}</button>
            <button className="ans" onClick={()=>{checkAnswer(questions[num]["f_ans"][1],answer)}}>{questions[num]["f_ans"][1]}</button>
            <button className="ans" onClick={()=>{checkAnswer(questions[num]["f_ans"][2],answer)}}>{questions[num]["f_ans"][2]}</button>
            <button className="ans" onClick={()=>{checkAnswer(questions[num]["f_ans"][3],answer)}} >{questions[num]["f_ans"][3]}</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

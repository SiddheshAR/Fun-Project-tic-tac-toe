import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const win:number[][] = [[1,2,3],[3,4,6],[7,8,9],
              [1,4,7],[2,5,8],[3,6,9],
              [2,5,8],[4,5,6],[3,5,7],[1,5,9]
              ];
  // const win2:string[] = ["123","346","789",
  //             "147","258","369",
  //             "258","456","357","159"
  //             ];
              
  const [turn,setTurn]=useState(true);
  const [player1,setplayer1]=useState<number[]>([]);
  const [player2,setplayer2]=useState<number[]>([]);
  const [winner,setWinner]=useState('');
  const [turnFinish,setTurnFinish]=useState(0);
  // const [win,setWin]=useState('none');
  useEffect(()=>{
    if(turnFinish>=9){
      console.log("Turns Finished");
      setWinner("Draw")
    }
  },[turnFinish])            
  useEffect(()=>{
    const play1:number[] = player1.sort((a,b)=> a-b);

    for(let i =0;i<win.length;i++){
      if(
        play1.includes(win[i][0]) &&
        play1.includes(win[i][1]) &&
        play1.includes(win[i][2]) 
      ){
        console.log("X Won the Game");
        setWinner('X')
      }
    }

  },[player1])

  useEffect(()=>{
    const play2:number[] = player2.sort((a,b)=> a-b);
    for(let i =0;i<win.length;i++){
      if(
        play2.includes(win[i][0]) &&
        play2.includes(win[i][1]) &&
        play2.includes(win[i][2]) 
      ){
        console.log("Zero Won the Game")
        setWinner('O')
      }
    }

  },[player2])

  function mainChecker(number:number){
    if(turn){
        setplayer1((prev)=>[...prev,number]);
        setTurnFinish((prev)=>prev+1)
        setTurn((prev)=>!prev);
    }else{
        setplayer2((prev)=>[...prev,number]);
        setTurnFinish((prev)=>prev+1)
        setTurn((prev)=>!prev);
    }
  }
  const handleReset = (e)=>{
    e.preventDefault();
    setplayer1([]);
    setplayer2([]);
    setTurnFinish(0);
    setWinner('');
    
  }
  const handleClick=(event:React.MouseEvent<HTMLButtonElement, MouseEvent>,number:number)=>{
    event.preventDefault();
    if(!winner){
      mainChecker(number);
    }
    
    // turn?setplayer1((prev)=>[...prev,number]):setplayer2((prev)=>[...prev,number]);
    // setTurn((prev)=>!prev);
  }

  function GridGenerator(){
    const list:number[] = [1,2,3,4,5,6,7,8,9];

    return(
      list.map((e,index)=>{
        return(
        <div className=" border border-gray-800" key={index}>
          <button className="text-[28px] p-14" onClick={(event)=>handleClick(event,e)}>{player1.includes(e)?<p>X</p>:player2.includes(e)?<p>O</p>:<p ></p>}</button>
        </div>)
      })
    )
  }
  return (
    <>
        <div className="min-h-screen bg-pink-50">
          <div className="flex flex-row align-middle justify-center pt-20">
              <div className="grid grid-cols-3 border border-gray-800">
                    <GridGenerator/>
              </div>
              
          </div>
          <div className="md:w-[250px] m-auto">
          <button className="bg-green-600 p-2 m-2 text-white" onClick={handleReset}>Restart</button>
              {winner=="X"?<h2 className="text-[22px] font-semibold text-blue-950">X Won the Game</h2>:
              winner=="O"?<h2 className="text-[22px] font-semibold text-blue-950">O won the Game</h2>:
              winner=="Draw"?<h2 className="text-[22px] font-semibold text-blue-950">Draw</h2>:<></>}
          </div>
        </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  const [turn,setTurn]=useState(true);
  const [player1,setplayer1]=useState<number[]>([]);
  const [player2,setplayer2]=useState<number[]>([]);

  function mainChecker(number){
    if(turn){
      if(player1.length<3){
        setplayer1((prev)=>[...prev,number]);
        setTurn((prev)=>!prev)
      }else{
        console.log("Three chaances Done");
        setTurn((prev)=>!prev)
      }
    }else{
      if(player2.length<3){
        setplayer2((prev)=>[...prev,number]);
        setTurn((prev)=>!prev);
      }else{
        console.log("Three chaances Done");
        setTurn((prev)=>!prev);
      }
    }
  }

  const handleClick=(event:React.MouseEvent<HTMLButtonElement, MouseEvent>,number:number)=>{
    event.preventDefault();
    mainChecker(number);
    // turn?setplayer1((prev)=>[...prev,number]):setplayer2((prev)=>[...prev,number]);
    // setTurn((prev)=>!prev);
    console.log(typeof player1);
    console.log(player2);
  }

  function GridGenerator(){
    const list:number[] = [1,2,3,4,5,6,7,8,9]
    return(
      list.map((e,index)=>{
        return(
        <div className="p-7 border border-gray-800" key={index}>
          <button className="text-[28px]" onClick={(event)=>handleClick(event,e)}>{player1.includes(e)?<p>X</p>:player2.includes(e)?<p>O</p>:<p className="w-[25px] h-[25px]"></p>}</button>
        </div>)
      })
    )
  }
  return (
    <>
        <div className="min-h-screen bg-pink-100">
          <div className="flex flex-row align-middle justify-center">
              <div className="grid grid-cols-3 border border-gray-800">
                    <GridGenerator/>
              </div>
          </div>
        </div>
    </>
  )
}

export default App

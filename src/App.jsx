import { useState } from "react";
import supakarLogo from "../public/logo.png";
import loading from "../public/sounds/loading.mp3";
import select from "../public/sounds/select.wav";
import spray from "../public/sounds/spray.wav";
import { useRef } from "react";

function App() {
  const [isTrue, setIsTrue] = useState(true);
  const audioRef = useRef(new Audio(loading));
  const selectAudio = new Audio(select);
  const sprayAudio = new Audio(spray);
  const [newcolor, setNewColor] = useState('brown');
  const [hidden, setHidden] = useState('');
  const [CarHidden, setCarHidden] = useState('hidden');
  

  function OnClick(e){
    selectAudio.play();
    e.preventDefault();
    switch (e.target.id){
      case 'gray':
        setNewColor('gray');
        break;
      case 'yellow':
        setNewColor('yellow');
        break;
      case 'green':
        setNewColor('green');
        break;
      case 'purple':
        setNewColor('purple');
        break;
      case 'skyblue':
        setNewColor('skyblue');
        break;
      case 'brown':
        setNewColor('brown');
        break;
      default:
          setNewColor('brown');
    }
    setTimeout(() => {
      sprayAudio.play();
    }, 100)
  }


  function LoadingAudio(){
    const audio = audioRef.current;

    if(isTrue === true){
      audio.pause();
      setIsTrue(false);

    }else{
      audio.play();
      setIsTrue(true);
    }
  }
  
  function DisplayFirstPageCar(){
      
    return(
      <div
        className={`h-screen ${CarHidden}`}
        style={{
          backgroundImage: "url('/cars/gray.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
        <div className="z-0 bg-black h-fit h-screen">
          <div className="h-fit p-5 flex flex-row justify-between w-full">
            <img src={supakarLogo} alt="Supakar Logo" className="w-40" />
            <button  onClick={LoadingAudio} id='audioLoad'><img src="../public/sound.png" alt="" className="w-10"/></button>
          </div>
          <div className="w-100 h-[90%] flex flex-col justify-around">
            <div className="w-2/4 m-auto h-2/4 mb-32">
            <img src={`/public/cars/${newcolor}.png`} alt="gray-car" className="rounded-lg"/>
            </div>
            <div className="m-auto w-100 bg-black text-center">
            <p className="m-auto text-white text-4xl	">Select a color for your car</p>
            <ul className="m-auto h-fit flex flex-row gap-4 w-fit p-5">
            <input type="button" onClick={OnClick} id="gray"  className="hover:cursor-pointer bg-gray-200 w-12 h-12 rounded-full border-2 border-white"></input>
            <input type="button" onClick={OnClick} id="yellow" className="hover:cursor-pointer bg-yellow-200 w-12 h-12 rounded-full border-2 border-white"></input>
            <input type="button" onClick={OnClick} id="green" className="hover:cursor-pointer bg-green-200 w-12 h-12 rounded-full border-2 border-white"></input>
            <input type="button" onClick={OnClick} id="purple" className="hover:cursor-pointer bg-purple-200 w-12 h-12 rounded-full border-2 border-white"></input>
            <input type="button" onClick={OnClick} id="skyblue" className="hover:cursor-pointer bg-blue-200 w-12 h-12 rounded-full border-2 border-white"></input>
            <input type="button" onClick={OnClick} id="brown" className="hover:cursor-pointer bg-amber-600 w-12 h-12 rounded-full border-2 border-white"></input>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function DisplayFirstPage(){
    
    return(
      <div>
      <DisplayFirstPageCar/>
      <div
        className={`p-5 flex flex-col items-center justify-center ${hidden} h-screen`}
        style={{
          backgroundImage: "url('/cars/gray.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-10 flex flex-col items-center justify-center shadow-2xl rounded-2xl w-96 bg-white bg-opacity-70">
          <div className="w-64 mb-10">
            <img src={supakarLogo} alt="Supakar Logo" />
          </div>
          <button
      onClick={start}
      className={`bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mb-5 rounded`}
    >
      START
    </button>
          <div className="text-center text-lg transitison duration-300">
          </div>
        </div>
        
      </div>
      </div>
    )
  }

  const start = () => {
    LoadingAudio();
    setTimeout(() => {
      setHidden('hidden');
      setCarHidden('block');
    }, 500);
  };

  return (
    <>
    <DisplayFirstPage />
    </>
  );

}

export default App;
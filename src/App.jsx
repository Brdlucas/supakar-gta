import { useState } from "react";
import supakarLogo from "../public/logo.png";
import loading from "../public/sounds/loading.mp3";
import select from "../public/sounds/select.wav";
import spray from "../public/sounds/spray.wav";

function App() {
  // const [instruction, setInstruction] = useState("Click on START to begin.");
  const audio = new Audio(loading);
  const selectAudio = new Audio(select);
  const sprayAudio = new Audio(spray);
  const [newcolor, setNewColor] = useState('brown')
  let isTrue = false;
  
  
  function OnClick(e){
    selectAudio.play();
    e.preventDefault();
    switch (e.target.id){
      case 'gray':
        console.log('gray');
        setNewColor('gray');
        break;
      case 'yellow':
        console.log('yellow');
        setNewColor('yellow');
        break;
      case 'green':
        console.log('green');
        setNewColor('green');
        break;
      case 'purple':
        console.log('purple');
        setNewColor('purple');
        break;
      case 'skyblue':
        console.log('skyblue');
        setNewColor('skyblue');
        break;
      case 'brown':
        console.log('brown');
        setNewColor('brown');
        break;
      default:
          console.log('aucune couleur associé');
          setNewColor('brown');
    }
    sprayAudio.play();
  }


  function LoadingAudio(){

    if(isTrue === true){
      audio.pause();
      isTrue = false;

    }else{
      isTrue = true;
      audio.play();

    }
  }

  function DisplayFirstPage(){
    return(
      <div
        className="h-screen"
        style={{
          backgroundImage: "url('/cars/gray.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
        <div className="z-0 bg-black h-fit h-screen">
          <div className="h-fit p-5 flex flex-row justify-between w-full">
            <img src={supakarLogo} alt="Supakar Logo" className="w-40" />
            <button onClick={LoadingAudio}><img src="../public/sound.png" alt="" className="w-10"/></button>
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
            <input type="button" onClick={OnClick} id="pruple" className="hover:cursor-pointer bg-purple-200 w-12 h-12 rounded-full border-2 border-white"></input>
            <input type="button" onClick={OnClick} id="skyblue" className="hover:cursor-pointer bg-blue-200 w-12 h-12 rounded-full border-2 border-white"></input>
            <input type="button" onClick={OnClick} id="brown" className="hover:cursor-pointer bg-amber-600 w-12 h-12 rounded-full border-2 border-white"></input>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }


  
  // const start = () => {
  //   audio.play();
  //   setTimeout(() => {
  //     setNewClass('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded');
  //     setInstruction(
  //       'Supakar est un projet pour l\'apprentissage de React. Il est basé sur le template Vite + React. Pour démarrer, il suffit de lire le fichier "README.md". Bonne session de codage !',
  //     );
  //   }, 500);
  // };


  return (
    <>
    <DisplayFirstPage />
    </>
  );
}

export default App;

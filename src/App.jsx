import { useState } from "react";
import supakarLogo from "../public/logo.png";
import loading from "../public/sounds/loading.mp3";
import select from "../public/sounds/select.wav";
import spray from "../public/sounds/spray.wav";
import { useRef } from "react";

function App() {
  const audioRef = useRef(new Audio(loading));
  const sprayAudio = new Audio(spray);
  const selectAudio = new Audio(select);
  const [hidden, setHidden] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [newcolor, setNewColor] = useState("brown");
  const [CarHidden, setCarHidden] = useState("hidden");
  const InputCss =
    "hover:cursor-pointer max-sm:w-8 max-sm:h-8 w-12 h-12 rounded-full border-2 border-white";

  function OnClick(e) {
    selectAudio.play();
    e.preventDefault();
    setTimeout(() => {
      switch (e.target.id) {
        case "gray":
          setNewColor("gray");
          break;
        case "yellow":
          setNewColor("yellow");
          break;
        case "green":
          setNewColor("green");
          break;
        case "purple":
          setNewColor("purple");
          break;
        case "skyblue":
          setNewColor("skyblue");
          break;
        case "brown":
          setNewColor("brown");
          break;
        default:
          setNewColor("brown");
      }
    }, 900);
    setTimeout(() => {
      sprayAudio.play();
    }, 300);
  }

  const startAudio = () => {
    audioRef.current.play();
    setIsTrue(true);
  };

  const IsSoundPlaying = () => {
    if (isTrue) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsTrue(!isTrue);
  };

  function DisplayFirstPageCar() {
    return (
      <div
        className={`h-screen ${CarHidden}`}
        style={{
          backgroundImage: "url('/cars/gray.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="z-0 bg-black h-fit h-screen ">
          <div className="h-fit p-5 flex flex-row justify-between w-full max-sm:pb-8 ">
            <img src={supakarLogo} alt="Supakar Logo" className="w-40" />
            <button onClick={IsSoundPlaying} id="audioLoad">
              <img src="/sound.png" alt="" className="w-10" />
            </button>
          </div>
          <div className="w-100 h-[90%] max-sm:h-[50%] flex flex-col justify-around max-sm:pt-5">
            <div className="w-2/4 max-lg:w-[90%] m-auto h-2/4 mb-32 max-sm:w-[90%]">
              <img
                src={`/cars/${newcolor}.png`}
                alt="gray-car"
                className="rounded-lg"
              />
            </div>
            <div className="m-auto w-100  bg-black text-center">
              <p className="m-auto text-white text-4xl	max-sm:text-2xl">
                Select a color for your car
              </p>
              <ul className="m-auto h-fit flex flex-row gap-4 w-fit p-5">
                <input
                  type="button"
                  onClick={OnClick}
                  id="gray"
                  className={`${InputCss}  bg-gray-200 `}
                ></input>
                <input
                  type="button"
                  onClick={OnClick}
                  id="yellow"
                  className={`${InputCss} bg-yellow-200`}
                ></input>
                <input
                  type="button"
                  onClick={OnClick}
                  id="green"
                  className={`${InputCss} bg-green-600 `}
                ></input>
                <input
                  type="button"
                  onClick={OnClick}
                  id="purple"
                  className={`${InputCss} bg-purple-400`}
                ></input>
                <input
                  type="button"
                  onClick={OnClick}
                  id="skyblue"
                  className={`${InputCss} bg-sky-300 m`}
                ></input>
                <input
                  type="button"
                  onClick={OnClick}
                  id="brown"
                  className={`${InputCss} bg-amber-700 `}
                ></input>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function DisplayFirstPage() {
    return (
      <div>
        <DisplayFirstPageCar />
        <div
          className={`p-5 flex flex-col items-center justify-center ${hidden} h-screen`}
          style={{
            backgroundImage: "url('/cars/gray.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-10 flex flex-col items-center justify-center shadow-2xl rounded-2xl w-96 max-sm:w-72 bg-white bg-opacity-70">
            <div className="w-64 mb-10">
              <img src={supakarLogo} alt="Supakar Logo" />
            </div>
            <button
              onClick={start}
              className={`bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 mb-5 text-white rounded`}
            >
              START
            </button>
          </div>
        </div>
      </div>
    );
  }

  const start = () => {
    setTimeout(() => {
      startAudio();
      setHidden("hidden");
      setCarHidden("block");
    }, 500);
  };

  return (
    <>
      <DisplayFirstPage />
    </>
  );
}

export default App;

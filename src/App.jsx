import { useState } from "react";
import supakarLogo from "../public/logo.png";
import loading from "../public/sounds/loading.mp3";

function App() {
  const [instruction, setInstruction] = useState("Click on START to begin.");
  const audio = new Audio(loading);

  const start = () => {
    audio.play();
    setTimeout(() => {
      setInstruction(
        'Supakar est un projet pour l\'apprentissage de React. Il est basé sur le template Vite + React. Pour démarrer, il suffit de lire le fichier "README.md". Bonne session de codage !',
      );
    }, 1300);
  };

  return (
    <>
      <div
        className="p-5 flex flex-col items-center justify-center h-screen"
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
        </div>
      </div>
    </>
  );
}

export default App;

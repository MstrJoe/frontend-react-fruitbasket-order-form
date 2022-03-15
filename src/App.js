import React, {useState} from 'react';
import './App.css';
import {FruitCounter} from "./components/FruitCounter";
import {Form} from "./components/Form";

function App() {
    const [counterAardbeien, setCounterAardbeien] = useState(0);
    const [counterBananen, setCounterBananen] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);

    function resetCounter() {
        setCounterAardbeien(0);
        setCounterBananen(0);
        setCounterKiwis(0);
        setCounterAppels(0);
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div className="fruitform">
            <FruitCounter
                title="🍓Aardbeien"
                counter={counterAardbeien}
                setCounter={setCounterAardbeien}
            />
            <FruitCounter
                title="🍌Bananen"
                counter={counterBananen}
                setCounter={setCounterBananen}
            />
            <FruitCounter
                title="🥝Kiwi's"
                counter={counterKiwis}
                setCounter={setCounterKiwis}
            />
            <FruitCounter
                title="🍎Appels"
                counter={counterAppels}
                setCounter={setCounterAppels}
            />
            <button type="button" onClick={resetCounter}>
                Reset
            </button>
        </div>

        <Form/>
    </>
  );
}

export default App;

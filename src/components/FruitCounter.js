import React from "react";

export function FruitCounter({title, counter, setCounter}) {

    function decreaseCounter() {
        setCounter(counter - 1)
    };

    function increaseCounter() {
        setCounter(counter + 1)
    };

    return (
        <fieldset>
        <div className="fruit-counter">
            <h2>{title}</h2>
            <button
                type="button"
                onClick={decreaseCounter}
                disabled={counter === 0}
            >-</button>
             {counter}
            <button
                type="button"
                onClick={increaseCounter}
            >+</button>
        </div>
        </fieldset>
    );
}
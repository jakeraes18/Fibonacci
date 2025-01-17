import React, { useState } from "react";

function insertInput({ onCalculate }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const n = parseInt(input, 10);
        if (!isNaN(n)) {
            onCalculate(n);
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ingresa el valor de n: 
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <button type="submit">Calcular</button>
        </form>
    );
}

export default insertInput;

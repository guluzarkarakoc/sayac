import React, { useState, useEffect } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(()=> {
    const savedCount = localStorage.getItem("counterValue");
    return savedCount ? Number(savedCount) : initialValue;
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    localStorage.setItem("counterValue", count);
  }, [count]);

  return (
    <div >
      <h1>Sayaç Uygulaması</h1>
      <h2>Mevcut Değer: {count}</h2>
      <div>
        <button onClick={() => setCount(count + step)}>+ Artır</button>
        <button onClick={() => setCount(count - step)}>- Azalt</button>
        <button onClick={() => setCount(0)}>Sıfırla</button>
      </div>
      <div>
        <label>
          İşlem Değeri:{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}/>
        </label>
      </div>
    </div>
  );
};

export default Counter;

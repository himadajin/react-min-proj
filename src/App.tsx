import React, { useState, useCallback } from "react";

const buttonStyle: React.CSSProperties = {
  cursor: "pointer",
  padding: "0.5rem 0.9rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  background: "#f9f9f9",
  fontSize: "1rem",
  transition: "background .15s",
};

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => setCount((c) => c + 1), []);
  const dec = useCallback(() => setCount((c) => c - 1), []);
  const reset = useCallback(() => setCount(0), []);

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "0.5rem 0" }}>
        {count}
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={dec} aria-label="decrement" style={buttonStyle}>
          - {1}
        </button>
        <button onClick={reset} style={buttonStyle} disabled={count === 0}>
          Reset
        </button>
        <button onClick={inc} aria-label="increment" style={buttonStyle}>
          + {1}
        </button>
      </div>
    </section>
  );
};

const App: React.FC = () => (
  <main
    style={{
      fontFamily: "system-ui, sans-serif",
      padding: "2rem",
      lineHeight: 1.5,
    }}
  >
    <h1>React minimum project</h1>
    <Counter />
  </main>
);

export default App;

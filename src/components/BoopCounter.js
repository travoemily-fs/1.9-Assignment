import React, { useState } from "react";
import puppy from "../images/puppy.png";

export default function BoopCounter() {
  const [count, setCount] = useState(0);

  const handleBoop = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ padding: 0, marginTop: "10px", color: "#f486a1" }}>
        Boop the snoot!
      </h2>
      <button
        onClick={handleBoop}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}>
        <img
          src={puppy}
          alt="puppy"
          style={{
            width: "300px",
            backgroundColor: "#fce0ec",
            borderRadius: "2px",
          }}
        />
      </button>
      <p>You've booped the puppy {count} time(s)!</p>
    </div>
  );
}

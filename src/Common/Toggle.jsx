import { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div 
      className={`toggle ${isOn ? "on" : ""}`} 
      onClick={() => setIsOn(!isOn)}
    >
      <div className="toggle-circle"></div>
    </div>
  );
};

export default Toggle;

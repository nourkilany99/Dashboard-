import { useState, useRef, useEffect } from "react";
import "./OptionsMenu.css";

export default function OptionsMenu({ options = [] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="options-menu-container" ref={menuRef}>
      <button className="dots-btn" onClick={() => setOpen(!open)}>
        ⋯
      </button>

      {open && (
        <div className="options-dropdown">
          {options.map((item, index) => (
            <div
              key={index}
              className="option-item"
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

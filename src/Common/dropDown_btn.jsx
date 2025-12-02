import { useState } from "react";
import './dropDown_btn.css';
import drop_img from '../Assets/down.svg'

export default function Dropdown({
  label = "Select",
  items = [],
  width = "150px",
  onSelect = () => {}
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item) => {
    onSelect(item);
    setOpen(false);
  };

  return (
    <div className="dropdown" style={{ width }}>
      <button
        className="dropdown-btn"
        onClick={() => setOpen(!open)}
      >
        {label}
        <img className={`arrow ${open ? "rotate" : ""}`} src={drop_img} alt="dropdown_img" />
      </button>

      {open && (
        <ul className="dropdown-menu">
          {items.map((item, i) => (
            <li
              key={i}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

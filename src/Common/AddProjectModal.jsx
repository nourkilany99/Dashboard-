import React from "react";
import "./AddProjectModal.css";

const AddProjectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_container">
        <div className="modal_header">
          <h2>Editing a project</h2>
          <p>Managing all projects on your portfolio projects</p>
        </div>

        {/* --- FORM FIELDS --- */}
        <div className="modal_body">
          <label>Project Title</label>
          <input type="text" />

          <label>Description</label>
          <input type="text" />

          <label>Category</label>
          <div className="category_row">
            <button className="category_selected">Graphic design</button>
            <button>UI/UX projects</button>
            <button>Videography</button>
            <button>Photography</button>
            <button>Web developing</button>
          </div>

          <label>Meta description</label>
          <input type="text" />
        </div>

        {/* --- FOOTER --- */}
        <div className="modal_footer">
          <button className="save_btn">Save</button>
          <button className="cancel_btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;

import React, { useEffect, useState } from "react";
import "./AddSkill.css";
import { supabase } from "../Supabase";
import { useParams, useNavigate } from "react-router-dom";

const AddSkill = () => {
  const { id } = useParams(); // edit mode if exists
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Icon: "",
    Type: "Tool",
    Level: [],
    Category: [],
    Status: "active",
  });

  /* ================= FETCH SKILL (EDIT MODE) ================= */
  useEffect(() => {
    if (!id) return;

    const fetchSkill = async () => {
      const { data, error } = await supabase
        .from("Skills")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setForm({
        Name: data.Name || "",
        Icon: data.Icon || "",
        Type: data.Type || "Tool",
        Level: data.Level || [],
        Category: data.Category || [],
        Status: data.Status || "active",
      });
    };

    fetchSkill();
  }, [id]);

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleCategory = (cat) => {
    const exists = form.Category.find((c) => c.key === cat.key);
    setForm({
      ...form,
      Category: exists
        ? form.Category.filter((c) => c.key !== cat.key)
        : [...form.Category, cat],
    });
  };

  const toggleLevel = (level) => {
    setForm({
      ...form,
      Level: form.Level.includes(level)
        ? form.Level.filter((l) => l !== level)
        : [...form.Level, level],
    });
  };

 const handleSave = async () => {
  setLoading(true);

  const payload = {
  name: form.Name,
  icon: form.Icon,
  type: form.Type,
  level: form.Level,
  category: form.Category,
  status: form.Status,
};


  console.log("INSERT PAYLOAD:", payload);

  const { data, error } = await supabase
    .from("Skills")
    .insert([payload]);

  console.log("SUPABASE RESPONSE:", { data, error });

  setLoading(false);

  if (error) {
    console.error("INSERT ERROR:", error);
    return;
  }

  navigate(0);
};

  return (
    <div className="modal_overlay">
      <div className="modal_container">
        <div className="modal_header">
          <h2>{id ? "Edit Skill" : "Add Skill"}</h2>
          <p>Manage your portfolio skills</p>
        </div>

        <div className="modal_body">
          <label>Skill Name</label>
          <input
            name="Name"
            value={form.Name}
            onChange={handleChange}
          />

          <label>Icon URL</label>
          <input
            name="Icon"
            value={form.Icon}
            onChange={handleChange}
          />

          <label>Type</label>
          <input
            name="Type"
            value={form.Type}
            onChange={handleChange}
          />

          <label>Category</label>
          <div className="category_row">
            {[
              { key: "uiux", label: "UI / UX" },
              { key: "graphic", label: "Graphic Design" },
              { key: "video", label: "Videography" },
              { key: "web", label: "Web Development" },
            ].map((cat) => (
              <button
                type="button"
                key={cat.key}
                className={
                  form.Category.find((c) => c.key === cat.key)
                    ? "category_selected"
                    : ""
                }
                onClick={() => toggleCategory(cat)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <label>Level</label>
          <div className="category_row">
            {["Beginner", "Intermediate", "Advanced", "Expert"].map((lvl) => (
              <button
                type="button"
                key={lvl}
                className={form.Level.includes(lvl) ? "category_selected" : ""}
                onClick={() => toggleLevel(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="modal_footer">
          <button
            className="save_btn"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>

          <button
            type="button"
            className="cancel_btn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;

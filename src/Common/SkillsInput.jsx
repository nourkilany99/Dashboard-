import "./SkillsInput.css";
import OptionsMenu from "./OptionsMenu";
import Toggle from "./Toggle";

const SkillsInput = (props) => {
  return (
    <div className="skills_row">
      <div className="col skill_name_col">
        <img src={props.Skills_img} alt="skill_icon" />
        <p>{props.Name}</p>
      </div>

      <div className="col type_col">
        <p>{props.type}</p>
      </div>

      <div className="col level_col">
        <p>{props.level}</p>
      </div>

      <div className="col category_col">
        <p>{props.category}</p>
      </div>

      <div className="col status_col">
        <p className="status_text">{props.Status}</p>
        <Toggle />
      </div>

      <div className="col update_col">
        <p>{props.dateUpdate}</p>
      </div>

      <div className="col action_col">
        <OptionsMenu
          options={[
            { label: "Delete", onClick: () => props.onDelete(props.id) },
            { label: "Open in new tab" }
          ]}
        />
      </div>
    </div>
  );
};

export default SkillsInput;

import React, { useEffect, useState } from 'react';
import './Skills.css';
import './SkillsMob.css';

import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Title from '../Common/Title';
import AddBtn from '../Common/AddBtn';
import Line from '../Common/Line';
import SkillsInput from '../Common/SkillsInput';
import Footer2 from '../components/Footer2';
import { supabase } from '../Supabase';

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);   // ✅ array
  const [DashHero, setDashHero] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const { data: skillsData } = await supabase.from("Skills").select("*");
      const { data: dashHeroData } = await supabase.from("DashHero").select("*");

      setSkills(skillsData || []);
      setDashHero(dashHeroData || []);
      setLoading(false);
    }

    getPageData();
  }, []);

  // ✅ DELETE HANDLER (lives in parent)
  async function deleteSkill(id) {
    const { error } = await supabase
      .from("Skills")
      .delete()
      .eq("id", id);

    if (!error) {
      setSkills(prev => prev.filter(skill => skill.id !== id));
    }
  }

  if (loading) return <p>Loading....</p>;

  return (
    <>
      <Nav />

      <div className="dashboard_skills_all">
        <Aside />

        <div className="content_skills_all">

          {DashHero
            .filter(item => item.id === 3)
            .map(item => (
              <Title
                key={item.id}
                title={item.Title}
                subtitle={item.Subtitle}
              />
            ))
          }

          <div className="Skills_d1">
            <div className="d1_d_skills">
              <p className="d1_d_skills_h">Showing:</p>
              <p className="d1_d_skills_p">{skills.length} Skills</p>
            </div>

            <AddBtn title="Add skills" />
          </div>

          <div className="line_div">
            <Line />

            <div className="skills_form_inputs">
              <h3>Skills name</h3>
              <h3>Type</h3>
              <h3>Level</h3>
              <h3>Category</h3>
              <h3>Status</h3>
              <h3>Last update</h3>
              <h3>Actions</h3>
            </div>

            {skills.map(skill => (
              <React.Fragment key={skill.id}>
                <SkillsInput
                  id={skill.id}                 // ✅ IMPORTANT
                  Skills_img={skill.Icon}
                  Name={skill.Name}
                  type={skill.Type}
                  level="Expert"
                  category="UI/UX"
                  Status="Published"
                  dateUpdate="12/12/2025"
                  onDelete={deleteSkill}        // ✅ pass handler
                />
                <Line />
              </React.Fragment>
            ))}
          </div>

          <Footer2 />
        </div>
      </div>
    </>
  );
};

export default Skills;

import React, { Component } from "react";
import { connect } from "react-redux";
class Skills extends Component {
  render() {
    
    let skills = this.props.skills.map(skill => {
      return (
        <div key={skill.skill} className="myskills_skills_skill">
          <h5>{skill.skill}</h5>
          <span className="siz">{skill.prog}</span>
          <span style={{width:`${skill.prog}`}} className="prog"></span>
        </div>
      );
    })
    return (
      <div className="myskills text-center">
        <div className="container">
          <h1 className="title">SKILLS</h1>
          <div className="myskills_skills">
            {skills}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    skills: state.reducerSkills.skills
  };
}
export default connect(mapStateToProps)(Skills);

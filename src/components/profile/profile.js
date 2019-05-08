/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Fa_Link } from "../../lib/fontAwsome.js";
import { Button } from "reactstrap";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container">
          <h1 className="title">PROFILE</h1>
          <div className="toggle_profile">
            <Button
              onClick={this.props.all}
              size="md"
              color="secondary"
              className="mr-2"
            >
              All
            </Button>
            <Button
              onClick={this.props.graphic}
              size="md"
              color="secondary"
              className="mr-2"
              outline
            >
              Graphic
            </Button>
            <Button
              onClick={this.props.web}
              size="md"
              color="secondary"
              className="mr-2"
              outline
            >
              Web
            </Button>
          </div>
          <div className="profile-box">
            {this.props.profile.map(profile => {
              return (
                <div id={this.isAll  === true ? 'show' : 'graphic'} className="box" key={Math.random() * 10}>
                  <img src={profile.img} alt="" />
                  <div className="box-info">
                    <a href="#" className="link" color="">
                      {Fa_Link()}
                    </a>
                    <h4>{profile.title}</h4>
                    <p>{profile.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Button color="dark">Show More </Button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    profile: state.reducerProfile.profiles
  };
}
function mapDespatchToProps(despatch) {
  return {
    all: () => despatch({type:'ALL'}),
    web: () => despatch({type:'WEB'}),
    graphic: () => despatch({type:'GRAPHIC'})
  };
}

export default connect(
  mapStateToProps,
  mapDespatchToProps
)(Profile);

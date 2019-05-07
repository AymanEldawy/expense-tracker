import React from 'react';
import image from '../../image/a.png';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {Button} from 'reactstrap';
function Home(){
    return(
        <div className="homepage">
          <div className="image">
              <img src={image} alt="" />
              <div className="style-img">
                <span className="style one"></span>
                <span className="style two"></span>
                <span className="style three"></span>
                <span className="style four"></span>
                <span className="style five"></span>
                <span className="style four"></span>
                <span className="style five"></span>
              </div>
          </div>
          <div className="info">
              <h1>Hello There !!</h1>
              <h2>I'm Front End Develover</h2>
              <div  className="icons">
                <MaterialIcon icon="dashboard" />  
                <MaterialIcon icon="dashboard" />  
                <MaterialIcon icon="dashboard" />  
                <MaterialIcon icon="dashboard" />  
                <MaterialIcon icon="dashboard" />  
              </div>
              <Button size="md" color="dark" outline>Show Work</Button>
          </div>
        </div>
    )
  
  }
  export default Home;
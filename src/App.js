import React , {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter ,Route} from 'react-router-dom';
import Navegation from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Profile from './components/profile/profile';
import Contact from './components/contact/contact';

class App extends Component {
  render(){
    console.log(this.props.upper)
    return (
      <BrowserRouter>
        <div className ="App">
        <Navegation />
          <Route exact to="/" component={Home} />
          <Route to="/about" component={About} />
          <Route to="skills/" component={Skills} />
          <Route to="/profile" component={Profile} />
          <Route to="/contact" component={Contact} />
        </div>
       </BrowserRouter>
    )
  }
}
function mapStateToProps(state){
  return{
    name : state.name
  }
}
function mapDespatchToProps(despatch){
  return{
    upper : ()=>despatch({type:'UPPER'})
  }
}

export default connect(mapStateToProps,mapDespatchToProps)(App);
 
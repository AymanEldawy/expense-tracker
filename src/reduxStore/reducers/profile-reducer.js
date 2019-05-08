import img1 from "../../image/1.png";
import img2 from "../../image/2.png";
import img4 from "../../image/4.png";
import img5 from "../../image/5.png";
import img7 from "../../image/7.png";
import img8 from "../../image/8.png";
import img10 from "../../image/10.png";
import img11 from "../../image/11.png";
import img12 from "../../image/12.png";
const storeReducer = {
  profiles: [
    {name:"WEB" , img: img1, title: "Logo M", desc: "Sample Logo Design" },
    {name:"WEB" , img: img2, title: "Logo M", desc: "Sample Logo Design" },
    {name:"WEB" , img: img4, title: "Logo M", desc: "Sample Logo Design" },
    {name:"WEB" , img: img5, title: "Logo M", desc: "Sample Logo Design" },
    {name:"WEB" , img: img7, title: "Logo M", desc: "Sample Logo Design" },
    {name:"GRAPHIC" , img: img8, title: "Logo M", desc: "Sample Logo Design" },
    {name:"GRAPHIC" , img: img10, title: "Logo M", desc: "Sample Logo Design" },
    {name:"GRAPHIC" , img: img11, title: "Logo M", desc: "Sample Logo Design" },
    {name:"GRAPHIC" , img: img12, title: "Logo M", desc: "Sample Logo Design" }
  ],
  profile:''

};


const reducerProfile = (state = storeReducer, action) => {
  if (action.type === "WEB")
  return { profiles: state.profile.filter(profile => profile.name === "WEB" )  , profile : state.profiles };
  else if(action.type === "GRAPHIC")
    return { profiles: state.profile.filter(profile => profile.name === "GRAPHIC") };
  else if (action.type === "ALL")
    return { profiles: state.profile.filter(profile => profile.name !== "") };
  // current = state.profile;  
  // else if (state.profile === '')
  //   return { profile: state.profiles};
  return state;
};
export default reducerProfile;
import img1 from "../image/1.png"; 
import img2 from "../image/2.png"; 
import img4 from "../image/4.png"; 
import img5 from "../image/5.png"; 
import img7 from "../image/7.png"; 
import img8 from "../image/8.png"; 
import img10 from "../image/10.png";
import img11 from "../image/11.png";
import img12 from "../image/12.png";

const storeReducer = {
  name: "ahmed",
  skills: [
    { skill: "Html", prog: "95%" },
    { skill: "Css 3", prog: "90%" },
    { skill: "Pug Js", prog: "90%" },
    { skill: "Sass", prog: "85%" },
    { skill: "JavaScript", prog: "80%" },
    { skill: "Jquery", prog: "85%" },
    { skill: "ECMA 2015", prog: "80%" },
    { skill: "TypeScript", prog: "75%" },
    { skill: "React", prog: "85%" },
    { skill: "Php ", prog: "60%" },
    { skill: "Php OOP", prog: "50%" },
    { skill: "MySQL", prog: "60%" }
  ],
  profile: [
    { img: img1  , title: "Logo M", desc: "Sample Logo Design" },
    { img: img2  , title: "Logo M", desc: "Sample Logo Design" },
    { img: img4  , title: "Logo M", desc: "Sample Logo Design" },
    { img: img5  , title: "Logo M", desc: "Sample Logo Design" },
    { img: img7  , title: "Logo M", desc: "Sample Logo Design" },
    { img: img8  , title: "Logo M", desc: "Sample Logo Design" },
    { img: img10 ,  title: "Logo M", desc: "Sample Logo Design" },
    { img: img11 ,  title: "Logo M", desc: "Sample Logo Design" },
    { img: img12 ,  title: "Logo M", desc: "Sample Logo Design" },
  ]
};

const reducer = (state = storeReducer, action) => {
  if (action.type === "UPPER") return { name: state.name.toUpperCase() };
  return state;
};

export default reducer;

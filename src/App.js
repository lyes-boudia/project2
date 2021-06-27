import React from "react";
import "./App.css";
import Profiles from './components/Profile/ProfileList'

const profiles = [
  {
    fullName: "Ali Alem",
    profession: "developper",
    bio: "I am a web developper"
  },
  {
    fullName: "Ania Alem",
    profession: "cooker",
    bio: "I am a cooker"
  }
]
const App = () => {
  return (
    <div className="App">
      <Profiles Profile={profiles} />
      {/* <Profile 
        fullName="Ali Alem" 
        profession="developper" 
        bio="I am a web developper"/>
      <Profile 
        fullName="Amine Amine" 
        profession="Architect" 
        bio="I am an architect"/> */}
    </div>
  );
};

export default App;
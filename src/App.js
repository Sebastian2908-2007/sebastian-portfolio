import About from "./components/About";
import Nav from './components/Nav';
import Resume from "./components/Resume";
import React, { useState } from "react";

function App() {
   const [sections] =useState ([
      {name: "resume", description: "Job experience"},
      {name: "portfolio", description: "my projects"}
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0])


  return (
    <div>
     <Nav
     sections={sections}
     setCurrentSection={setCurrentSection}
     currentSection={currentSection}
     ></Nav>
     <main>
       <About></About>
       <Resume />
     </main>
    </div>
  );
}

export default App;

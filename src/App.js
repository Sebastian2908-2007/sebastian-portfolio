import About from "./components/About";
import Nav from './components/Nav';
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import React, { useState } from "react";

function App() {
  const [contactSelected,setContactSelected] = useState(false)
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
     contactSelected={contactSelected}
     setContactSelected={setContactSelected}
     ></Nav>
     <main>
       <ContactForm></ContactForm>
       <About></About>
       <Resume />
     </main>
    </div>
  );
}

export default App;

import About from "./components/About";
import Nav from './components/Nav';
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Portfolio from "./components/Portfolio";

function App() {
  const [contactSelected,setContactSelected] = useState(false)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
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
     portfolioSelected={portfolioSelected}
     setPortfolioSelected={setPortfolioSelected}
     ></Nav>
     <main>
       {!contactSelected ?   ( 
         <>
       <Resume />
       <About></About>
       <Portfolio></Portfolio>
       </>
       ) : (
        <ContactForm></ContactForm> 
       )}

      

      
     </main>
     <Footer></Footer>
    </div>
  );
       
}

export default App;
/* {!portfolioSelected ? (
         <>
         <Resume />
       <About></About>
      
         </>
       ) : (
        <Portfolio></Portfolio>
       )}
       */ 

       /*  */
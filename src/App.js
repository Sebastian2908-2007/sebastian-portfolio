import About from "./components/About";
import Nav from './components/Nav';
import Resume from "./components/Resume";
function App() {
  return (
    <div>
     <Nav></Nav>
     <main>
       <About></About>
       <Resume />
     </main>
    </div>
  );
}

export default App;

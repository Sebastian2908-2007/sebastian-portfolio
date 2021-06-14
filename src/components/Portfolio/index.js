import autoMaint from "../../assets/automaintlog.png"
import deepThoughts from "../../assets/deep-thoughts.png"
import zoo from "../../assets/zookeepr.png"
import orien from "../../assets/orien-tech.png"
import pizza from "../../assets/pizza-hunt.png"
import photo from "../../assets/photo-port.png"
const Portfolio = () => {
    return ( 
        
    <div className="flex-row">
        <h1>Sebastian's Portfolio</h1>
        <a href="https://thawing-spire-60901.herokuapp.com/"> 
            Auto Maintenance Log <a href="https://github.com/LyleKilson/auto-maintenance-log">repo</a>
        <img className="img-thumbnail mx-1" src={autoMaint} alt="Auto-maintenance-log"/>
        </a>
        <a href="https://secret-stream-65235.herokuapp.com/">
            Deep-Thoughts <a href="https://github.com/Sebastian2908-2007/deep-thoughts" alt="deep-thoughts-repo">repo</a>
        <img className="img-thumbnail mx-1"  src={deepThoughts} alt="deep-thoughts"/>
        </a>
          <a href="https://mighty-springs-66423.herokuapp.com/"> 
              Zoo Keepr <a href="https://github.com/Sebastian2908-2007/zoo-keepr" alt="zoo=keepr-repo">repo</a>
        <img className="img-thumbnail mx-1" src={zoo} alt="zoo-keepr"/>
           </a>
           <a href="https://calm-dawn-54585.herokuapp.com/">
               Orien Tech Blog  <a href="https://github.com/Sebastian2908-2007/Orien-Tech-Blog" alt="orien-repo">repo</a>
        <img className="img-thumbnail mx-1" src={orien} alt="Orien-tech-blog"/>
          </a>
          <a href="https://blooming-basin-48250.herokuapp.com/" >
              Pizza Hunt   <a href="https://github.com/Sebastian2908-2007/pizza-hunt" alt="pizza-hunt-repo">repo</a>
        <img className="img-thumbnail mx-1" src={pizza} alt="pizza-hunt"/>
        </a>
        <a href="https://sebastian2908-2007.github.io/photo-port/#about"> 
        Photo-port   <a href="https://github.com/Sebastian2908-2007/photo-port" alt="photo-port-repo">repo</a>
        <img className="img-thumbnail mx-1" src={photo} alt="food-festival"/>
        </a>
    </div>
    )
}

export default Portfolio;
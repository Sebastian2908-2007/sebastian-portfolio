import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
      sections=[],
      setCurrentSection,
      currentSection,
  }= props;

  useEffect(() => {
      document.title = capitalizeFirstLetter(currentSection.name);
  }, [currentSection]);

    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="about"> 
                        About Myself
                        </a>
                    </li>
                    <li className="mx-2">
                        <span> 
                        Contact
                        </span>
                    </li>
                    {sections.map((section) => (
                      <li className={`mx-1 ${
                          currentSection.name === section.name && 'navActive'
                      }`}key={section.name}>
                          <span onClick={() => { 
                               setCurrentSection(section)
                               }}
                            >
                              {capitalizeFirstLetter(section.name)}
                          </span>
                      </li> 
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
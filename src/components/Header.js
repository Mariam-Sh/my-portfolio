import React from 'react';
import Particles from 'react-particles-js';


const Header = () => {
    return(
        <div className="header-img" id="home">
        <h2>Welcome</h2>
          <h3 className="mt-5" id="text1">|</h3>
            {/* <div className="myparticles"> */}
              <Particles
                  params={{
                      "particles": {
                              "number": {
                                  "value": 110
                              },
                              "size": {
                                  "value": 7
                              }
                          },
                      "interactivity": {
                          "events": {
                              "onhover": {
                                  "enable": true,
                                  "mode": "repulse"
                              }
                          }
                     }
                  }} />
          {/* </div> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 100" className="svg-img">
          <polygon points="0,0 200,100 1200,100 1400,0 1400,100 0,100 0,0"/>
      </svg>
      </div>
    );
}
export default Header;
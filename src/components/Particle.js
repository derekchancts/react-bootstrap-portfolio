import React from 'react';
import Particles from 'react-particles-js';

const Particle = () => {
  return (
    <Particles 
    className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 6,
              color: '#f9ab00'
            }
          },
          // shape: {
          //   type: 'images',
          //   image: [
          //     {src: '../assets/logo.svg', height: 20, width: 20}
          //   ]
          // }
          
        }
      }}
    />
  )
}

export default Particle

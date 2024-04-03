import React from 'react';

const Footer = () => {
  return (
    <footer className='py-12 relative'>
      <svg
        id="wave"
        style={{ transform: 'rotate(0deg)', transition: '0.3s', zIndex: -1 }} // Add zIndex: -1 to move SVG behind other elements
        viewBox="0 0 1440 380"
        className="absolute w-full bottom-0"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(64, 142, 198, 0.69)" offset="0%"></stop>
            <stop stopColor="rgba(122, 32, 72, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 0px)', opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,342L40,285C80,228,160,114,240,82.3C320,51,400,101,480,145.7C560,190,640,228,720,228C800,228,880,190,960,152C1040,114,1120,76,1200,57C1280,38,1360,38,1440,44.3C1520,51,1600,63,1680,107.7C1760,152,1840,228,1920,215.3C2000,203,2080,101,2160,50.7C2240,0,2320,0,2400,38C2480,76,2560,152,2640,152C2720,152,2800,76,2880,95C2960,114,3040,228,3120,285C3200,342,3280,342,3360,329.3C3440,317,3520,291,3600,272.3C3680,253,3760,241,3840,253.3C3920,266,4000,304,4080,291.3C4160,279,4240,215,4320,158.3C4400,101,4480,51,4560,38C4640,25,4720,51,4800,76C4880,101,4960,127,5040,126.7C5120,127,5200,101,5280,82.3C5360,63,5440,51,5520,50.7C5600,51,5680,63,5720,69.7L5760,76L5760,380L5720,380C5680,380,5600,380,5520,380C5440,380,5360,380,5280,380C5200,380,5120,380,5040,380C4960,380,4880,380,4800,380C4720,380,4640,380,4560,380C4480,380,4400,380,4320,380C4240,380,4160,380,4080,380C4000,380,3920,380,3840,380C3760,380,3680,380,3600,380C3520,380,3440,380,3360,380C3280,380,3200,380,3120,380C3040,380,2960,380,2880,380C2800,380,2720,380,2640,380C2560,380,2480,380,2400,380C2320,380,2240,380,2160,380C2080,380,2000,380,1920,380C1840,380,1760,380,1680,380C1600,380,1520,380,1440,380C1360,380,1280,380,1200,380C1120,380,1040,380,960,380C880,380,800,380,720,380C640,380,560,380,480,380C400,380,320,380,240,380C160,380,80,380,40,380L0,380Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(75.476, 48.481, 111.918, 1)" offset="0%"></stop>
            <stop stopColor="rgba(92.564, 26.918, 106.606, 0.71)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 50px)', opacity: 0.9 }}
          fill="url(#sw-gradient-1)"
          d="M0,0L40,38C80,76,160,152,240,158.3C320,165,400,101,480,114C560,127,640,215,720,253.3C800,291,880,279,960,234.3C1040,190,1120,114,1200,95C1280,76,1360,114,1440,133C1520,152,1600,152,1680,152C1760,152,1840,152,1920,171C2000,190,2080,228,2160,228C2240,228,2320,190,2400,190C2480,190,2560,228,2640,221.7C2720,215,2800,165,2880,139.3C2960,114,3040,114,3120,145.7C3200,177,3280,241,3360,228C3440,215,3520,127,3600,107.7C3680,89,3760,139,3840,171C3920,203,4000,215,4080,234.3C4160,253,4240,279,4320,278.7C4400,279,4480,253,4560,240.7C4640,228,4720,228,4800,221.7C4880,215,4960,203,5040,202.7C5120,203,5200,215,5280,202.7C5360,190,5440,152,5520,164.7C5600,177,5680,241,5720,272.3L5760,304L5760,380L5720,380C5680,380,5600,380,5520,380C5440,380,5360,380,5280,380C5200,380,5120,380,5040,380C4960,380,4880,380,4800,380C4720,380,4640,380,4560,380C4480,380,4400,380,4320,380C4240,380,4160,380,4080,380C4000,380,3920,380,3840,380C3760,380,3680,380,3600,380C3520,380,3440,380,3360,380C3280,380,3200,380,3120,380C3040,380,2960,380,2880,380C2800,380,2720,380,2640,380C2560,380,2480,380,2400,380C2320,380,2240,380,2160,380C2080,380,2000,380,1920,380C1840,380,1760,380,1680,380C1600,380,1520,380,1440,380C1360,380,1280,380,1200,380C1120,380,1040,380,960,380C880,380,800,380,720,380C640,380,560,380,480,380C400,380,320,380,240,380C160,380,80,380,40,380L0,380Z"
        ></path>
      </svg>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='flex items-center justify-center lg:justify-start mb-4 lg:mb-0'>
            <a href='#' data-aos='fade-down' data-aos-delay='1000'>
              <img className='h-[80px] ' src='codecollab.png' alt='logo' />
            </a>
          </div>
          <div className='flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-6 text-white text-lg'>
            <a href='/' className='hover:text-accent'>
              Home
            </a>
            <a href='#' className='hover:text-accent'>
              Features
            </a>
            <a href='#' className='hover:text-accent'>
              FAQ
            </a>
            <a href='#' className='hover:text-accent'>
              Contact
            </a>
          </div>
        </div>
        <div className='mt-8 text-center lg:text-left text-white text-sm'>
          <p>&copy; {new Date().getFullYear()} Code Collab.</p>
          <p className='mt-2'>All rights reserved, Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

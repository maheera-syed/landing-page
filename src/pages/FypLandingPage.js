import React from 'react';

function Header() {
  return (
    <header className="relative py-4">
      {/* SVG background */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full z-0">
        <path fill="#3d2352" fillOpacity="1" d="M0,96L21.8,117.3C43.6,139,87,181,131,176C174.5,171,218,117,262,96C305.5,75,349,85,393,128C436.4,171,480,245,524,266.7C567.3,288,611,256,655,245.3C698.2,235,742,245,785,234.7C829.1,224,873,192,916,197.3C960,203,1004,245,1047,224C1090.9,203,1135,117,1178,90.7C1221.8,64,1265,96,1309,128C1352.7,160,1396,192,1418,208L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
      </svg>
      

      {/* Content */}
      <nav className="flex justify-center items-center relative z-10">
        <a href="#" className="mx-4 text-white">Home</a>
        <a href="#" className="mx-4 text-white">Features</a>
        <a href="#" className="mx-4 text-white">FAQ</a>
        <a href="#" className="mx-4 text-white">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

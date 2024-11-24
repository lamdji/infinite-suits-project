const WaveNavbar = () => {
    return (
      <div className="relative w-full h-6 overflow-hidden">
        {/* Première vague */}
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-[#BF9768] to-[#BF9768] opacity-70 animate-wave top-1/2 transform -translate-y-1/2"></div>
        
        {/* Deuxième vague */}
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-[#ff7eb3] to-[#ff758c] opacity-50 animate-wave2 top-1/2 transform -translate-y-1/2"></div>
        
        {/* Troisième vague */}
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-[#ffeb3b] to-[#ff9800] opacity-30 animate-wave3 top-1/2 transform -translate-y-1/2"></div>
      </div>
    );
  };
  
  export default WaveNavbar;
  

function Header() {
  return (
    <div className="flex w-[100vw] justify-center items-center gap-5 h-36 border-b-2 border-Mocha-light mb-20">
      <img src="/logo.png" alt="logo" className="w-16 h-16 rotate-[20deg]"/>         
      <div className="flex flex-col justify-center items-center">
        <span className="text-xl font-bold text-Mocha">BYD Cafe News</span>
        <span className="text-md italic text-Mocha-light">October 2024 Edition</span>
      </div>
    </div>
  );
}


export default Header;

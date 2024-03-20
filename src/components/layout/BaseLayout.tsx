import Logo from "/images/image.png";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="bg-slate-300 w-1/2 h-screen bg-gradient-to-b from-[#6bb2c4] to to-[#163e47] shadow-lg flex flex-col">
        <div className="flex flex-col items-center mt-20">
          <img src={Logo} alt="logo" className="w-4/6" />
          <span className="text-5xl text-center text-white font-extrabold font-mono mb-7 mt-4">
            FINTRACK
          </span>
          <span className="text-3xl text-center text-white font-semibold">
            Where Numbers Tell Your Success Story.
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ml-auto w-1/2">
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
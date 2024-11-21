import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    <div className="max-w-6xl mx-auto lg:pt-20">
      <div className="grid bg-[#F8FAFF] rounded-2xl  grid-cols-1 md:grid-cols-2 gap-6">
        <div className=" pt-10 flex flex-col justify-between">
          <div className="flex flex-col  lg:px-20 ">
            <h2 className="text-2xl text-center lg:text-left font-bold mb-2">
              Meet Our Team
            </h2>
            <p className="text-zinc-600 lg:text-left text-center mb-4">
              Our dedicated team of industry certified professionals
            </p>
          </div>
          
            <Link
              to="/booknow"
              className="bg-[#68CA05] ml-20 flex justify-center w-1/2 p-3 hover:bg-blue-950 duration-500 text-white rounded-full"
            >
              Book Your Cleaning Now
            </Link>
         
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-10 lg:gap-0 place-items-center ">
          <div className=""></div>
          <div className="relative">
            <img
              src="../assets/hod.png"
              alt="Babatunde Ezekiel"
              className=" w-[350px] brightness-[.8] rounded-3xl md:rounded-none  h-full object-cover "
            />
            <div className="absolute bottom-0 left-0  p-2  w-full">
              <p className="text-white text-sm font-bold">Babatunde Ezekiel</p>
              <p className="text-white text-xs">HOD Training</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="../assets/queen.png"
              alt="Queen Okon"
              className="rounded-3xl brightness-[.8]  md:rounded-none w-[350px] h-full object-cover "
            />
            <div className="absolute bottom-0 left-0  p-2  w-full">
              <p className="text-white text-sm font-bold">Queen Okon</p>
              <p className="text-white text-xs">Operation Manager</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="../assets/admin.png"
              alt="Emmanuel Akiri"
              className="h-full brightness-[.8] rounded-3xl md:rounded-none w-[350px] object-cover "
            />
            <div className="absolute bottom-0 left-0  p-2  w-full">
              <p className="text-white text-sm font-bold">Emmanuel Akiri</p>
              <p className="text-white text-xs">Admin</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="../assets/hr.png"
              alt="Ibitoye Ayodele"
              className="h-full w-[350px] brightness-[.8] rounded-3xl md:rounded-none object-cover "
            />
            <div className="absolute bottom-0 left-0  p-2  w-full">
              <p className="text-white text-sm font-bold">Ibitoye Ayodele</p>
              <p className="text-white text-xs">HR</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="../assets/ceo.png"
              alt="Ruth Okwuone"
              className=" w-[350px] brightness-[.8] rounded-3xl md:rounded-none h-full object-cover "
            />
            <div className="absolute bottom-0 left-0  p-2  w-full">
              <p className="text-white text-sm font-bold">Ruth Okwuone</p>
              <p className="text-white text-xs">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black relative bottom-0">
      <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto">
          <div className="mx-auto">
            <Image
              src="/logo.png"
              width={220}
              height={100}
              // onBlur={true}
              alt="This is the website logo called SIBERIAN SPIKE"
              className="invert brightness-0 mb-4"
            />
            <p className="text-white/80 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-white">
              <span className="flex items-center gap-x-1 mb-2">
                <MdOutlineEmail className="text-2xl" /> siberian@spike.com
              </span>
              <span className="flex items-center gap-x-1 mb-2">
                <BsFillTelephoneFill className="text-2xl" /> 1 562 867 4578
              </span>
              <span className="flex items-center gap-x-1">
                <CiLocationOn className="text-2xl text-white" /> Broadway &
                Morris St, New York
              </span>
            </div>
          </div>
          <div className="text-white mx-auto">
            <h5 className="font-semibold text-lg mb-5">Our Recent Posts</h5>
            <div className="pb-4">
              <p className="text-white/80 pb-2">
                Visit Thailand, Bali And China
              </p>
              <p>February 2, 2016</p>
            </div>
            <div className="pb-4">
              <p className="text-white/80 pb-2">The Sound Of Our Jungle</p>
              <p>February 2, 2016</p>
            </div>
            <div className="pb-4">
              <p className="text-white/80 pb-2">New Year, New Resolutions!</p>
              <p>February 2, 2016</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto">
          <div className="text-white mx-auto">
            <h5 className="font-semibold text-lg">
              Subscribe to our Newsletter
            </h5>
            <p className="my-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
            </p>
            <form>
              <div className="relative mb-4">
                <label className="absolute top-3 left-4 text-xl">
                  <FaUser />
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="bg-white/25 placeholder:text-white outline-0 pl-12 py-3 w-[300px]"
                />
              </div>
              <div className="relative">
                <label className="absolute top-3 left-4 text-xl">
                  <MdOutlineEmail />
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="bg-white/25 placeholder:text-white mb-5 outline-0 pl-12 py-3 w-[300px]"
                />
              </div>
              <button className="uppercase w-[300px] py-3 bg-[#3FD0D4] font-bold hover:text-black hover:bg-white tracking-wide hover:duration-1000">
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-white">
            <h5 className="text-xl font-semibold">Our Instagram</h5>
            <p className="text-white/80 my-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo.
            </p>
            <div className="flex items-center gap-x-5">
              <Image
                src="/footerpic1.jpg"
                width={60}
                height={70}
                // onBlur={true}
                alt="This is one of our tourist photo"
                className="hover:scale-[1.1] hover:duration-1000 cursor-pointer"
              />
              <Image
                src="/footerpic2.jpg"
                width={60}
                height={70}
                // onBlur={true}
                alt="This is one of our tourist photo"
                className="hover:scale-[1.1] hover:duration-1000 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white pb-10">
        <span className="text-white/80">© 2023 </span> Shadman Tahmid
      </p>
    </footer>
  );
};

export default Footer;

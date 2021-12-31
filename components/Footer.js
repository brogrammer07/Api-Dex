import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-black h-10 flex justify-between items-center text-white px-5 z-0 ">
      <h1 className="text-xs sm:text-sm text-gray-300">
        Copyright &copy; 2021 ApiDex{" "}
      </h1>
      <div className="flex space-x-4  cursor-pointer">
        <BsInstagram />
        <BsTwitter className="hidden sm:block" />
        <BsGithub />
        <BsFacebook />
      </div>
    </div>
  );
}

export default Footer;

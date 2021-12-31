import { motion } from "framer-motion";
import Link from "next/link";

function Api({ header, img, para, lnk }) {
  return (
    <div className="box-item relative h-44">
      <div className="flip-box">
        <div
          className="flip-box-front text-center bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}>
          <div className="inner text-white">
            <h3 className="font-bold text-3xl">{header}</h3>
          </div>
        </div>
        <div
          className="flip-box-back text-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/photos/black-curtain-background-scene-picture-id699856648?k=20&m=699856648&s=612x612&w=0&h=VLu_k8Kz5SHrpI61vBXEadLFSontBSCKgedA-pCLjtE=')",
          }}>
          <div className="inner flex  flex-col justify-center items-center mt-1 space-y-3">
            <h3 className=" text-white font-bold text-center text-xs">
              {para}
            </h3>
            <Link as={lnk} href={lnk}>
              <button className="text-white text-center w-5/12 bg-red-600 px-3 py-1 rounded-md hover:scale-110 transition-all duration-200 hover:bg-red-800">
                Use
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;

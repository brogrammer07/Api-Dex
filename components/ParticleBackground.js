import Particles from "react-particles-js";
import particlesConfig from "../config/particle-config";

export default function ParticlesBackground(){
    return(
        <Particles canvasClassName="absolute" params={particlesConfig} />
    );
}
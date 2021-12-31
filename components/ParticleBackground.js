import Particles from "react-tsparticles";
import particlesConfig from "../config/particle-config";

export default function ParticlesBackground() {
  return <Particles canvasClassName="absolute" params={particlesConfig} />;
}

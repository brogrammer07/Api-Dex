import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ParticlesBackground from "../../../components/ParticleBackground";
import MarvelApiBody from "../../../components/products/MarvelApi/MarvelApiBody";

function marvelapi() {
  return (
    <div className="bg-black">
      <ParticlesBackground />
      <Head>
        <title>Marvel Api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col mx-auto shadow-2xl shadow-black w-9/12 h-screen lg:overflow-hidden bgColor ">
        <Header />
        <MarvelApiBody />
        <Footer />
      </div>
    </div>
  );
}

export default marvelapi;

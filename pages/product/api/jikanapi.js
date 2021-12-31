import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ParticleBackground from "../../../components/ParticleBackground";
import JikanApiBody from "../../../components/products/JikanApi/JikanApiBody";

function jikanapi() {

    return (
        <div className="bg-black">
          <ParticleBackground />
              <Head>
                <title>Jikan Api</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
            <div className="flex flex-col justify-between  mx-auto shadow-2xl shadow-black h-screen w-9/12 overflow-hidden bgColor ">
              <Header />
              <JikanApiBody  />
              <Footer />
            </div>
          </div>
    )
}

export default jikanapi

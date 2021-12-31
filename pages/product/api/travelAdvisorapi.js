import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ParticlesBackground from "../../../components/ParticleBackground";
import TravelAdvisorApiBody from "../../../components/products/TravelAdvisorApi/TravelAdvisorApiBody";

function travelAdvisorapi() {
  return (
    <div className="bg-black">
      <ParticlesBackground />
      <div className="flex flex-col  mx-auto shadow-2xl shadow-black h-screen w-9/12 overflow-y-scroll scrollbar-hide lg:overflow-hidden bgColor ">
        <Head>
          <title>Travel Advisor Api</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <TravelAdvisorApiBody />
        <Footer />
      </div>
    </div>
  );
}

export default travelAdvisorapi;

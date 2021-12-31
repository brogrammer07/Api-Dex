import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import WeatherApiBody from "../../../components/products/WeatherAPi/WeatherApiBody";
import ParticleBackground from "../../../components/ParticleBackground";
function weatherapi() {
  return (
    <div className="bg-black">
      <ParticleBackground />
      <div className="flex flex-col  mx-auto shadow-2xl shadow-black h-screen w-9/12 overflow-y-scroll scrollbar-hide lg:overflow-hidden bgColor ">
        <Head>
          <title>Weather Api</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <WeatherApiBody />
        <Footer />
      </div>
    </div>
  );
}

export default weatherapi;

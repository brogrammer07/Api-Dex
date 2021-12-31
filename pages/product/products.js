import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ParticlesBackground from "../../components/ParticleBackground";
import ProductBody from "../../components/products/ProductBody";

function products() {
  return (
    <div className="bg-black transition-all duration-200">
      <ParticlesBackground />
      <div className="flex flex-col  mx-auto shadow-2xl shadow-black h-screen w-9/12 overflow-y-scroll md:overflow-hidden bgColor">
        <Head>
          <title>Products</title>
          <link rel="icon" href="/favicon.ico" />
          <script
            src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}
          />
        </Head>
        <Header />
        <ProductBody />
        <Footer />
      </div>
    </div>
  );
}

export default products;

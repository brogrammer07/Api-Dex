import Head from 'next/head'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ParticlesBackground from '../components/ParticleBackground'

export default function Home() {
  
  return (
    <div className="bg-black overflow-hidden ">
      <ParticlesBackground />
        <Head>
          <title>ApiDex</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className="flex flex-col sm:justify-between mx-auto shadow-2xl shadow-black h-screen w-9/12 overflow-hidden  bgColor">
        <Header/>
        <Body />
        <Footer />
      </div>
    </div>
  )
}

// bg-gradient-to-t from-[#311543] to-[#69117c]
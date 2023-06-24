import Hero from "./Hero.jsx";
import NftCollection from "./NftCollection.jsx";
import ParticleTest from "../components/Particle.jsx";
import ConnectWallet from "./ConnectWalllet.jsx";
import MarqueeNft from "./MarqueeNft.jsx";
import Roadmap from "./Roadmap.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <NftCollection />
      <ParticleTest />
      <ConnectWallet />
      <MarqueeNft />
      <Roadmap />
    </div>
  );
};

export default Home;

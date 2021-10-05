import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Games from '../components/Games';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Platforms from '../components/Platforms';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Platforms />
      <Games />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

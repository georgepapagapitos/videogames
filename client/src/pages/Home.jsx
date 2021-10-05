import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
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
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

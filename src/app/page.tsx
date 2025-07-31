import Navbar from "./Components/Common/Navbar";
import SectionOne from "./Components/Home/Sectionone";
import Trending from "./Components/Home/Trending";
import Topgames from "./Components/Home/Topgames";
import Categories from "./Components/Home/Categories";
import Newsletter from "./Components/Home/Newsletter";
import Footer from "./Components/Common/Footer";

export default function HomeComponent() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px]">
        <Navbar />
        <SectionOne />
      </div>
      <Trending />
      <Topgames />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}
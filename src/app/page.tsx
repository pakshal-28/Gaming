import Navbar from "./Components/Common/Navbar";
import SectionOne from "./Components/Home/Sectionone";
import Trending from "./Components/Home/Trending";
import Topgames from "./Components/Home/Topgames";
import Categories from "./Components/Home/Categories";
import Newsletter from "./Components/Home/Newsletter";
import Footer from "./Components/Common/Footer";
import trending1 from "../../public/trending1.jpg";
import trending2 from "../../public/trending2.jpg";
import trending3 from "../../public/trending3.jpg";
import trending4 from "../../public/trending4.jpg";

// Categories page
const categories = [
  { src: "/categories01.jpg", title: "Action" },
  { src: "/Categories02.jpg", title: "Action" },
  { src: "/categories03.jpg", title: "Action" },
  { src: "/categories03.jpg", title: "Action" },
  { src: "/Categories02.jpg", title: "Action" },
];

// Trending page
const games = [
  { id: 1, title: "Assassin Creed", category: "Action", image: trending1, price: 20, oldPrice: 28 },
  { id: 2, title: "Assassin Creed", category: "Action", image: trending2, price: 44, oldPrice: null },
  { id: 3, title: "Assassin Creed", category: "Action", image: trending3, price: 44, oldPrice: 64 },
  { id: 4, title: "Assassin Creed", category: "Action", image: trending4, price: 32, oldPrice: null, },
];

export default function HomeComponent() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px]">
        <Navbar />
        <SectionOne />
      </div>
      <Trending games={games} />
      <Topgames />
      <Categories categories={categories} showHeader={true} />
      <Newsletter />
      <Footer />
    </div>
  );
}
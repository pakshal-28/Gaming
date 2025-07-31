import Navbar from "../Components/Common/Navbar";
import ShopOne from "../Components/Shop/ShopOne"
import Shoptrading from "../Components/Shop/Shoptrading"
import Footer from "../Components/Common/Footer";

export default function ShopComponent() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px]">
        <Navbar />
        <ShopOne />
      </div>
      <Shoptrading />
      <Footer />
    </div>
  );
}
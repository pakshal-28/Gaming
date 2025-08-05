import NextBreadcrumb from '../Components/Common/NextBreadcrumb'
import Navbar from "../Components/Common/Navbar";
import ShopOne from "../Components/Shop/ShopOne"
import Shoptrading from "../Components/Shop/Shoptrading"
import Footer from "../Components/Common/Footer";
import { ChevronRight } from "lucide-react";

export default function ShopComponent() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px] flex flex-col items-center justify-center py-18">
        <Navbar />
        <ShopOne />
        <NextBreadcrumb
          homeElement="Home"
          separator={<ChevronRight size={16} />}
          activeClasses="text-amber-500"
          containerClasses="flex"
          listClasses="hover:underline mx-2 font-bold flex item-center"
          capitalizeLinks
        />
      </div>
      <Shoptrading />
      <Footer />
    </div>
  );
}

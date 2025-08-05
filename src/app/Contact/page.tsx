import NextBreadcrumb from '../Components/Common/NextBreadcrumb'
import Navbar from "../Components/Common/Navbar";
import ContactOne from "../Components/Contact/ContactOne"
import ContactInfo from "../Components/Contact/ContactInfo"
import Footer from "../Components/Common/Footer";
import { ChevronRight } from "lucide-react";

export default function ContactComponent() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px] flex flex-col items-center justify-center py-18">
        <Navbar />
        <ContactOne />
        <NextBreadcrumb
          homeElement="Home"
          separator={<ChevronRight size={16} />}
          activeClasses="text-amber-500"
          containerClasses="flex"
          listClasses="hover:underline mx-2 font-bold flex item-center"
          capitalizeLinks
        />
      </div>
      <ContactInfo />
      <Footer />
    </div>
  );
}
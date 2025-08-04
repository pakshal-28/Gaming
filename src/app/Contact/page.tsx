import Navbar from "../Components/Common/Navbar";
import ContactOne from "../Components/Contact/ContactOne"
import ContactInfo from "../Components/Contact/ContactInfo"
import Footer from "../Components/Common/Footer";

export default function ContactComponent() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px]">
        <Navbar />
        <ContactOne />
      </div>
      <ContactInfo />
      <Footer />
    </div>
  );
}
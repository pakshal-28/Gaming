import Navbar from "../Components/Common/Navbar";
import ProductOne from "../Components/Product/ProductOne"
import ProductTwo from "../Components/Product/ProductTwo"
import ProductCategories from "../Components/Product/ProductCategories"
import ProductReview from "../Components/Product/ProductReview"
import Footer from "../Components/Common/Footer";

export default function ProductComponent() {
    return (
        <div className="bg-white">
            <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px]">
                <Navbar />
                <ProductOne />
            </div>
            <ProductTwo />
            <ProductReview />
            <ProductCategories />
            <Footer />
        </div>
    );
}
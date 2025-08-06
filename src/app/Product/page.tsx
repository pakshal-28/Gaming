import NextBreadcrumb from '../Components/Common/NextBreadcrumb'
import Navbar from "../Components/Common/Navbar";
import ProductOne from "../Components/Product/ProductOne"
import ProductTwo from "../Components/Product/ProductTwo"
import ProductReview from "../Components/Product/ProductReview"
import ProductCategories from '../Components/Product/ProductCategories';
import Footer from "../Components/Common/Footer";
import { ChevronRight } from "lucide-react";

const categories = [
    { src: "/categories01.jpg", title: "Action" },
    { src: "/Categories02.jpg", title: "Action" },
    { src: "/categories03.jpg", title: "Action" },
    { src: "/categories03.jpg", title: "Action" },
    { src: "/Categories02.jpg", title: "Action" },
];

export default function ProductComponent() {
    return (
        <div className="bg-white">
            <div className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat rounded-b-[150px] flex flex-col items-center justify-center py-18">
                <Navbar />
                <ProductOne />
                <NextBreadcrumb
                    homeElement="Home"
                    separator={<ChevronRight size={16} />}
                    activeClasses="text-amber-500"
                    containerClasses="flex"
                    listClasses="hover:underline mx-2 font-bold flex item-center"
                    capitalizeLinks
                />
            </div>
            <ProductTwo />
            <ProductReview />
            <ProductCategories categories={categories} />
            <Footer />
        </div>
    );
}
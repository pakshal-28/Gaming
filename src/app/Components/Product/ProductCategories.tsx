import Image from "next/image";
import Categories from "../Home/Categories";

export default function ProductCategories({ categories = [] }: any) {

    return (
        <section className="max-w-6xl mx-auto px-2 py-14">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h6 className="text-[#ee626b] uppercase text-[15px] font-bold">Action</h6>
                    <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-5">Related Games</h2>
                </div>

                <button className="hidden md:inline-block h-12 text-[14px] font-semibold bg-[#ee626b] hover:bg-[#1B7FFA] uppercase px-7 rounded-[25px] cursor-pointer">
                    VIEW ALL
                </button>
            </div>

            {/* Category Cards */}
            <Categories categories={categories} />
        </section>
    );
}

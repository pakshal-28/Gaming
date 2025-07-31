import Image from "next/image";

export default function ProductReview() {


    return (
        <section className="max-w-7xl flex-col mx-auto py-8 rounded-[25px] bg-[#F7F7F7]">
            {/* Header */}
            <div className="flex justify-between px-4">
                <div className="max-w-7xl flex-col mx-auto">
                   <div className="flex my-2">
                     <h2 className="text-[20px] font-semibold text-[#0070f8] mr-2">Description
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#1e1e1e] mx-2">Reviews (3)
                    </h2>
                   </div>
                    <p className="text-[14px] font-medium text-[#4a4a4a]">You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
                    <br />
                    <p className="text-[14px] font-medium text-[#4a4a4a]">Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
                </div>

            </div>

        </section >
    );
}

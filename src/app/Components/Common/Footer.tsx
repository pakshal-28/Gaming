export default function Footer() {
  return (
    <div
      className="bg-[url('/bannerbg.jpg')] bg-cover bg-center bg-no-repeat 
             rounded-t-[80px] md:rounded-t-[120px] lg:rounded-t-[150px]
             text-white font-medium text-sm md:text-base lg:text-lg 
             text-center py-4 md:py-6 px-3 md:px-4 h-auto">
      <p>
        Copyright © 2048 LUGX Gaming Company. All rights reserved.
      </p>
      <p className="mt-1 text-xs md:text-sm">
        Design: TemplateMo
      </p>
    </div>
  );
}
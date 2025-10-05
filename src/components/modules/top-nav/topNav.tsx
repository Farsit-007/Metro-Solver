import Marquee from "react-fast-marquee";

const TopNav = () => {
  const topBarItems = [
    "Budget friendly",
    "No 1 in Europe",
    "On your first order",
    "30% OFF",
    "For all products buy now get the offer",
    "User Friendly",
    "24/7 Service",
  ];

  return (
    <section>
      <div className="bg-[#11111db4]">
        <div className="max-w-7xl mx-auto px-10 py-3">
          <div className="hidden md:flex items-center justify-center flex-wrap gap-3 text-xs text-gray-400">
            {topBarItems.map((item, idx) =>
              item === "30% OFF" ? (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-[#ED213A] to-[#F7762F] text-white px-3 py-1 rounded font-semibold"
                >
                  {item}
                </span>
              ) : (
                <span key={idx} className="flex items-center">
                  {idx !== 0 && <span className="mx-2 text-gray-500">•</span>}
                  {item}
                </span>
              )
            )}
          </div>

          <div className="block lg:hidden w-full">
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
              {topBarItems.map((item, idx) =>
                item === "30% OFF" ? (
                  <span
                    key={idx}
                    className="inline-block bg-gradient-to-r from-[#ED213A] to-[#F7762F] text-white px-3 py-1 rounded font-semibold"
                  >
                    {item}
                  </span>
                ) : (
                  <span key={idx} className="inline-block mx-3">
                    {item}
                  </span>
                )
              )}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNav;

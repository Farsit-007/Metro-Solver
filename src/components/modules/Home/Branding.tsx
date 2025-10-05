import Marquee from "react-fast-marquee";

export default function CompanyMarquee() {
  const companies = [
    {
      name: "Luminus",
    },
    {
      name: "Brembo",
    },
    {
      name: "Motorola",
    },
    {
      name: "Luminus",
    },
    {
      name: "Brembo",
    },
    {
      name: "Motorola",
    },
  ];

  return (
    <div className="w-full z-10 relative">
      <div className="absolute -z-10 -bottom-20 right-80 w-[850px] h-[850px] bg-purple-400/10 rounded-full blur-3xl "></div>
      <div className="max-w-7xl mx-auto px-6">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="py-8"
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="mx-8 flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl px-8 py-2 hover:bg-white/10 transition-all duration-300 group"
            >
              <span className="text-white font-bold text-2xl whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

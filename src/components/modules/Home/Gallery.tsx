import Image from "next/image";
import Marquee from "react-fast-marquee";

// Import images from assets
import top1 from "@/assets/t1.png";
import top2 from "@/assets/2.jpg";

import middle1 from "@/assets/m1.png";
import middle2 from "@/assets/m2.jpeg";

import bottom1 from "@/assets/b1.jpg";
import bottom2 from "@/assets/b2.jpg";

const topItems = [{ imageUrl: top1 }, { imageUrl: top2 }];
const middleItems = [{ imageUrl: middle1 }, { imageUrl: middle2 }];
const bottomItems = [{ imageUrl: bottom1 }, { imageUrl: bottom2 }];

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto  py-16 relative ">
      {/* Section Title */}
       <div className="absolute  -top-40 -right-10 w-[850px] h-[850px] bg-purple-500/10 rounded-full blur-3xl "></div>
        <div className="absolute  bottom-40 -left-10 w-[850px] h-[850px] bg-purple-500/10 rounded-full blur-3xl "></div>
        <div className="absolute  -bottom-52 -left-10 w-[850px] h-[850px] bg-purple-500/10 rounded-full blur-3xl "></div>
      <div className="flex items-center justify-between py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white ">
         Our Latest Works
        </h2>
        <p className="text-gray-300 max-w-2xl ">
          Explore our collection of featured projects and creations. Each
          piece represents our dedication, creativity, and attention to
          detail.
        </p>
      </div>

      <div className="space-y-8">
        {/* Top Marquee */}
        <Marquee
          gradient={false}
          autoFill
          direction="right"
          speed={50}
          pauseOnHover
        >
          {topItems.map((item, idx) => (
            <div key={idx} className="relative w-76 h-60 mx-5">
              <Image
                src={item.imageUrl}
                alt={`top-${idx}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </Marquee>

        {/* Middle Marquee */}
        <Marquee
          gradient={false}
          autoFill
          direction="left"
          speed={50}
          pauseOnHover
        >
          {middleItems.map((item, idx) => (
            <div key={idx} className="relative w-96 h-[600px] mx-5">
              <Image
                src={item.imageUrl}
                alt={`middle-${idx}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </Marquee>

        {/* Bottom Marquee */}
        <Marquee
          gradient={false}
          autoFill
          direction="right"
          speed={50}
          pauseOnHover
        >
          {bottomItems.map((item, idx) => (
            <div key={idx} className="relative w-76 h-60 mx-5">
              <Image
                src={item.imageUrl}
                alt={`bottom-${idx}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Gallery;

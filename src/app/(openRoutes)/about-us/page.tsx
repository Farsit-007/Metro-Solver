import About from "@/components/modules/Home/About";
import { ContactSection } from "@/components/modules/Home/Contact";
import Counter from "@/components/modules/Home/Counter";
import Newsletter from "@/components/modules/Home/Newsletter";
import Image from "next/image";
import p1 from "@/assets/table.jpg";
import p2 from "@/assets/p2.jpg";
const page = () => {
  return (
    <div>
      <About />
      <Counter />
      <section className="max-w-7xl mx-auto relative px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden p-[2px] ">
              <div className="rounded-3xl relative z-50 overflow-hidden bg-[#0a0015]">
                <Image
                  src={p1}
                  alt="Metro Solver team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-3xl"
                  priority
                />
              </div>
            </div>
            <div className=" hidden  -top-24 -left-8 z-10 lg:block absolute w-[600px] h-[400px] rounded-3xl overflow-hidden p-[2px]  border-2 border-amber-50"></div>

            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl -z-10 rounded-full" />
          </div>

          {/* Right Content */}
          <div className="space-y-12">
            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-3xl  font-bold text-white">
                Metro Solver Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to cover all your digital needs by providing
                innovative, comprehensive, and affordable solutions that meet
                your specific requirements and exceed your expectations. We are
                dedicated to delivering top-quality services that empower
                businesses to succeed in a competitive digital landscape.
              </p>
            </div>

            {/* Story */}
            <div className="space-y-4">
              <h2 className="text-3xl  font-bold text-white">
                Metro Solver Story
              </h2>
              <p className="text-gray-300 leading-relaxed">
                In July 2023, a vision took shape that would redefine the
                landscape of digital services. This vision came from Nayanvi
                Karan, the founder and director of Metro Solver. The story
                begins with Nayanvi and his co-founder, Shazan Mahmud, who faced
                a significant challenge while trying to launch their first
                business in the UK. They encountered a digital services market
                that was not only exorbitantly expensive but also lacked a
                comprehensive, all-in-one solution...{" "}
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Read More
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Meet Our Agents
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-8 py-3 bg-purple-600/50 border-2 border-purple-600 hover:bg-purple-600 text-white text-base rounded-full transition-colors">
            All
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent text-white font-medium hover:bg-purple-600/20 transition-colors">
            Agency
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent text-white font-medium hover:bg-purple-600/20 transition-colors">
            Creative
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent text-white font-medium hover:bg-purple-600/20 transition-colors">
            Leadership
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent text-white font-medium hover:bg-purple-600/20 transition-colors">
            Grow Marketing
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent text-white font-medium hover:bg-purple-600/20 transition-colors">
            Technology
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden p-[2px] "
            >
              <div className="rounded-3xl overflow-hidden bg-[#0a0015]">
                <div className="relative">
                  <Image
                    src={p2}
                    alt="Ayesha Siddiqah"
                    width={300}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className=" relative">
                    <div className="absolute bg-black/70 w-[90%] bottom-10 rounded-r-full left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">
                        Ayesha Siddiqah
                      </h3>
                      <p className="text-gray-300 text-sm">Co-founder Leader</p>
                    </div>
                    <div className="absolute bottom-16 right-16 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="bg-purple-600/50  border-2 border-purple-600 hover:bg-purple-600 text-white px-8 py-4 text-base rounded-full">
            View More
          </button>
        </div>
      </section>
      <ContactSection />
      <Newsletter />
    </div>
  );
};

export default page;

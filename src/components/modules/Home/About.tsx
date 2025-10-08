import {Sparkles } from "lucide-react";
import Image from "next/image";
import p1 from "@/assets/table.jpg";
const About = () => {
  return (
    <section className="max-w-7xl mx-auto  py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
  
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight text-balance">
            Unveiling the Essence Of Our Metro Solver
          </h1>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Welcome to Metro Solver, where creativity meets strategy, and
              brands come to life. We are not just a branding agency; we are
              architects of identity, storytellers of success, and partners in
              your journey. Metro Solver is a hub of innovative minds,
              passionate about concepts to captivating brand experiences.
            </p>

            <p>
              At Rath our overarching goal is to redefine industry standards by
              providing a dynamic and adaptive HR and CRM SaaS platform. We aim
              to empower businesses of all sizes to optimise their operations,
              foster employee growth, and cultivate enduring customer
              relationships.
            </p>
          </div>

          <button className="group flex items-center gap-3 bg-gradient-to-t from-[#633fe4] to-[#8A56F3] hover:to-violet-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
            <Sparkles className="w-5 h-5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden p-[2px] ">
            <div className="rounded-3xl relative z-40 overflow-hidden bg-[#0a0015]">
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
          <div className=" hidden -top-24 -right-8 z-10 lg:block  absolute w-[600px] h-[400px] rounded-3xl overflow-hidden p-[2px]  border-2 border-amber-50"></div>

          {/* Decorative glow effect */}
          <div className="absolute -inset-4 bg-purple-600/20 blur-3xl -z-10 rounded-full" />
        </div>
      </div>
      
    </section>
  );
};

export default About;

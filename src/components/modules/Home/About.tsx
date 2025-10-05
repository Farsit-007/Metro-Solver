import { Calendar } from "lucide-react";
import Image from "next/image";
import p1 from "@/assets/table.jpg";
const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight text-balance">
            Unveiling the Essence Of Our Metro Solver
          </h1>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Welcome to Metro Solver, where creativity meets strategy, and
              brands come to life. We are not just a branding agency; we are
              architects of identity, storytellers of success, and partners in
              your{" "}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-400 text-xs">
                ?
              </span>{" "}
              journey. Metro Solver is a hub of innovative minds, passionate
              about{" "}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-400 text-xs">
                ?
              </span>{" "}
              concepts to captivating brand experiences.
            </p>

            <p>
              At Rath our overarching goal is to redefine industry standards by
              providing a dynamic and adaptive HR and CRM SaaS platform. We aim
              to empower businesses of all sizes to optimise their operations,
              foster employee growth, and cultivate enduring customer
              relationships.
            </p>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-base rounded-full">
            <Calendar className="mr-2 h-5 w-5" />
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden p-[2px] bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500">
            <div className="rounded-3xl overflow-hidden bg-[#0a0015]">
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
          <div className="translate-x-32 relative w-[600px] h-[400px] rounded-3xl overflow-hidden p-[2px]  border-2 border-amber-50"></div>

          {/* Decorative glow effect */}
          <div className="absolute -inset-4 bg-purple-600/20 blur-3xl -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;

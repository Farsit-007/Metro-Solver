import {
  Phone,
  Truck,
  CheckCircle2,
  FileSearch,
  Code,
  Settings,
} from "lucide-react";

export default function HowToWork() {
  const services = [
    {
      icon: Truck,
      title: "Delivery and Support",
      position: "top-0 left-8",
    },
    {
      icon: Phone,
      title: "Book a Call",
      position: "top-0 right-8",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      position: "top-1/2 -translate-y-1/2 left-0",
    },
    {
      icon: FileSearch,
      title: "Requirement Analysis",
      position: "top-1/2 -translate-y-1/2 right-0",
    },
    {
      icon: Code,
      title: "Implement & Develop",
      position: "bottom-0 left-8",
    },
    {
      icon: Settings,
      title: "Service Customization",
      position: "bottom-0 right-8",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto  flex items-center justify-center p-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full">
        {/* Central circle with dotted border */}
      

        {/* Center card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full opacity-75 blur " />

            <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl border border-purple-500/30 rounded-full w-96 h-96 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-1">How</h2>
                <h2 className="text-2xl font-bold text-white">to Work?</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Service cards positioned around the circle */}
        <div className="relative w-full h-[500px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute ${service.position} group cursor-pointer`}
            >
              <div className="relative">
               
                <div className="relative bg-gradient-to-br from-[#1a1a3e]/80 to-[#0f0f2e]/80 backdrop-blur-xl border border-purple-500/20 rounded-full p-6 min-w-[240px] hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <h3 className="text-white font-medium text-sm leading-tight">
                      {service.title}
                    </h3>
                    <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-1 rounded-xl border border-purple-500/30">
                      <service.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

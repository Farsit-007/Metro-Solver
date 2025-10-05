import { Footer } from "@/components/modules/Home/Footer";
import Navbar from "@/components/modules/NavBar";
import TopNav from "@/components/modules/top-nav/topNav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <TopNav />
      <div className="-z-10">
        <Navbar />
      </div>

      <main className="min-h-[calc(100vh-200px)] ">
        {" "}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CommonLayout;

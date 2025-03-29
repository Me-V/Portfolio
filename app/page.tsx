import Email from "@/components/email";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Hero/>
      <Main/>
      <Email/>
    </div>
  );
}

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Hero/>
    </div>
  );
}

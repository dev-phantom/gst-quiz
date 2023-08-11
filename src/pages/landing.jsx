import LandingContent from "../components/landingContent/landingContent";
import TopNav from "../components/topNav/topNav";

export default function Landing() {
  return (
    <div className="bg-bgColor w-full h-screen">
        <header>
          <TopNav />  
        </header>
        <main>
            <LandingContent />
        </main>

    </div>
  )
}

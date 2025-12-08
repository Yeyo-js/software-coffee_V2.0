import { AboutUsMainTitle } from "../../atoms/aboutUs/aboutUsMainTitle"
import { AboutUsFloatingImage } from "../../atoms/aboutUs/aboutUsFloatingImage"
import { AboutUsInfoCard } from "../../molecules/aboutUs/aboutUsInfoCard"

function AboutUsHeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center pt-28 pb-20 px-4">
      
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        
        <AboutUsMainTitle text="Nuestra Pasión: El Café Perfecto" />

        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 md:gap-8 lg:gap-16">
          
          <AboutUsInfoCard 
            title="Misión"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />

          <AboutUsFloatingImage 
            src="/CUP-COFFEE.png" 
            alt="Granos de café y humo flotando"
          />

          <AboutUsInfoCard 
            title="Visión"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />

        </div>
      </div>
    </section>
  )
}

export { AboutUsHeroSection }
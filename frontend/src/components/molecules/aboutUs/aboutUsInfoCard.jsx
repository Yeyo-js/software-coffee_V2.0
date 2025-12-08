import { AboutUsCircleContainer } from "../../atoms/aboutUs/aboutUsCircleContainer"
import { AboutUsCircleText } from "../../atoms/aboutUs/aboutUsCircleText"
import { AboutUsParagraph } from "../../atoms/aboutUs/aboutUsParagraph"

function AboutUsInfoCard({ title, text }) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm md:w-1/3">
      
      <AboutUsCircleContainer>
        <AboutUsCircleText text={title} />
      </AboutUsCircleContainer>
      
      <AboutUsParagraph text={text} />
      
    </div>
  )
}

export { AboutUsInfoCard }
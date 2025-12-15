import { Link } from "../atoms/links"
import { Title } from "../atoms/titles"
import { Autores } from "../molecules/footer/footerAutores"
import { IframeMaps } from "../molecules/footer/iframeMaps"
import { Logo } from "../molecules/logo"
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#06141F] h-auto min-h-60 w-full flex flex-col overflow-hidden justify-center pb-3">
      <div className="flex flex-col lg:flex-row w-[92%] mx-auto items-center justify-between gap-8">
        <Logo variant="varFlex" />
        <IframeMaps/>
        <div className="w-full lg:w-auto">
          <Title
            text={'Contactos'}
            level="h4"
            align="center"
            variant="primary"
          />
          <div className="mt-4 flex flex-col items-start gap-4">
            <div className="flex gap-4">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook size={28} color="white"/>
              </Link>
              <Link 
                href="https://wa.me/51999999999" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={28} color="white"/>
              </Link>
              <Link
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} color="white"/>
              </Link>
            </div>
            <div className="text-white text-sm flex flex-col gap-2 items-start">
              <div

                className="flex items-center gap-2">
                <FaPhone size={16} />
                <span>+51 999 999 999</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope size={16} />
                <span>info@brouncoffee.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#A66A06] h-px outline-0 border-0 w-[92%] flex items-center mx-auto mt-8"/>
      <Autores/>
    </footer>
  )
}

export { Footer }
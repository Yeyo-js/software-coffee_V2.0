import { Link } from "../atoms/links"
import { Paragraph } from "../atoms/paragraph"
import { Title } from "../atoms/titles"
import { Logo } from "../molecules/logo"
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#06141F] h-auto min-h-60 w-full flex flex-col overflow-hidden justify-center pb-3">
      <div className="flex flex-col lg:flex-row w-[92%] mx-auto items-center justify-between gap-8">
        <Logo variant="varFlex" />
        
        <div className="flex-1 w-full lg:max-w-3xl">
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex-1 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.1542817!2d-78.14626!3d-6.86913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMDguOSJTIDc4wrAwOCc0Ni41Ilc!5e0!3m2!1ses!2spe!4v1733097600000!5m2!1ses!2spe"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Broun Coffee - Plaza de Armas, Celendín"
              />
            </div>

          </div>
        </div>
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
      
      <div className="w-[92%] flex flex-col sm:flex-row items-center sm:items-end justify-between mx-auto text-white mt-4 gap-2">
        <small>© 2025 Broun Coffee. Todos los derechos reservados.</small>
        <small>Autores: <span>Wynsley, Yerson & Luis</span></small>
      </div>
    </footer>
  )
}

export { Footer }
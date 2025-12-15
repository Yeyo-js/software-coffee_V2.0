import { Link } from "../atoms/links"
import { Title } from "../atoms/titles"

function Logo({variant = 'secondary', className= '' }) {
  return (

    
    <Link 
          href="/" 
          variant={variant}
          className={className}
        >
          <img 
            src="/LOGO.png" 
            alt="Logo de la empresa" 
            className="w-14 md:w-16 lg:w-20" 
          />
          <Title 
            text={'BROUN COFFEE'}
            level="h3"
            variant="secondary"
            weight="bold"
            align="center"
            />
        </Link>
    )
}

export { Logo }
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../atoms/buttons";

function LoginNavbar({setModalIsOpen, setCartShopOpen}) {

  const handlerSubmit = (e) =>{
    e.preventDefault()
    setModalIsOpen(true)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setCartShopOpen(true)
  }
  
  return (
    <div className="flex items-center gap-6 justify-center ">
      <Button 
        variant="primary"
        onClick={handleSubmit}
      >
        <FiShoppingCart  className="text-[#FFBB00] size-6"  />
      </Button>
      <Button
        text={'Iniciar Sesión'}
        variant="primary"
        onClick={handlerSubmit}
      />
    </div>
  )
}

export { LoginNavbar }
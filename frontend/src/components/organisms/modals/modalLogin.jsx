import { useState } from "react"
import { Button } from "../../atoms/buttons"
import { Title } from "../../atoms/titles"
import { Link } from "../../atoms/links"
import { FormItem } from "../../molecules/formItem"


function ModalLogin({ setModalIsOpen, setRegisterIsOpen }) {
  const [isClosing, setIsClosing] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  


  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setModalIsOpen(false) 
    }, 400)
  }

  const openModalRegister = (e) => {
    e.preventDefault()
    setIsClosing(true)
    setTimeout(() => {
    setModalIsOpen(false)   
    setRegisterIsOpen(true)    
  }, 400)
}

  // Cerrar modal al hacer clic fuera
  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Evitar cerrar al hacer clic en el modal
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  const formFields = [
    {
      text : 'Usuario',
      htmlFor :'user',
      type :'text',
      name : 'user',
      value : email,
      placeholder:'Tu Usuario',
      onChange:{}
    },
    {
      text : 'Contraseña',
      htmlFor :'passwd',
      type :'password',
      name : 'passwd',
      value : password,
      placeholder:'Tu contraseña',
      onChange:{}
    }
  ]
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-998 transition-opacity duration-400 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleBgClick}
      >
        <form 
          onClick={handleModalClick}
          className={`
            absolute top-20 right-6 w-80 
            bg-[#f6f6f6] rounded-lg shadow-2xl 
            flex flex-col gap-5 p-6 z-999
            transition-all duration-400
            ${isClosing ? 'opacity-0 translate-y-20px' : 'opacity-100 translate-y-0'}
          `}
        >
          <Title
            text='Inicia Sesión'
            level="h3"
            align="center"
            variant=""
            weight="bold"
            className="text-center font-bold text-3xl text-gray-800"/>
          <FormItem
            formFields={formFields}
            />
          <Button 
            type='submit'
            variant="default"
            text={'Enviar'}
          />
          <div className="
            mt-4 pt-4 border-t border-gray-200
            flex items-center justify-between 
            text-xs text-blue-600
          ">
            <Link
              text={'Olvidé mi Contraseña'}
              variant="default"
              href='#'
            />
            <Link
              text={'No tengo cuenta '}
              variant="default"
              onClick={openModalRegister}
              className="cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export { ModalLogin }
import { useState } from "react"
import { Title } from "../../atoms/titles"
import { Button } from "../../atoms/buttons"
import { FormItem } from "../../molecules/formItem"
import { ClientValidator } from "../../../validations/validationCredentials"

function ModalRegister({ setRegisterIsOpen }) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [error, setError] = useState('')
  const [closing, setIsClosing] = useState(false)

  const formFields = [
    {
      htmlFor: 'firstName',
      type: 'text',
      name: 'firstName',
      value: firstName,
      placeholder: 'Nombre',
      onChange: (e) => setFirstName(e.target.value)
    },
    {
      htmlFor: 'lastName',
      type: 'text',
      name: 'lastName',
      value: lastName,
      placeholder: 'Apellidos',
      onChange: (e) => setLastName(e.target.value)
    },
    {
      htmlFor: 'email',
      type: 'email',
      name: 'email',
      value: email,
      placeholder: 'tucorreo@gmail.com',
      onChange: (e) => setEmail(e.target.value)
    },
    [
      {
        htmlFor: 'phone',
        type: 'tel',
        name: 'phone',
        value: phone,
        placeholder: 'Teléfono',
        onChange: (e) => setPhone(e.target.value)
      },
      {
        htmlFor: 'birthdate',
        type: 'date',
        name: 'birthdate',
        value: birthdate,
        onChange: (e) => setBirthdate(e.target.value)
      },
    ],
    [
      {
        htmlFor: 'gender',
        type: 'select',
        name: 'gender',
        value: gender,
        onChange: (e) => setGender(e.target.value),
        options: [
          { text: 'Género', value: '' },
          { text: 'F', value: 'F' },
          { text: 'M', value: 'M' },
          { text: 'O', value: 'O' },
        ]
      },
      {
        htmlFor: 'address',
        type: 'text',
        name: 'address',
        value: address,
        placeholder: 'Dirección',
        onChange: (e) => setAddress(e.target.value)
      },
    ],
    {
      htmlFor: 'password',
      type: 'password',
      name: 'password',
      value: password,
      placeholder: 'Contraseña',
      onChange: (e) => setPassword(e.target.value)
    },
    {
      htmlFor: 'repassword',
      type: 'password',
      name: 'repassword',
      value: repassword,
      placeholder: 'Repetir contraseña',
      onChange: (e) => setRepassword(e.target.value)
    },
  ]

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => setRegisterIsOpen(false))
  }

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  const handleModalClick = (e) => e.stopPropagation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // 1. Validar datos
      console.log('Validando datos...')
      await ClientValidator.validateAsync({
        firstName,
        lastName,
        email,
        phone,
        birthdate,
        gender,
        address,
        password,
        repassword,
      })
      console.log('Validación exitosa')

      // 2. Hacer petición
      console.log('Enviando petición...')
      const request = await fetch(`http://localhost:3000/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          birthdate,
          gender,
          address,
          password,
          repassword,
        })
      })

      console.log('Status:', request.status)

      if (!request.ok) {
        // Intenta obtener más detalles del error
        const errorData = await request.json().catch(() => ({}))
        console.error('Error del servidor:', errorData)
        throw new Error(errorData.message || 'Error al registrar')
      }

      const response = await request.json()
      console.log('Respuesta:', response)
      alert(response.message)

    } catch (error) {
      console.error('Error completo:', error)
      setError(error.message)
    }
  }
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-998 transition-opacity ${closing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleBgClick}
    >
      <form
        className={`absolute top-20 right-6 w-100 bg-[#f6f6f6] rounded-lg shadow-2xl flex flex-col gap-1 py-4 px-5 z-999 transition-all duration-400 ${closing ? 'opacity-0 translate-y-20px' : 'opacity-100 translate-y-0'}`}
        onClick={handleModalClick}
        onSubmit={handleSubmit}
      >
        <Title level="h3" text="Registro" align="center" weight="bold" />

        {error && <span className="text-red-500 text-sm">{error}</span>}

        <FormItem inputVariant="secondary" formFields={formFields} />

        <Button text="Registrarse" type="submit" />
      </form>
    </div>
  )
}

export { ModalRegister }

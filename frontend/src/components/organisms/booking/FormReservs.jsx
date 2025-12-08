import { useState } from "react"
import { Title } from "../../atoms/titles"
import { FormItem } from "../../molecules/formItem"
import { Buttons } from "../../molecules/booking/buttonsForm";
import { Description } from "./descriptionForm";

function Form() {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Datos del formulario:', data);
    alert('Reserva enviada con éxito!');
  };

  const [data, setData] = useState({
    name: '',
    email: '',
    cellPhone: '',
    peoples: '',
    date: '',
    time: '',
    reason: '',
    specialRequirement: '',
    message: ''
  })

  const title = 'Reserva tu mesa y disfruta de una experiencia cómoda, sin espera. Nuestro equipo estará listo para recibirte.'
  
  const formFields = [
    {
      text: 'Nombre',
      htmlFor: 'name',
      name: 'name',
      value: data.name,
      type: 'text',
      onChange: handleChange
    },
    {
      text: 'Correo',
      htmlFor: 'email',
      name: 'email',
      value: data.email,
      type: 'email',
      onChange: handleChange
    },

    // CELULAR Y PERSONAS EN LA MISMA FILA
    [
      {
        text: 'Celular',
        htmlFor: 'cellPhone',
        name: 'cellPhone',
        value: data.cellPhone,
        type: 'tel',
        onChange: handleChange
      },
      {
        text: 'Nª Personas',
        htmlFor: 'peoples',
        name: 'peoples',
        value: data.peoples,
        type: 'number',
        onChange: handleChange
      }
    ],

    // FECHA Y HORA EN LA MISMA FILA
    [
      {
        text: 'Fecha de la Reserva',
        htmlFor: 'date',
        name: 'date',
        value: data.date,
        type: 'date',
        onChange: handleChange
      },
      {
        text: 'Hora de la reserva',
        htmlFor: 'time',
        name: 'time',
        value: data.time,
        type: 'time',
        onChange: handleChange
      }
    ],

    // MOTIVO Y REQUERIMIENTO ESPECIAL EN LA MISMA FILA
    [
      {
        text: 'Motivo',
        htmlFor: 'reason',
        name: 'reason',
        value: data.reason,
        type: 'select',
        onChange: handleChange,
        options: [
          { text: 'Seleccionar...', value: '' },
          { text: 'Cumpleaños', value: 'cumpleanos' },
          { text: 'Aniversario', value: 'aniversario' },
          { text: 'Negocio', value: 'negocio' },
          { text: 'Casual', value: 'casual' }
        ]
      },
      {
        text: 'Requerimiento Especial',
        htmlFor: 'specialRequirement',
        name: 'specialRequirement',
        value: data.specialRequirement,
        type: 'select',
        onChange: handleChange,
        options: [
          { text: 'Ninguno', value: '' },
          { text: 'Silla de bebé', value: 'silla-bebe' },
          { text: 'Accesibilidad', value: 'accesibilidad' },
          { text: 'Mesa especial', value: 'mesa-especial' }
        ]
      }
    ],

    {
      text: 'Mensaje',
      htmlFor: 'message',
      name: 'message',
      value: data.message,
      type: 'text',
      onChange: handleChange
    }
  ];

  return (
    <div className="flex flex-col gap-10 items-center mt-10 mb-10 z-[-1]">

      <Title
        level="h3"
        weight="bold"
        text={title}
        align="center"
      />

      <form className="relative flex flex-col gap-6 p-6 sm:p-10 bg-[#F7F7F7] w-[95%] sm:w-[85%] lg:w-[80%] mx-auto shadow shadow-black rounded">

        <Title
          level="h2"
          text={'Reserva ¡Aquí!'}
          align="center"
          weight="bold"
        />
        <img
          src="/IMG-RESERVS.png"
          alt="imagen de cafés"
          className="absolute w-25 sm:w-40 lg:w-60 top-2 right-2 animate-pulse"
        />
        <FormItem 
          inputVariant="secondary"
          formFields={formFields}
        />
        <Buttons handleSubmit={handleSubmit} />
        <Description/>
      </form>
    </div>
  )
}

export { Form }

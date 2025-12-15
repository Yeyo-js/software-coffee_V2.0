const { reservationsValidate } = require('../../models/validations/reservationValidations')
const { reserve } = require('../../repositories/reservation.repository')

const reserveController = async (req, res) => {
  const {
    clientName,
    email,
    phone,
    numberPeople,
    reservationDate,
    reservationTime,
    reason,
    specialRequeriment,
    message,
  } = req.body 

  try {
    // Validar los datos con Joi
    await reservationsValidate.validateAsync({
      clientName,
      email,
      phone,
      numberPeople,
      reservationDate,
      reservationTime,
      reason,
      specialRequeriment,
      message,
    })

    // Crear la reserva
    const newReservation = await reserve( 
      clientName,
      email,
      phone,
      numberPeople,
      reservationDate,
      reservationTime,
      reason,
      specialRequeriment,
      message
    )

    res.status(201).json({
      message: 'Reserva enviada con éxito',
      data: newReservation
    })
  } catch (error) {
    // Manejo de errores de validación de Joi
    if (error.isJoi) {
      return res.status(400).json({
        message: 'Error de validación',
        errors: error.details.map(detail => detail.message)
      })
    }

    // Otros errores (base de datos, etc.)
    console.error('Error al crear reserva:', error)
    res.status(500).json({
      message: 'Error al procesar la reserva',
      error: error.message
    })
  }
}

module.exports = { reserveController }
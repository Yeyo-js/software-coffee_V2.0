const { reservations } = require('../models')

const reserve = async (
  clientName,
  email,
  phone,
  numberPeople,
  reservationDate,
  reservationTime,
  reason,
  specialRequeriment,
  message
) => {
  const newReservation = await reservations.create({
    clientName,
    email,
    phone,
    numberPeople,
    reservationDate,
    reservationTime,
    reason,
    specialRequeriment,
    message,
    state: 'active'
  })

  return newReservation
}

//verificar si esta activo
const reservationIsActive = async (reservationId) =>{
  const reserva = await reservations.findOne({
    where: {idReservations : reservationId},
    attributes: ['state']
  })

  return !!reserva?.isActive
}
class ReservationRepository {
  async findAll() {
    return await reservations.findAll({ order: [['reservationDate', 'ASC']] });
  }

  async findByPk(id) {
    return await reservations.findByPk(id);
  }

  async create(reservationData) {
    return await reservations.create(reservationData);
  }

  async update(id, reservationData) {
    const [updatedRows] = await reservations.update(reservationData, {
      where: { id },
    });
    return updatedRows > 0;
  }

  async destroy(id) {
    return await reservations.destroy({ where: { id } });
  }
}

module.exports = {reserve, reservationIsActive, ReservationRepository};
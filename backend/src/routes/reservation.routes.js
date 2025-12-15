const { Router } = require('express')
const reservationController = require('../controllers/reservationController/reservation.controller');
const validateMiddleware = require('../middlewares/validate.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const { reserveController } = require('../controllers/reservationController/reservationPost');
const {
  updateReservationSchema,
  getReservationSchema,
} = require('../utils/schemas/reservation.schema');

const reserveRouter = Router()

// Public route to create a reservation
reserveRouter.post('/', reserveController)

// Protected routes for admin
reserveRouter.get('/', authMiddleware, reservationController.getAll);

reserveRouter.get(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getReservationSchema }),
  reservationController.getById
);

reserveRouter.patch(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getReservationSchema, body: updateReservationSchema }),
  reservationController.updateStatus
);

reserveRouter.delete(
  '/:id',
  authMiddleware,
  validateMiddleware({ params: getReservationSchema }),
  reservationController.deleteOne
);

module.exports = {reserveRouter};
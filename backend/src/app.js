const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

// Importar rutas
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middlewares Globales
app.use(express.json());
app.use(cors());

// Rutas
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.json({ message: 'API Broun Coffee funcionando' });
});

// Levantar servidor
app.listen(port, async () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente');
  } catch (error) {
    console.error('Error de conexión BD:', error);
  }
});
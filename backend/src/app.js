/* eslint-disable no-undef */
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const { sequelize } = require('./models');

// --- IMPORTACIÓN DE RUTAS ---
// Tus rutas modularizadas
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');

// Ruta de Auth de tus compañeros
// Asegúrate de que el archivo se llame 'authRuter.js' tal como lo importaron ellos
const { authRouter } = require('./routes/authRuter'); 

dotenv.config();

// Inicializamos Express como 'server'
const server = express(); 
const port = process.env.PORT || 3000;

// --- MIDDLEWARES GLOBALES ---
server.use(express.json());
server.use(express.urlencoded({ extended: true })); 
server.use(cookieParser());
server.use(cors()); 

// --- DEFINICIÓN DE RUTAS ---

// 1. Rutas de Autenticación
server.use('/', authRouter); 

// 2. Rutas de Negocio (Productos, Categorías)
server.use('/products', productRoutes);
server.use('/categories', categoryRoutes);

// 3. Ruta base de prueba
server.get('/api-status', (req, res) => {
  res.json({ message: 'API Broun Coffee funcionando' });
});

// --- LEVANTAR SERVIDOR ---
server.listen(port, async () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente');
    
    // await sequelize.sync({ force: false }); 
  } catch (error) {
    console.error('❌ Error de conexión BD:', error);
  }
});
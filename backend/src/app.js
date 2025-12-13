/* eslint-disable no-undef */
const dotenv = require('dotenv')
const express = require('express')
const cookieParser = require('cookie-parser')
const { sequelize } = require('./models')
const { globalMiddlewares } = require('./middlewares/globalMiddlewares')

// --- IMPORTACIÓN DE RUTAS ---

// 1. Rutas de Autenticación (De tus compañeros)
// Nota: Corregimos la ruta para que sea relativa a este archivo
const { authRouter } = require('./routes/authRuter')

// 2. Rutas de Negocio (Tuyas - Modularizadas)
const productRoutes = require('./routes/product.routes')
const categoryRoutes = require('./routes/category.routes')

dotenv.config()

// Inicializamos Express como 'server' para mantener el estándar del equipo
const server = express()
const port = process.env.PORT || 3000

// --- MIDDLEWARES GLOBALES ---
globalMiddlewares({server: server})

// --- DEFINICIÓN DE RUTAS ---

// A. Autenticación (Login, Register, AboutMe)
server.use('/', authRouter)

// B. Negocio (Productos y Categorías)
server.use('/products', productRoutes)
server.use('/categories', categoryRoutes)

// C. Ruta de prueba (Health Check)
server.get('/api-status', (req, res) => {
  res.json({ message: 'API Broun Coffee funcionando ☕' })
})

// --- LEVANTAR SERVIDOR ---
server.listen(port, async () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${port}`)
  
  try {
    // Verificamos conexión a la Base de Datos
    await sequelize.authenticate()
    console.log('✅ Base de datos conectada correctamente')
    
    // Opcional: Sincronizar tablas si es necesario (cuidado con force:true)
    // await sequelize.sync({ force: false }) 
  } catch (error) {
    console.error('❌ Error de conexión BD:', error)
  }
})
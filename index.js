const express =require ('express')
const app = express()
const path= require('path')

//settings
app.set('port' , 3000)

//middleware
app.use(express.static(path.join(__dirname, 'public')))

//rutas 
app.get('/' , (req , res)=> {
res.send('Bienvenidos')
})

app.listen(app.get('port'), () => {
console.log(`Aplicación corriendo en el puerto ${app.get('port')} `)
})


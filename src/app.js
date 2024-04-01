const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion adnostica autoconvocada
//adnostica por que no tiene nombre
// Autoconvacada por que la ejecutamos con los parantesis

( async() => {
    main()
})()


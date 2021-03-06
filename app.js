const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
// Se puede hacer de la siguiente manera el llmaado de argv
// const argv = require('./config/yargs').argv;

let comando = argv._[0];
let base = argv.base;

switch (comando) {
    case 'listar':
            listarTabla(argv.base, argv.limite)
                .then(resp => console.log(resp))
                .catch( err => console.log(err));
        break;
    case 'crear':
            crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado ${archivo}`))
            .catch( err => console.log(err) );
        break;
    default:
        console.log('Comando desconocido');
        break;
}




// let argv2 = process.argv;

// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv);


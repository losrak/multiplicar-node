const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
        .command('listar', 'Imprime en consola la tabla de multiplicar', { options })
        .command('crear', 'Crea un archivo donde se contiene la tabla de multiplicar de la base por el limite', { options })
        .help()
        .argv;

module.exports = {
    argv
};
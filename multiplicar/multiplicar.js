// requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    
    return new Promise( (resolve, reject) => {
        if( !(Number(base) && Number(limite)) ){
            reject(`${base} o ${limite} no es número`);
            return;
        }else{
            resolve('Multiplicación exitosa');
            console.log('/****** Tabla ******/'.green);
            for (let index = 1; index <= limite; index++) {
                console.log(`${index} * ${base} = ${index*base}`.rainbow);
                
            }
            console.log('/****** Fin Tabla ******/'.green);
        }
    });

}

let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {
        
        if(!Number(base)){
            reject('base NO es un número');
            return;
        }

        if(!Number(limite)){
            reject('Limite NO es un número');
            return;
        }
        
        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += (`${index} * ${base} = ${index*base} \n`);
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject( err );
            else
                resolve(`tabla-${base}.txt`);
            
        });
        
        

    });
}

module.exports = {
    crearArchivo,
    listarTabla
};
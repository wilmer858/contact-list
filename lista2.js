const listaContacto = 
[
    {
        Id: 985053,
        Nombres:"Jose Alonzo",
        Apellidos:"Padilla Santos",
        Telefono:50433451212,
        Ubicaciones:{
            Ciudad:"San Pedro Sula",
            Direccion:"Barrio Paz Barahona, calle principal",
        }
    },
    {
        Id: 896120,
        Nombres:"Maria Sarahi",
        Apellidos:"Soler Smith",
        Telefono:50499911788,
        Ubicaciones:{
            Ciudad:"San Pedro Sula",
            Direccion:"Barrio el centro frente a la comisaria",
        }
    
    }
]

const contacto = 
{
    Id:785190,
    Nombres:"Gustavo Rene",
    Apellidos:"Ventura Solis",
    Telefono:50433230123,
    Ubicaciones:{
        Ciudad:"Copan",
        Direccion:"Barrio las flores, frente a restuarante mi Pizza",
    }
}

//Agregar un contacto nuevo a la lista
const agregarContactos = (nuevoContacto) => {
        return listaContacto.splice(2,0,nuevoContacto);
}

// Borrar un contacto de la lista
const borrarContacto = (Nombres,contactos) => {
    const indice = contactos.findIndex(index => index.Nombres === Nombres);
        if(indice !== -1){
            return contactos.splice(indice,1);
  } 
}

 //Imprimir lista de contactos actual
 
 const mostrarLista = () => {
    console.log("******************************************")
    for(const Mostrar of listaContacto){
        console.log();
        console.log(`Id: ${Mostrar.Id}`);
        console.log(`Nombres: ${Mostrar.Nombres}`);
        console.log(`Apellidos: ${Mostrar.Apellidos}`);
        console.log(`Telefono: ${Mostrar.Telefono}`);
        console.log(`Ubicaciones`);
        console.log(`    Ciudad: ${Mostrar.Ubicaciones.Ciudad} `);
        console.log(`    Direccion: ${Mostrar.Ubicaciones.Direccion} `);
         console.log("---------------");
    }
}

mostrarLista();
agregarContactos(contacto);
mostrarLista();
borrarContacto("Maria Sarahi",listaContacto);
mostrarLista();



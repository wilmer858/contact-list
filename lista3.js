const listaContacto = [
  {
    Id: 1,
    Nombres: "Jose Alonzo",
    Apellidos: "Padilla Santos",
    Telefono: 50433451212,
    Ubicaciones: {
      Ciudad: "San Pedro Sula",
      Direccion: "Barrio Paz Barahona, calle principal",
    },
  },
  {
    Id: 2,
    Nombres: "Maria Sarahi",
    Apellidos: "Soler Smith",
    Telefono: 50499911788,
    Ubicaciones: {
      Ciudad: "San Pedro Sula",
      Direccion: "Barrio el centro frente a la comisaria",
    },
  },
];

//Agregar un contacto nuevo a la lista
const agregarContactos = (nuevoContacto) => {
  return listaContacto.splice(2, 0, nuevoContacto);
};
const contacto = {
  Id: 3,
  Nombres: "Gustavo Rene",
  Apellidos: "Ventura Solis",
  Telefono: 50433230123,
  Ubicaciones: {
    Ciudad: "Copan",
    Direccion: "Barrio las flores, frente a restuarante mi Pizza",
  },
};

// Borrar un contacto de la lista
const borrarContacto = (Id, contactos) => {
  const indice = contactos.findIndex((index) => index.Id === Id);
  if (indice !== -1) {
    return contactos.splice(indice, 1);
  }
};
const idContactoBorrar = 1;

// Actualizar un contacto de la lista
function actualizarContacto(Id, nuevosDatos, lista) {
  const contactoExistente = lista.find((contacto) => contacto.Id === Id);
  if (contactoExistente) {
    Object.assign(contactoExistente, nuevosDatos);
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

const idContactoActualizar = 3;
const nuevosDatosDelContacto = {
  Nombres: "Carlos",
  Apellidos: "García",
  Telefono: 50439451319,
  Ubicaciones: {
    Ciudad: "Ciudad Tegucigalpa",
    Direccion: "Colonia Fracisco Morazan",
  },
};

//Imprimir lista de contactos actual
const mostrarLista = () => {
  console.log("********Lista de contactos********");
  for (const Mostrar of listaContacto) {
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
};

mostrarLista();
agregarContactos(contacto);
mostrarLista();
borrarContacto(idContactoBorrar, listaContacto);
mostrarLista();
actualizarContacto(idContactoActualizar, nuevosDatosDelContacto, listaContacto);
mostrarLista();


const contactos = ['Maria Soler', 'Jose Padilla', 'Pedro Smith', 'Ana Santos'];

//Agregar un contacto nuevo a la lista
const agregarContactos = (nuevoContacto) => {
        contactos.unshift(nuevoContacto) 
        
}

// Borrar un contacto de la lista
const borrarContacto = (contactoBorrar) => {
    const indice = contactos.indexOf(contactoBorrar);
  if(indice !== -1){
      return contactos.splice(indice,1);
  } 
}

 // Mostrar lista de contactos actual
 
 const mostrarLista = () => {
    console.log("************")
    contactos.forEach((element) => console.log(element))
    }

mostrarLista();
agregarContactos('Carlos Murillo');
mostrarLista();
borrarContacto('Pedro Smith');
mostrarLista();



















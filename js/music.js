// Primero una clase tipo molde con las cosas de las guitarras
class Item {
    constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
  


  // Items del juego
  const gibson = new Item("Gibson Les paul Custom", 100, "gibson.jpg");
  const fender = new Item("Fender Stratocaster Vintage ", 180, "fender2.png");
  const prs = new Item("PRS Custom 24", 90, "prs.jpg");
  
  // Array para el inventario donde vamos a ir metiendo los items que compremos
  const sala_estudio = [];
  
  // Oro del juego
  let oro = 500;
  
  // Elementos del DOM
  const elOro = document.querySelector("#oro span");
  elOro.innerText = oro; // Para que muestre el oro apenas carga la aplicación}
  const elInventario = document.getElementById("sala-estudio");
  
  // Función para agregar items a nuestro inventario
  function comprar(itemDelJuego) {

    // Verificamos si tenemos el dinero disponible para la compra
    if (oro - itemDelJuego.precio >= 0) {
        sala_estudio.push(itemDelJuego);
      oro -= itemDelJuego.precio; // Actualizamos el oro
      actualizarHTML();
    } else {
      alert(`Upss!... parece que no tienes el dinero suficiente para comprar ${itemDelJuego.nombre}.`);
    }
  }
  
  // Función para vender una guitarra
  function vender(nombreDelItem) {
    // Buscamos la guitarra con find
    const itemEncontrado = sala_estudio.find((item) => item.nombre == nombreDelItem);
  
    // Si está en sala_estudio, sale y actualo el HTML
    if (itemEncontrado) {
      // Actualizamos el oro
      oro += itemEncontrado.precio;
      // Lo volamos del inventario
      const indice = sala_estudio.indexOf(itemEncontrado);
      sala_estudio.splice(indice, 1);
      // Actualizamos el HTML
      actualizarHTML();
    }
  }
  
  // Función para actualizar el HTML de la aplicación (oro e items)
  function actualizarHTML() {
    elInventario.innerHTML = "";
    for (const itemDelJuego of sala_estudio) {
      const li = `
      <li onclick="vender('${itemDelJuego.nombre}')">
        <img src="./assets/images/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}" />
      </li>
      `;
   
      elInventario.innerHTML += li;
    }
  
    elOro.innerText = oro;
  }


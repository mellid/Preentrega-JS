//STOCK DE PRODUCTOS
const Stock = [
  {
    producto: "Jamon Cocido",
    marca: "4 Condes",
    precio_unidad: 2500,
    precio_por_caja: 2450,
    cantidad: 500,
  },
  {
    producto: "Jamon Crudo",
    marca: "42 los calvos",
    precio_unidad: 3250,
    precio_por_caja: 3300,
    cantidad: 666,
  },
  {
    producto: "Mortadela",
    marca: "Calchaqui",
    precio_unidad: 1050,
    precio_por_caja: 950,
    cantidad: 40,
  },
  {
    producto: "Queso sardo",
    marca: "Estancia de Oro",
    precio_unidad: 800,
    precio_por_caja: 750,
    cantidad: 120,
  },
  {
    producto: "Roqueford",
    marca: "La Quesera",
    precio_unidad: 2190,
    precio_por_caja: 2150,
    cantidad: 200,
  },
  {
    producto: "Queso Cremoso",
    marca: "Vacalin",
    precio_unidad: 2000,
    precio_por_caja: 1950,
    cantidad: 500,
  },
  {
    producto: "Queso de maquina",
    marca: "Barraza",
    precio_unidad: 4250,
    precio_por_caja: 4150,
    cantidad: 600,
  },
  {
    producto: "Queso pategras",
    marca: "La paulina",
    precio_unidad: 2250,
    precio_por_caja: 2200,
    cantidad: 900,
  },
  {
    producto: "Salchichas x 24u",
    marca: "Don Pepe",
    precio_unidad: 250,
    precio_por_caja: 240,
    cantidad: 100,
  },
  {
    producto: "Queso rallado",
    marca: "La quesera",
    precio_unidad: 500,
    precio_por_caja: 445,
    cantidad: 900,
  },
  {
    producto: "Manteca 100g",
    marca: "punta del agua",
    precio_unidad: 3500,
    precio_por_caja: 3450,
    cantidad: 90,
  },
];
let pedidos = [];

// Mostramos diferentes opciones de los productos y su disponibilidad
let opcion;
while (opcion !== "Salir") {
  opcion = prompt(
    "Escriba Stock para ver los productos \n Escriba comprar si desea hacer una compra \n Escriba Ver para visualizar su carrito de compras \n Escriba Salir si deseas salir para cerrar"
  );
  if (opcion === "Stock") {
    mostrarListado();
  } else if (opcion === "comprar") {
    solicitarDatos();
  } else if (opcion === "Ver") {
    mostrarCarrito();
  }
}

/**
 * Muestra la lista de productos disponibles en stock
 */
function mostrarListado() {
  for (let i = 0; i < Stock.length; i++) {
    alert(
      `${Stock[i].producto} \n Precio Por Unidad : ${Stock[i].precio_unidad} \n Precio Por Caja : ${Stock[i].precio_por_caja} \n Cantidad Disponible : ${Stock[i].cantidad}`
    );
  }
}

/**
 * Solicita datos al usuario para realizar una compra
 */
// Solicitud de datos
function solicitarDatos() {
  let producto = prompt("Ingrese el nombre del producto buscado");
  let productoEncontrado = Stock.find(
    (item) => item.producto.toLowerCase() === producto.toLowerCase()
  );
  let costoTotal = 0;
  if (productoEncontrado) {
    let tipo = prompt("Quiere Caja o Unidad");
    let cantidad = prompt("Ingrese la cantidad");
    switch (tipo) {
      case "unidad":
        if (cantidad <= productoEncontrado.cantidad) {
          costoTotal = cantidad * productoEncontrado.precio_unidad;
        } else {
          alert("No contamos con el stock suficiente");
          return;
        }
        break;
      case "caja":
        if (cantidad <= productoEncontrado.cantidad) {
          costoTotal = cantidad * productoEncontrado.precio_por_caja;
        } else {
          alert("No contamos con el stock suficiente");
          return;
        }
        break;
      default:
        alert("Opción inválida");
        return;
    }
    let pedido = {
      producto: productoEncontrado.producto,
      cantidad: cantidad,
      tipo: tipo,
      precioTotal: costoTotal,
    };
    pedidos.push(pedido);
    actualizarLista(productoEncontrado, cantidad);

    // Muestra un mensaje de agradecimiento al usuario aun no pude corregirlo pero
    alert("Gracias por su compra!");
  } else {
    alert("No tenemos ese producto");
  }
}

/**
 * Muestra el carrito de la lista de pedidos
 */
function mostrarCarrito() {
  if (pedidos.length === 0) {
    alert("Aún no has comprado nada");
  } else {
    for (let i = 0; i < pedidos.length; i++) {
      alert(
        `Tienes el pedido de: \n ${pedidos[i].producto} - Cantidad: ${pedidos[i].cantidad} - Total: ${pedidos[i].precioTotal}`
      );
    }
  }
}

/**
 * Actualiza las cantidades en stock según corresponda
 */
function actualizarLista(productoEncontrado, cantidad) {
  for (let i = 0; i < Stock.length; i++) {
    if (Stock[i].producto === productoEncontrado.producto) {
      Stock[i].cantidad -= cantidad;
    }
  }
}

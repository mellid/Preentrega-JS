// STOCK DE PRODUCTOS
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
while (opcion !== "4") {
  opcion = prompt(
    "Elija una opción:\n 1. Ver Stock\n 2. Comprar\n 3. Ver Carrito\n 4. Salir\n 5. Ver Oferta de la Semana"
  );

  mostrarOfertaSemana(); // Llamada a la función que muestra la oferta de la semana

  if (opcion === "1") {
    mostrarStock(); // Llamada a la función que muestra el stock
  } else if (opcion === "2") {
    solicitarCompra(); // Llamada a la función que solicita la compra
  } else if (opcion === "3") {
    mostrarCarrito(); // Llamada a la función que muestra el carrito de compras
  }
}

/**
 * Muestra el stock actual de productos disponibles
 */
function mostrarStock() {
  for (let i = 0; i < Stock.length; i++) {
    alert(
      `${Stock[i].producto}\nPrecio Por Unidad: ${Stock[i].precio_unidad}\nPrecio Por Caja: ${Stock[i].precio_por_caja}\nCantidad Disponible: ${Stock[i].cantidad}`
    );
  }
}

/**
 * Solicita los datos al usuario para realizar una compra
 */
function solicitarCompra() {
  let producto = prompt("Ingrese el nombre del producto que desea comprar:");
  let cantidad = parseInt(prompt("Ingrese la cantidad deseada:"));

  let productoEncontrado = Stock.find(
    (item) => item.producto.toLowerCase() === producto.toLowerCase()
  ); // Búsqueda del producto en el array Stock

  if (productoEncontrado) {
    if (productoEncontrado.cantidad >= cantidad) {
      let subtotal;
      if (cantidad >= 10) {
        subtotal = productoEncontrado.precio_por_caja * cantidad;
      } else {
        subtotal = productoEncontrado.precio_unidad * cantidad;
      }
      let pedido = {
        producto: productoEncontrado.producto,
        cantidad: cantidad,
        subtotal: subtotal,
      };
      pedidos.push(pedido); // Agregar pedido al array pedidos
      productoEncontrado.cantidad -= cantidad; // Actualizar la cantidad disponible del producto
      alert("¡Compra realizada con éxito!");
    } else {
      alert("No hay suficiente stock disponible");
    }
  } else {
    alert("El producto ingresado no existe en el stock");
  }
}

/**
 * Muestra el contenido del carrito de compras
 */
function mostrarCarrito() {
  if (pedidos.length === 0) {
    alert("El carrito de compras está vacío");
  } else {
    let carritoString = pedidos
      .map(
        (pedido) =>
          `Producto: ${pedido.producto}\nCantidad: ${pedido.cantidad}\nSubtotal: ${pedido.subtotal}`
      )
      .join("\n\n");
    alert("Carrito de Compras:\n\n" + carritoString);
  }
}

/**
 * Muestra la oferta de la semana (producto con el precio más bajo)
 */
function mostrarOfertaSemana() {
  if (opcion === "5") {
    const productoMasBarato = Stock.reduce((min, current) => {
      return current.precio_unidad < min.precio_unidad ? current : min;
    });

    alert(
      `¡Oferta de la Semana!\nProducto: ${productoMasBarato.producto}\nPrecio: ${productoMasBarato.precio_unidad}`
    );
  }
}

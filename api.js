const API_URL = "https://fakestoreapi.com/products";

function obtener_productos() {
  fetch(API_URL)
    .then((responde) => responde.json())
    .then((data) => {
      console.log("Lista de productos:", data);
    })
    .catch((error) => {
      console.error("Error...:", error);
    });
}

function crear_productos() {
  const nuevo_proyecto = {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    category: "men's clothing",
  };
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo_proyecto),
  })
    .then((Response) => response.json())
    .then((data) => {
      console.log("creado:", data);
    })
    .catch((error) => {
      console.error("error_producto", error);
    });
}

function actualizarProducto(id) {
  const productoActualizado = {
    title: "Laptop Gamer Pro",
    price: 1800,
  };
  fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productoActualizado),
  })
    .then((Response) => Response.json())
    .then((data) => {
      console.log("proyecto_actualizado", data);
    })
    .catch((error) => {
      console.error("error...:", error);
    });
}

function eliminarProducto() {
  const id = document.getElementById("idProductoEliminar").value.trim(); // Obtiene el valor del input y elimina espacios extra

  if (!id || isNaN(id)) {
    // Verifica si el ID es válido
    console.error("Error: ID del producto no es válido.", id);
    return;
  }

  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Producto eliminado:", data);
      if (typeof obtenerProductos === "function") {
        obtenerProductos();
      } else {
        console.warn("Advertencia: obtenerProductos no está definida.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

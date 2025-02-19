const API_URL = "https://fakestoreapi.com/products"

function obtener_productos() {
  fetch(API_URL)
    .then((responde) => responde.json())
    .then((data) => {
      const tablaProductos = document.getElementById("tablaProductos")
      tablaProductos.innerHTML = ""

      data.forEach((producto) => {
        const fila = document.createElement("tr")
        fila.innerHTML = `
          <td>${producto.id}</td>
          <td>${producto.title}</td>
          <td>$${producto.price.toFixed(2)}</td>
          <td>${producto.category}</td>
          <td><img src="${producto.image}" width="50"></td>
        `;
        tablaProductos.appendChild(fila)
      });
    })
    // console.log("Lista de productos:", data);
    .catch((error) => {
      console.error("Error...:", error);
    });
}

function crear_productos() {
  const nuevo_producto = {
    title: "Laptop HP game pro",
    price: 523.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "",
    category: "Electronic pp",
  };

  fetch("https://fakestoreapi.com/products", {
    // Ruta correcta
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevo_producto),
  })
    .then((response) => response.json())
    .then((producto) => {
      const tablaProductos = document.getElementById("tablaProductos");

      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.title}</td>
        <td>$${producto.price.toFixed(2)}</td>
        <td>${producto.category}</td>
        <td><img src="${producto.image}" width="50"></td>
      `;
      tablaProductos.appendChild(fila);

      //console.log("Producto creado:", producto);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function actualizarProducto() {
  const id = document.getElementById("idProductoActualizar").value.trim();

  if (!id || isNaN(id)) {
    console.error("Error: ID del producto no es válido.", id);
    return;
  }

  const productoActualizado = {
    title: "Laptop Gamer Pro",
    price: 1800,
  };

  fetch(`https://fakestoreapi.com/products/${id}`, {
    // Asegúrate de que la URL es correcta
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productoActualizado),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Producto actualizado:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function eliminarProducto() {
  const id = document.getElementById("idProductoEliminar").value.trim();

  if (!id || isNaN(id)) {
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
      if (typeof obtener_productos === "function") {
        obtener_productos();
      } else {
        console.warn("Advertencia: obtenerProductos no está definida.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
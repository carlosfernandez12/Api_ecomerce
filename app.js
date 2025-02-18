const API_URL = "https://fakestoreapi.com/products";

// 🔹 1️⃣ OBTENER TODOS LOS PRODUCTOS (GET)
async function obtenerProductos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("📦 Lista de productos:", data);
  } catch (error) {
    console.error("❌ Error al obtener los productos:", error);
  }
}
obtenerProductos(); // Obtener lista de productos

// 🔹 2️⃣ CREAR UN NUEVO PRODUCTO (POST)
async function crearProducto() {
  try {
    const nuevoProducto = {
      title: "Laptop Gamer",
      price: 1500,
      description: "Laptop para gaming con RTX 4070",
      image: "https://via.placeholder.com/150",
      category: "electronics",
    };

    const response = await fetch(API_URL, {
      method: "POST", // Método HTTP POST para enviar datos
      headers: {
        "Content-Type": "application/json", // Indicamos que enviamos JSON
      },
      body: JSON.stringify(nuevoProducto), // Convertimos el objeto a JSON
    });

    const data = await response.json();
    console.log("✅ Producto creado:", data);
  } catch (error) {
    console.error("❌ Error al crear el producto:", error);
  }
}
crearProducto();
// 🔹 3️⃣ EDITAR UN PRODUCTO EXISTENTE (PATCH)
async function actualizarProducto(id) {
  try {
    const productoActualizado = {
      title: "Laptop Gamer Pro",
      price: 1800,
    };

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH", // Método PATCH para actualizar solo algunos campos
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoActualizado),
    });

    const data = await response.json();
    console.log("🔄 Producto actualizado:", data);
  } catch (error) {
    console.error("❌ Error al actualizar el producto:", error);
  }
}
actualizarProducto(21);

// 🔹 4️⃣ ELIMINAR UN PRODUCTO (DELETE)
async function eliminarProducto(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE", // Método DELETE para eliminar
    });

    const data = await response.json();
    console.log("🗑️ Producto eliminado:", data);
  } catch (error) {
    console.error("❌ Error al eliminar el producto:", error);
  }
}

eliminarProducto();

/* const API_URL = "https://fakestoreapi.com/products";

// 🔹 1️⃣ OBTENER TODOS LOS PRODUCTOS (GET)
async function obtenerProductos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Limpiar la tabla
    const tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";

    // Insertar productos en la tabla
    data.forEach((producto) => {
      let fila = `
                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.title}</td>
                    <td>$${producto.price}</td>
                    <td>${producto.category}</td>
                </tr>`;
      tabla.innerHTML += fila;
    });

    console.log("📦 Productos obtenidos:", data);
  } catch (error) {
    console.error("❌ Error al obtener los productos:", error);
  }
}

// 🔹 2️⃣ CREAR UN NUEVO PRODUCTO (POST)
async function crearProducto() {
  try {
    const nuevoProducto = {
      title: "Teclado Mecánico",
      price: 99,
      description: "Teclado mecánico RGB con switches azules",
      image: "https://via.placeholder.com/150",
      category: "electronics",
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProducto),
    });

    const data = await response.json();
    console.log("✅ Producto creado:", data);
    obtenerProductos(); // Refrescar la lista
  } catch (error) {
    console.error("❌ Error al crear el producto:", error);
  }
}

// 🔹 3️⃣ ACTUALIZAR UN PRODUCTO EXISTENTE (PATCH)
async function actualizarProducto() {
  const id = document.getElementById("idProductoActualizar").value;
  if (!id) return alert("⚠️ Ingresa un ID para actualizar");

  try {
    const productoActualizado = {
      title: "Teclado Gamer PRO",
      price: 129,
    };

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoActualizado),
    });

    const data = await response.json();
    console.log("🔄 Producto actualizado:", data);
    obtenerProductos(); // Refrescar la lista
  } catch (error) {
    console.error("❌ Error al actualizar el producto:", error);
  }
}

// 🔹 4️⃣ ELIMINAR UN PRODUCTO (DELETE)
async function eliminarProducto() {
  const id = document.getElementById("idProductoEliminar").value;
  if (!id) return alert("⚠️ Ingresa un ID para eliminar");

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log("🗑️ Producto eliminado:", data);
    obtenerProductos(); // Refrescar la lista
  } catch (error) {
    console.error("❌ Error al eliminar el producto:", error);
  }
} */

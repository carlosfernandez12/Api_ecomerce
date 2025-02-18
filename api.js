const API_URL = "https://fakestoreapi.com/products"

function obtener_productos() {
    fetch(API_URL)
    .then((responde) => responde.json())
    .then((data => {
        console.log("Lista de productos:", data)
    }))
    .catch(error => {
        console.error("Error...:", error)
    })

}
obtener_productos()

function crear_productos() {
    const nuevo_proyecto = {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        category: "men's clothing"
    }
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevo_proyecto),
    })
    .then((Response) => responde.json())
    .then((data =>{
        console.log("creado:", data)
    }))
    .catch((error)=> {
        console.error("error_producto", error)
    })
}
crear_productos()
function actualizarProducto(id){
    const productoActualizado = {
        title: "Laptop Gamer Pro",
        price: 1800,
    }
    fetch(`${API_URL}/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "applcation/json",
        },
        body: JSON.stringify(productoActualizado),
    })
    .then((Response)=> Response.json())
    .then((data)=>{
        console.log("proyecto_actualizado", data)
    })
    .catch((error)=> {
        console.error("error...:", error)
    })
}

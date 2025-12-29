// Guardar cliente
const clienteForm = document.getElementById("clienteForm");
if(clienteForm){
    clienteForm.addEventListener("submit",e=>{
        e.preventDefault();
        
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

        clientes.push({
            nombre: document.getElementById("nombre").value,
            producto: document.getElementById("producto").value,
            cantidad: document.getElementById("cantidad").value
        });

        localStorage.setItem("clientes",JSON.stringify(clientes));
        alert("Cliente guardado");
        clienteForm.reset();
    });
}

// Cargar tabla de clientes
const tabla = document.getElementById("tablaClientes");
if(tabla){
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.forEach(c=>{
        tabla.innerHTML+=`
        <tr>
            <td>${c.nombre}</td>
            <td>${c.producto}</td>
            <td>${c.cantidad}</td>
        </tr>`;
    });
}

// Guardar cliente
const form = document.getElementById("clienteForm");
if(form){
    form.addEventListener("submit", e=>{
        e.preventDefault();

        let lista = JSON.parse(localStorage.getItem("clientes")) || [];

        lista.push({
            nombre: nombre.value,
            producto: producto.value,
            cantidad: cantidad.value,
            costo: costo.value,
            precio: precio.value,
            total: cantidad.value * precio.value,
            fecha: fecha.value
        });

        localStorage.setItem("clientes", JSON.stringify(lista));
        alert("Cliente guardado correctamente");
        form.reset();
    });
}

// Mostrar clientes
const tabla = document.getElementById("tablaClientes");
if(tabla){
    let lista = JSON.parse(localStorage.getItem("clientes")) || [];
    lista.forEach(c=>{
        tabla.innerHTML += `
        <tr>
            <td>${c.nombre}</td>
            <td>${c.producto}</td>
            <td>${c.cantidad}</td>
            <td>${c.costo}</td>
            <td>${c.precio}</td>
            <td>${c.total}</td>
            <td>${c.fecha}</td>
        </tr>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const fallaForm = document.getElementById('fallaForm');
    const fallasTable = document.getElementById('fallasTable').getElementsByTagName('tbody')[0];

    // Cargar las fallas existentes desde localStorage
    loadFallas();

    fallaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const unidad = document.getElementById('unidad').value;
        const descripcion = document.getElementById('descripcion').value;
        const fecha = document.getElementById('fecha').value;

        const nuevaFalla = { unidad, descripcion, fecha };
        saveFalla(nuevaFalla);
        addFallaToTable(nuevaFalla);

        // Limpiar el formulario
        fallaForm.reset();
    });

    function loadFallas() {
        const fallas = JSON.parse(localStorage.getItem('fallas')) || [];
        fallas.forEach(falla => addFallaToTable(falla));
    }

    function saveFalla(falla) {
        const fallas = JSON.parse(localStorage.getItem('fallas')) || [];
        fallas.push(falla);
        localStorage.setItem('fallas', JSON.stringify(fallas));
    }

    function addFallaToTable(falla) {
        const row = fallasTable.insertRow();
        row.insertCell(0).textContent = fallasTable.rows.length;
        row.insertCell(1).textContent = falla.unidad;
        row.insertCell(2).textContent = falla.descripcion;
        row.insertCell(3).textContent = falla.fecha;
    }
});
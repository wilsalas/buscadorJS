//Cargar información del json de canciones
getDataSongs = (all = true) => {
    fetch('js/datos.json')
        .then(res => res.json())
        .then(data => {
            let arrayCanciones = all ?
                data.canciones :
                data.canciones.filter(item => new RegExp(input.value, 'i').test(item.nombre));

            let listData = [];
            arrayCanciones.forEach(item => {
                listData +=
                    `<div class='col-md-4 col-sm-4 col-xs-12 mb-3'>
                        <div class='card'>
                            <ul class='list-group list-group-flush text-center'>
                                <li class='list-group-item'>
                                    <img src='./imagenes/icon_${item.icono}.svg' alt='canciones'>
                                </li>
                                <li class='list-group-item'>
                                    <h5 class='mb-2'><b>${item.nombre}</b></h5>
                                    <audio controls>
                                        <source src='./canciones/${item.ruta}' type='audio/mp3'>
                                            Su navegador no soporta el elemento de audio. 
                                        </source> 
                                    </audio>
                                </li>
                            </ul>
                        </div>
                    </div>`;
            });
            document.getElementById("contenido").innerHTML = listData;
        });
}

//Cargar todas las canciones al iniciar la página
getDataSongs();

//Realizar la busqueda tomando como referencia lo que se escribe en el input
let input = document.getElementById("buscador");
input.addEventListener("keyup", () => getDataSongs(false));



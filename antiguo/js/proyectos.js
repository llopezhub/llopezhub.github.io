            const proyectos = [

            {
            titulo:"Advent of code",
            descripcion:"Proyecto formativo en conjunto. Desarrollamos una plataforma educativa con desafíos diarios de programación y aprendizaje web. Inspirada en el evento de programación <<Advent of Code>>. Tuvimos un portal web con gestión de usuarios y resultados teniendo en cuenta la protección de datos  mediante conexiones seguras, cifrado de contraseñas, validaciones en el backend y prevención de inyecciones SQL.",
            tecnologias:"Tecnologías: AWS, apache, MySQL, PHP, HTML, CSS, JavaScript",
            imagen:"assets/img/proyectos/cwc.png"
            },

            {
            titulo:"Clockwork motors",
            descripcion:"Proyecto formativo en conjunto. Desarrollamos la plataforma de un concesionario que automatizaba la asignación de los pedidos según la ubicación del mismo. Mejorando la eficiencia de la compañía y la experiencia del cliente ",
            tecnologias:"Tecnologías: Diseño de redes con VLAN y planificación VLSM, MySQL, LAMP",
            imagen:"assets/img/proyectos/cwm.png"
            },

            {
            titulo:"Quantum Systems",
            descripcion:"Proyecto formativo en conjunto. Desarrollamos una infraestructura tecnológica de una PYME..",
            tecnologias:"Tecnologías: VLAN + STP + WPA2-PSK, MySQL",
            imagen:"assets/img/proyectos/qs.png"
            }

            ];

            const contenedor = document.getElementById("proyectos");
            const modal = document.getElementById("modal");

            const modalTitulo = document.getElementById("modal-titulo");
            const modalDescripcion = document.getElementById("modal-descripcion");
            const modalTecnologias = document.getElementById("modal-tecnologias");

            const cerrar = document.getElementById("cerrar");

            proyectos.forEach(proyecto => {

            const card = document.createElement("div");
            card.classList.add("project-card");

            card.innerHTML = `
            <img src="${proyecto.imagen}" class="project-img">

            <h4>${proyecto.titulo}</h4>

            <p>${proyecto.descripcion.substring(0,60)}...</p>

            <button class="project-btn">Leer más</button>
            `;

            const boton = card.querySelector("button");

            boton.addEventListener("click", () => {

            modalTitulo.textContent = proyecto.titulo;
            modalDescripcion.textContent = proyecto.descripcion;
            modalTecnologias.textContent = proyecto.tecnologias;

            modal.style.display = "flex";

            });

            contenedor.appendChild(card);

            });

            cerrar.addEventListener("click", () => {

            modal.style.display = "none";

            });

            window.addEventListener("click", (e)=>{

            if(e.target == modal){
            modal.style.display = "none";
            }

            });
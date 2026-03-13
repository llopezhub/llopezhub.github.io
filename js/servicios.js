// Función general para calcular movimiento
function getCardWidth(track){
    const card = track.querySelector(".services-card");
    const gap = 20; // mismo gap que en CSS
    return card.offsetWidth + gap;
}

function setupCarousel(carouselId){
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    const nextBtn = document.querySelector(`#${carouselId} .next`);
    const prevBtn = document.querySelector(`#${carouselId} .prev`);
    let position = 0;

    const visibleWidth = track.parentElement.offsetWidth;
    const maxScroll = track.scrollWidth - visibleWidth;

    nextBtn.addEventListener("click", () => {
        const move = getCardWidth(track);
        position += move;
        if(position > maxScroll) position = 0; // vuelve al inicio
        track.style.transform = `translateX(-${position}px)`;
    });

    prevBtn.addEventListener("click", () => {
        const move = getCardWidth(track);
        position -= move;
        if(position < 0) position = maxScroll; // vuelve al final
        track.style.transform = `translateX(-${position}px)`;
    });
}

// Configuramos los carousels
setupCarousel("services");
setupCarousel("technologies");
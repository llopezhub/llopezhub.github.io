function getCardWidth(track){
    const card = track.querySelector(".services-card");
    const gap = 20; // mismo gap que en CSS
    return card.offsetWidth + gap;
}

function getVisibleWidth(track){
    const parent = track.parentElement;
    const style = getComputedStyle(parent);
    const paddingLeft = parseInt(style.paddingLeft);
    const paddingRight = parseInt(style.paddingRight);
    return parent.offsetWidth - paddingLeft - paddingRight;
}

function setupCarousel(carouselId){
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    const nextBtn = document.querySelector(`#${carouselId} .next`);
    const prevBtn = document.querySelector(`#${carouselId} .prev`);
    let position = 0;

    function updateTransform(){
        track.style.transform = `translateX(-${position}px)`;
    }

    nextBtn.addEventListener("click", () => {
        const move = getCardWidth(track);
        const visibleWidth = getVisibleWidth(track);
        const maxScroll = track.scrollWidth - visibleWidth;

        position += move; // next
        if(position > maxScroll) position = 0; // loop al inicio
        updateTransform();
    });

    prevBtn.addEventListener("click", () => {
        const move = getCardWidth(track);
        const visibleWidth = getVisibleWidth(track);
        const maxScroll = track.scrollWidth - visibleWidth;

        position -= move; // prev
        if(position < 0) position = maxScroll; // loop al final
        updateTransform();
    });
}

// Configuramos ambos carousels
setupCarousel("services");
setupCarousel("technologies");
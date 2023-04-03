const fadeOut = () => {
    var loaderWrapper =
        document.querySelector('.wrapper');

    loaderWrapper.classList.add('carga');    
}

window.addEventListener('load', fadeOut);
const preloader = () => {

    const preloader = document.querySelector('.preloader')
    window.addEventListener('load', () => {
        preloader.classList.add('hide');
        setTimeout(() => {
            preloader.remove();
        }, 3000)
    })
}

export default preloader;


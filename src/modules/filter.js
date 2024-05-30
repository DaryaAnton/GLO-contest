const filter = (card) => {
    const select = document.querySelector('select');
    const allMovies = new Set();

    card.forEach((item) => {
        if(item.movies) {
            item.movies.forEach((movie) => {
                allMovies.add(movie);
            });
        }
    });

    allMovies.forEach((item) => {
        const option = document.createElement('option');

        option.textContent = item;

        select.append(option);
    });

    select.addEventListener('change', function(event) {
        const selectedMovie = event.target.value;
        const cards = document.querySelectorAll('.hero__card');

        if (selectedMovie === '') {
            cards.forEach(function(card) {
                card.style.display = '';
            });
        }else {
            cards.forEach(function(card) {
                const moviesList = card.querySelectorAll('.hero__card-movies li');
                const moviesArray = Array.from(moviesList).map(function(li) {
                    return li.textContent;
                });
    
                if (!moviesArray.includes(selectedMovie)) {
                    card.style.display = 'none';
                } else {
                    card.style.display = '';
                };
            });
        }
    });
}

export default filter;

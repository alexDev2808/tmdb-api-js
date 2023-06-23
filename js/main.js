
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});


// Utils

function createMovies(moviesArr, container) {
    container.innerHTML = '';

    moviesArr.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    })
}

function createCategories(categories, container) {

    container.innerHTML = '';

    categories.forEach(category => {


        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
        })
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);

    })


}

// Llamados a la API


async function getPopularMoviesPreview() {
    const { data }= await api('movie/popular');

    const movies = data.results;

    createMovies(movies, trendingMoviesPreviewList);
}

async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');

    const categories = data.genres;

    createCategories(categories, categoriesPreviewList);


}

async function getMoviesByCategory(id) {
    const { data }= await api('discover/movie', {
        params: {
            with_genres: id,
        }
    });

    const movies = data.results;

    createMovies(movies, genericSection);
}
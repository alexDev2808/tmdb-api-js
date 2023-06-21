async function getPopularMoviesPreview() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY);

    const data = await response.json();

    const movies = data.results;
    movies.forEach(movie => {

        const popularPreviewContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        popularPreviewContainer.appendChild(movieContainer);
    })
}

async function getCategoriesPreview() {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);

    const data = await response.json();

    const categories = data.genres;



    categories.forEach(category => {

        const categoriesPreviewContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewContainer.appendChild(categoryContainer);

    })
}

getPopularMoviesPreview();
getCategoriesPreview();
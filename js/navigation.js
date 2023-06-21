window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false);

function navigator() {
    
    console.log({location});

    if(location.hash.startsWith('#popular')) {
        popularPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage()
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage()    
    } else {
        homePage();
    }

    location.hash
}


function homePage() {
    console.log("Home Page!");

    getPopularMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage() {
    console.log("Categories Page!");
}

function movieDetailsPage() {
    console.log('Movies');
}

function searchPage() {
    console.log('Search');
}

function popularPage() {
    console.log('Popular Page');
}
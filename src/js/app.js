import movie from './movie.js';
// let inst = new movie();

export class App {

    init() {
        // get user entered search string
        console.log('hey');
        movie.prototype.initialize();
    }
}

function addMovieToFavourites(event) {
    const { id } = event.target.dataset;
   
    const movie = state.response.results.find(movie => movie.id == id);
    const isExist = state.favList.find(item => item.id == id);
    
    if(!isExist){
        setState({
            favList: [...state.favList, movie]
        });
        if(window.localStorage){
            console.log(state.favList)
            localStorage.setItem('favouriteList', JSON.stringify(state.favList));
        }
    }
}

// Initialize the App
let app = new App();
app.init();

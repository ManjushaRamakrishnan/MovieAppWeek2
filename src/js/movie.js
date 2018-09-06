export default class {
    constructor() {
        //Iniitlaize movie obj
    }

    initialize() {
        let self = this;
        self.movieName = '';
        self.movieResult = {};
        self.movieContainer = document.querySelector('#result-section');
        self.apiURL = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=8596adabbabcc3b786e1debc41122857&query=";

        document.getElementById('loader').style.display = 'none';
        document.getElementById('search').addEventListener('click', function() {
            self.getMovieList();
        });

        document.getElementById('searchText').addEventListener('keyup', function(e) {
            e.preventDefault();
            if (e.keyCode === 13) {
                document.getElementById('search').click();
            }
        });
    }

    async getMovieList() {
        event.preventDefault();
        try {
          let self = this;
          const search = document.getElementById('searchText').value;
          const response = await this.getResults(search);
          document.getElementById('loader').style.display = 'none';
          if(response.results.length) {
            self.movieContainer.innerHTML = ""
            self.movieContainer.style.display = 'block';
            document.getElementById('error-section').style.display = 'none';
            response.results.forEach(function (item) {
                
                console.log(item);
                const overview = item.overview.substr(0, 60) + '...';
                const list = `
                    <div class="col-md-4 movie-list">
                        <img class="img-thumbnail" src="http://image.tmdb.org/t/p/w185/${item.poster_path}" alt="">
                        <h2>${item.original_title}</h2>
                        <p>${overview}</p>
                        <p><b>Popularity:</b>${item.popularity}</p>
                    </div>
                `;
                self.movieContainer.innerHTML += list;
            });
        } else {
            self.movieContainer.style.display = 'none';
            const errorMsg = "Oops! Your search '" + search + "' did not yield any results."
            document.getElementById('error-section').innerHTML = errorMsg
            document.getElementById('error-section').style.display = 'block';
        }  
        } catch(error) {
          console.log("Error in fetching results >> " + error);
        }
      }
    
    async getResults(search) {
        const url = this.apiURL + search;
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        if(data.Error) {
            throw new Error(data.Error);
        }
        return data;
    }
}


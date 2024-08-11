/* 
All of the functionality will be done in this client-side JS file.  
You will make client - side AJAX requests to the API and use jQuery to target and create elements on the page. You can use a client-side fetch or axios request instead of AJAX)
*/

(function ($) {


    const errorCheck = {        checkIsProperString(str, variableName) {
        if (!str) {
              throw `${variableName || 'String'} not provided`;
            }
        if (typeof str !== 'string') {
          throw `${variableName || 'Provided variable'} is not a string`;
        }
        str=str.trim()
        if (str.length === 0) {
          throw `${variableName || 'Provided string'} is empty`;
        }
        return str
      }
  
    };

    const methods = {
        
          async searchMoviesByName(title){
            /*Function to make an axios call to search the api and return up to 20 movies matching the title param
            API endpoint: http://www.omdbapi.com/?apikey=CS546&s={title}
            */
            title = errorCheck.checkIsProperString(title,"Search")
            const data = await fetch(('https://www.omdbapi.com/?apikey=CS546&s='+title)).then(response => {
                return response.json();
              })
            let movies10=data
            let arr=movies10['Search']
            if(parseInt(movies10['totalResults'])>10){
              const data = await fetch(('https://www.omdbapi.com/?apikey=CS546&s='+title+"&page=2")).then(response => {
                return response.json();
              })
              let movies20=data
              arr=arr.concat(movies20['Search'])
            }
            return arr
          },
          async searchMovieById(id){
            /*Function to make an axios call to the the api matching the id
           API endpoint: http://www.omdbapi.com/?apikey=CS546&i={id}
            */
           id = errorCheck.checkIsProperString(id,'Id')
           let data = await fetch(('https://www.omdbapi.com/?apikey=CS546&i='+id)).then(response => {
            return response.json();
          })
           return data 
          },
          showMovie(movie){
            if(movie.Poster==="N/A"){
              movie.Poster="https://demofree.sirv.com/nope-not-here.jpg"
            }
            let table = document.createElement("table");
            table.className="my_coolratings_table"
            let tr=document.createElement("tr");
            tr.innerHTML="<th>Source</th> <th>Rating</th>"
            table.appendChild(tr)
            for (let rate of movie.Ratings){
              tr=document.createElement("tr");
              tr.innerHTML="<th>"+rate['Source']+"</th> <th>"+rate['Value']+"</th>"
              table.appendChild(tr)
            }
            let section = document.createElement("section");
            section.innerHTML="<h4>Ratings</h4>";
            section.appendChild(table)
            let article = document.createElement("article");
            article.innerHTML=" <h1>"+movie.Title+"</h1>\
            <img alt='"+movie.Title+" Poster' src='"+movie.Poster+"'>\
  <h2>Plot</h2>\
  <p>"+movie.Plot+"</p>\
   <section><h3>Info</h3>\
    <dl>\
      <dt>Year Released:</dt>\
        <dd>"+movie.Year+"</dd>\
      <dt>Rated:</dt>\
        <dd>"+movie.Rated+"</dd>\
      <dt>Runtime:</dt>\
        <dd>"+movie.Runtime+"</dd>\
      <dt>Genre(s):</dt>\
        <dd>"+movie.Genre+"</dd>\
      <dt>Box Office Earnings:</dt>\
        <dd>"+movie.BoxOffice+"</dd>\
      <dt>DVD Release Date:</dt>\
        <dd>"+movie.DVD+"</dd>\
    </dl>\
  </section>\
  <section>\
    <h4>Cast and Crew</h4>\
    <p><strong>Director:</strong> "+movie.Director+"</p>\
    <p><strong>Writer:</strong> "+movie.Writer+"</p>\
    <p><strong>Cast:</strong> "+movie.Actors+"</p>\
  </section>";
  article.appendChild(section);
  return article;
          }
    };
    
    const search = document.getElementById("searchMovieForm");
    const results = document.getElementById("searchResults");
    const details = document.getElementById("movieDetails");
    const root = document.getElementById("rootLink");
    const textInput = document.getElementById("movie_search_term");
    let err = document.getElementById('error');
    
    if (search){
        search.addEventListener("submit", async (event) => {
            event.preventDefault();
            let title = textInput.value;
            let movies;
            err.innerHTML=""
            root.hidden = true;
            try{
              err.hidden=true;
              movies= await methods.searchMoviesByName(title)
              if (!movies){
                throw "We're sorry, but no results were found for "+title
                          }

            let li;
            let id;
            let film;
            results.innerHTML="";
            details.innerHTML="";
            results.hidden = false;
            details.hidden = true;
            for (let movie of movies){
                li = document.createElement("li");
                li.innerHTML="<a href='javascript:void(0)' data-id="+movie.imdbID+">"+movie.Title +"</a>"
                li.addEventListener("click", async (eventSUB) => {
                  eventSUB.preventDefault();
                  results.hidden = true;
                  details.innerHTML="";
                  id = eventSUB.target.getAttribute('data-id');
                  film=await methods.searchMovieById(id);
                  if(film["Response"]==="False"){
                    throw 'No Movies with that Id Found :('
                   }
                  details.appendChild(methods.showMovie(film));
                  details.hidden=false;
      
              })
                results.appendChild(li)
            }
            root.hidden = false;
          } catch (e) {
            results.innerHTML="";
            details.innerHTML="";
            results.hidden = true;
            details.hidden = true;
            root.hidden = true;
            err.hidden=false;
            err.textContent=e
            search.reset();
            textInput.focus();
          }
        })
    }
    
    })(window.jQuery);
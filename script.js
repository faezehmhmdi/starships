
document.addEventListener("DOMContentLoaded", function() {     
    buttonsAction();
});
function loadData(url) {
    var ul = document.createElement('ul'); 
    fetch(url) //fetch with url
        .then((resp) => resp.json()) //loading json
        .then(function(data) {
            var ships = data.results; //keep results in a list
            //iterating on list and creating li item foreach starship and adding eventlistener to them
            for(let i=0; i< ships.length; i++){        
                let li = document.createElement('li');
                li.innerHTML = ships[i].name;
                let detailP = document.getElementById('dets');
                li.addEventListener('click', function(){
                    //creating another ul for the details
                    let detailUl = document.createElement('ul');
                    detailP.innerHTML="";
                    let title = document.createElement('h4');
                    title.innerHTML = ships[i].name;
                    let model = document.createElement('li');
                    model.innerHTML = "Model: "+ships[i].model;
                    let manufac = document.createElement('li');
                    manufac.innerHTML = "Manufacturer: "+ships[i].manufacturer;
                    let crew = document.createElement('li');
                    crew.innerHTML = "Crew: "+ships[i].crew;
                    let passenger = document.createElement('li');
                    passenger.innerHTML = "Passenger: "+ships[i].passengers;
                    let f = document.createElement('li');
                    f.innerHTML = "Films:";
                    //ul for films of each starchip
                    let filmDiv = document.createElement('ul');
                    //if there is no film
                    if(ships[i].films.length == 0){
                        filmDiv.innerHTML="";
                    }
                    else {
                        //fetching films
                        ships[i].films.forEach((film) => {
                        fetch(film)
                            .then((respF) => respF.json())
                            .then(function(data){
                                let filmLi = document.createElement('li');
                                filmLi.innerHTML= data.title;
                                filmDiv.appendChild(filmLi);
                            })
                        });
                    }
                detailP.append(title);
                detailUl.appendChild(model);
                detailUl.appendChild(manufac);
                detailUl.appendChild(crew);
                detailUl.appendChild(passenger);
                detailUl.appendChild(f);
                detailUl.appendChild(filmDiv);
                detailP.append(detailUl);
            });
        ul.appendChild(li); 
        }
    let t = document.createElement('h4');
    t.innerHTML = "Starships";
    let part = document.getElementById('names');
    part.append(t);
    part.append(ul);
        })
}

//function for pagination
function buttonsAction(){
document.getElementById('but1').addEventListener('click', function(){
    document.getElementById('names').innerHTML="";
    document.getElementById('dets').innerHTML="";
    loadData('https://swapi.dev/api/starships/?page=1');
});
document.getElementById('but2').addEventListener('click', function(){
    document.getElementById('names').innerHTML="";
    document.getElementById('dets').innerHTML="";
    loadData('https://swapi.dev/api/starships/?page=2');
});
document.getElementById('but3').addEventListener('click', function(){
    document.getElementById('names').innerHTML="";
    document.getElementById('dets').innerHTML="";
    loadData('https://swapi.dev/api/starships/?page=3');
});
document.getElementById('but4').addEventListener('click', function(){
    document.getElementById('names').innerHTML="";
    document.getElementById('dets').innerHTML="";
    loadData('https://swapi.dev/api/starships/?page=4');
});   
}





var nasaAPIkey = "G7rUt757g5ynO4MVbWcIaAamHqUkTvscXHD5BdBG";

function sendApiRequest(){
  // var userInput = document.getElementById("input").value;

  // if(userInput === ""){return;}
  // var newChild = document.createElement("div");
  // newChild.innerText = userInput;
  // document.body.appendChild(newChild);

  var nasaApiUrl = "https://api.nasa.gov/planetary/apod?api_key=G7rUt757g5ynO4MVbWcIaAamHqUkTvscXHD5BdBG";
  console.log(nasaApiUrl);
  fetch(nasaApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);

      var p = document.createElement("p");
      p.innerText = json["title"];
      document.body.appendChild(p);

      p = document.createElement("p");
      p.innerText =  json["date"];
      document.body.appendChild(p);

      var img1 = document.createElement("img");
      img1.src = json["hdurl"];
      document.body.appendChild(img1);


      var g = document.createElement("p");
      g.setAttribute("id", "exp");
      g.innerText = json["explanation"];
      document.body.appendChild(g);

    })
}

sendApiRequest();

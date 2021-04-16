// variable local
function displayName(event){
    var inputVal = document.getElementById('name').value;
    var div = document.getElementById('modal1');
    if(inputVal == false){
// bloque l'entrée du boutton
        event.preventDefault();
    } else{
// affiche Texte, balise, variable ..(ou div.content mais ne peut pas interprété)
    div.innerHTML = "Bienvenue! " + inputVal + "," + "<br>Voici un quiz sur les animaux!" + "<br>Tu vas jouer contre notre ami le crocodile pas gentil!" + "<br> Bonne chance! Amuses toi bien!" + 
    "<br><button class='btn btn-danger' type='button'><a style='color:white;' href=\'index1.html\'>Entrez!</a></button>";
    }
}


function calcSurface() {
    var largeur = document.getElementById("form").elements["largeur"].value;
    var longueur = document.getElementById("form").elements["longueur"].value;

    alert("La surface est de " + (largeur * longueur));
}

function calcPeripetre() {
    var largeur = document.getElementById("form").elements["largeur"].value;
    var longueur = document.getElementById("form").elements["longueur"].value;

    alert("Le perimetre est de " + (largeur * 2 + longueur * 2));
}

function nbJourMois() {
    var mois = prompt("Saisir le numero du mois : ");
    var annee = prompt("Saisir l'annee : ");

    var nbJours;

    switch (mois) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            nbJours = 31;
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            nbJours = 30;
            break;
        case "2":
            if (annee % 4 == 0) {
                nbJours = 29;
            }
            else {
                nbJours = 28;
            }
            break;
        default:
            break;
    }

    alert("Le nombre de jours du mois numero : " + mois + " est de : " + nbJours);
}

function calcTablMult() {
    var nombre = document.getElementById("mult").elements["nombre"].value;
    var rep = "<br/>";

    nombre = parseInt(nombre);

    if (Number.isInteger(nombre) &&
        nombre > 0 && nombre <= 10) {
        for (let index = 1; index <= 10; index++) {
            rep += nombre + " * " + index + " = " + nombre * index + "<br/>";
        }
    }
    else {
        rep = "Veuillez saisir un nombre entre 1 et 10";
    }

    document.write(rep);

}

function calcResultat() {
    var operation = document.getElementById("calc").elements["oper"].value;

    var resultat = eval(operation);

    document.getElementById("calc").elements["restultat"].value = resultat;
}

function evalResultat() {
    var operation = document.getElementById("calc").elements["oper"].value;
    var resultat = document.getElementById("calc").elements["restultat"].value;

    if(eval(operation) == resultat){
        document.getElementById("calc").elements["eval"].value = "C'est bon";
    }
    else{
        document.getElementById("calc").elements["eval"].value = "Perdu";
    }
}
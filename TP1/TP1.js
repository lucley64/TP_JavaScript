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
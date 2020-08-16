function ouvrirOnglet(evt, nomOnglet) {
  // Declare tous les variables
  var i, ongletContenu, ongletLinks;

  // Pointer tous les éléments avec la class="ongletLinks" et les cacher
  ongletContenu = document.getElementsByClassName("ongletContenu");
  for (i = 0; i < ongletContenu.length; i++) {
    ongletContenu[i].style.display = "none";
  }

  // Pointer tous les éléments avec la class="ongletLinks" et retirer la class "active"
  ongletLinks = document.getElementsByClassName("ongletLinks");
  for (i = 0; i < ongletLinks.length; i++) {
    ongletLinks[i].className = ongletLinks[i].className.replace(" active", "");
  }

  // Afficher l'onglet courant, et ajouter la class "active" sur le bouton qui ouvre l'onglet
  document.getElementById(nomOnglet).style.display = "block";
  evt.currentTarget.className += " active";
}
// Pointerl'élément qui a comme id="ouvertParDéfaut" et cliquez dessus
document.getElementById("ouvertParDéfaut").click();
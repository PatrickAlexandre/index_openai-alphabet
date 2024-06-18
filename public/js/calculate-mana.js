function calculateMana() {
    var temps = 60;
    var connaissance = 20;
    var argent = 30;
    var valeurHumain = 1; // Valeur pour la race Humain

    var mana = temps * connaissance * argent * valeurHumain;
    document.querySelector('.barre-mana').innerHTML = '<span class="barre-text">' + mana + '</span>';
}

document.addEventListener('DOMContentLoaded', (event) => {
    calculateMana();
});

document.addEventListener("DOMContentLoaded", function () {
    var artistSelect = document.getElementById("artist");
    var typeSelect = document.getElementById("type");
    var cards = document.querySelectorAll(".card");

    artistSelect.addEventListener("change", function () {
        filterCards();
    });

    typeSelect.addEventListener("change", function () {
        filterCards();
    });

    function filterCards() {
        var artist = artistSelect.value;
        var type = typeSelect.value;

        cards.forEach(function (card) {
            var cardArtist = card.getAttribute("data-artist");
            var cardType = card.getAttribute("data-type");

            if ((artist === "todos" || cardArtist === artist) && (type === "todos" || cardType === type)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
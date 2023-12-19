const montrealModals = document.getElementsByClassName("modal");
const overlay = document.querySelector(".overlay");
const montrealCloseButtons = document.getElementsByClassName("btn-close")

function openModal(i) {
    montrealModals[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
};

function closeModal(i) {
    montrealModals[i].classList.add("hidden");
    overlay.classList.add("hidden");
};

Array.prototype.forEach.call(montrealCloseButtons, function(montrealCloseButton, i) {
    montrealCloseButton.addEventListener("click", () => {
        closeModal(i);
    })
});

async function initMap() {
    const posMontreal = {lat: 45.527727489592024, lng: -73.57037001550934};
    
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const { PinView } = await google.maps.importLibrary("marker");
    const infoWindow = new google.maps.InfoWindow();
    
    let map = new Map(document.getElementById("map"), {
        zoom: 14,
        center: posMontreal,
        mapId: "DEMO_MAP_ID",
    });

    const tourStops = [
        {
            position: {lat: 45.50903672849233, lng: -73.54872537327202},
            title: "La Grande Roue de Montréal",
        },
        {
            position: {lat: 45.509336086009824, lng: -73.55161759630114},
            title: "Bonsecours Market",
        },
        {
            position: {lat: 45.50460686899264, lng: -73.5561664236587},
            title: "Notre-Dame Basilica of Montreal",
        },
        {
            position: {lat: 45.55979212379101, lng: -73.5496883638221},
            title: "Montreal Biodome",
        },
        {
            position: {lat: 45.50389693196807, lng: -73.58724210533396},
            title: "Kondiaronk Belvedere",
        },
    ];

    tourStops.forEach(({ position, title }, i) => {
        const pinView = new PinView({
            glyph: `${i + 1}`,
        });

        const marker = new AdvancedMarkerView({
            position,
            map,
            title: `${i + 1}. ${title}`,
            content: pinView.element,
        });

        marker.addEventListener("gmp-click", () => {
            openModal(i);
        });
    });
}

initMap();
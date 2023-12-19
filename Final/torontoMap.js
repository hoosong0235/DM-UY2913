const torontoModals = document.getElementsByClassName("modal");
const overlay = document.querySelector(".overlay");
const torontoCloseButtons = document.getElementsByClassName("btn-close")

function openModal(i) {
    torontoModals[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
};

function closeModal(i) {
    torontoModals[i].classList.add("hidden");
    overlay.classList.add("hidden");
};

Array.prototype.forEach.call(torontoCloseButtons, function(torontoCloseButton, i) {
    torontoCloseButton.addEventListener("click", () => {
        closeModal(i);
    })
});

async function initMap() {
    const posToronto = {lat: 43.663594460109366, lng: -79.39615066376184};
    
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const { PinView } = await google.maps.importLibrary("marker");
    const infoWindow = new google.maps.InfoWindow();
    
    let map = new Map(document.getElementById("map"), {
        zoom: 14,
        center: posToronto,
        mapId: "DEMO_MAP_ID",
    });

    const tourStops = [
        {
            position: {lat: 43.67902976931161, lng: -79.40983503789799},
            title: "Casa Loma",
        },
        {
            position: {lat: 43.67783949105643, lng: -79.4083056696965},
            title: "Baldwin Steps",
        },
        {
            position: {lat: 43.66829846783033, lng: -79.3949302832289},
            title: "Royal Ontario Museum",
        },
        {
            position: {lat: 43.64893500829895, lng: -79.37153613160311},
            title: "St. Lawrence Market",
        },
        {
            position: {lat: 43.64267894416573, lng: -79.38712260727684},
            title: "CN Tower",
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
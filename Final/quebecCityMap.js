const quebecCityModals = document.getElementsByClassName("modal");
const overlay = document.querySelector(".overlay");
const quebecCityCloseButtons = document.getElementsByClassName("btn-close")

function openModal(i) {
    quebecCityModals[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
};

function closeModal(i) {
    quebecCityModals[i].classList.add("hidden");
    overlay.classList.add("hidden");
};

Array.prototype.forEach.call(quebecCityCloseButtons, function(quebecCityCloseButton, i) {
    quebecCityCloseButton.addEventListener("click", () => {
        closeModal(i);
    })
});

async function initMap() {
    const posQuebecCity = {lat: 46.812184696939916, lng: -71.20513257190849};
    
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const { PinView } = await google.maps.importLibrary("marker");
    const infoWindow = new google.maps.InfoWindow();
    
    let map = new Map(document.getElementById("map"), {
        zoom: 16,
        center: posQuebecCity,
        mapId: "DEMO_MAP_ID",
    });

    const tourStops = [
        {
            position: {lat: 46.812908904996895, lng: -71.21311368234105},
            title: "St. John Gate",
        },
        {
            position: {lat: 46.81208054552449, lng: -71.20524569906932},
            title: "Fairmont Le Château Frontenac",
        },
        {
            position: {lat: 46.813584831658574, lng: -71.20678601735767},
            title: "La Boutique de Noël de Québec",
        },
        {
            position: {lat: 46.81277844006941, lng: -71.20352142424677},
            title: "Breakneck Steps",
        },
        {
            position: {lat: 46.80969693451285, lng: -71.20497727926409},
            title: "Terrasse Saint-Denis",
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
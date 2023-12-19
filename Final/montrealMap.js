async function initMap() {
    const posMontreal = {lat: 45.50903672849233, lng: -73.54872537327202};
    
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const { PinView } = await google.maps.importLibrary("marker");
    const infoWindow = new google.maps.InfoWindow();
    
    let map = new Map(document.getElementById("map"), {
        zoom: 16,
        center: posMontreal,
        mapId: "DEMO_MAP_ID",
    });

    const tourStops = [
        {
            position: {lat: 43.08684355911157, lng: -79.0665401778558},
            title: "Niagara Falls State Park Administration",
        },
        {
            position: {lat: 43.08157152748957, lng: -79.07100348838995},
            title: "Niagara Falls Adventures",
        },
        {
            position: {lat: 43.09037318206784, lng: -79.06755613706792},
            title: "Rainbow Bridge",
        },
        {
            position: {lat: 43.08930760969704, lng: -79.07311367392514},
            title: "Welcome Center",
        },
        {
            position: {lat: 43.079262403029816, lng: -79.07887319293789},
            title: "Table Rock Welcome Centres",
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

        console.log(marker.title);
    
        if (marker.title == "1. Niagara Falls State Park Administration") {
            marker.addEventListener("gmp-click", ({ domEvent, latLng }) => {
                window.location.href = "niagaraFalls1.html";
            });
        } else {
            marker.addEventListener("gmp-click", ({ domEvent, latLng }) => {
                window.location.href = "niagaraFalls5.html";
            });
        }
    });
}

initMap();
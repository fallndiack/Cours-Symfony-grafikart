import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
 export default class Map {

    static init () {
        let map = document.querySelector('#map')
        if (map === null){
            return
        }

        let icon =  L.icon({
            iconUrl: '/images/marker-icon.png'
        });


        let center = [map.dataset.lat, map.dataset.lng]
        map = L.map('map').setView(center, 13)
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoiZGlvZGlvMjYiLCJhIjoiY2s3MmF3dDd0MDBmMjNocGFrbjNtOWlxNCJ9.kC2QEjq3fPfiShtouYKXbg'
        }).addTo(map);
        L.marker(center, {icon: icon}).addTo(map)
    }

}
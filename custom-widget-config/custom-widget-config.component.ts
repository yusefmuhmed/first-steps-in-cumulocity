import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import * as Leaflet from 'leaflet'; 
@Component({
  selector: 'app-custom-widget-config',
  templateUrl: './custom-widget-config.component.html',
  styleUrls: ['./custom-widget-config.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]

})




export class CustomWidgetConfigComponent {

  config:any={text:"Map"}
  
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options: Leaflet.MapOptions = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: 0, lng: 0 }
  };
isFrozen: boolean = false;
showTitle: boolean= true;



  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.options.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(position.coords.latitude,position.coords.longitude);
        
        this.map.setView([position.coords.latitude, position.coords.longitude], this.options.zoom);
      });
    }
  }


  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 28.625485, lng: 79.821091 },
        draggable: true
      },
      {
        position: { lat: 28.625293, lng: 79.817926 },
        draggable: false
      },
      {
        position: { lat: 28.625182, lng: 79.81464 },
        draggable: true
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.getCurrentLocation();
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  } 
}


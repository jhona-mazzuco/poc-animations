import { Component, OnInit } from '@angular/core';
import { PowerLightStates } from "./components/power-light/types/power-light-states.type";
import { AudioService } from "./services/audio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  state: PowerLightStates = 'off';

  constructor(private audioService: AudioService) {
  }


  ngOnInit(): void {
    this.audioService.load('../../assets/sounds/power-on-sound.mp4')
  }

  powerChange(): void {
    if (this.state === 'off') {
      this.state = 'on';
      this.audioService.play();
    } else {
      this.state = 'off';
    }
  }
}

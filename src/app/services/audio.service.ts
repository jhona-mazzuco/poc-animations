import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audio!: HTMLAudioElement;

  load(src: string): void {
    this.audio = new Audio(src);
   this.audio.load();
  }

  play(): void {
    this.audio.play();
  }
}

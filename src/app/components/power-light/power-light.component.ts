import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { PowerLightStates } from "./types/power-light-states.type";

@Component({
  selector: 'app-power-light',
  templateUrl: './power-light.component.html',
  styleUrls: ['./power-light.component.scss'],
  animations: [
    trigger('lightState', [
      state(
        'on',
        style({
          background: '#05fbfb',
          'box-shadow': 'inset 0 0 50px #fff'
        })
      ),
      state(
        'off',
        style({
          background: '#03cbcb'
        })
      ),
      transition('off => on', [
        animate('250ms')
      ]),
      transition('on => off', [
        animate('250ms')
      ])
    ])
  ]
})
export class PowerLightComponent implements OnInit {
  @Input() state!: PowerLightStates;
  @Input() diameter: number = 10;

  area!: number;

  ngOnInit(): void {
    this.calculateArea()
  }

  calculateArea(): void {
    this.area = Math.PI * (Math.pow(this.diameter / 2, 2));
  }
}

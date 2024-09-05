import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'MCIMG',
  standalone: true,
  template: `
    ...
    <li>
      Static Image:
      <img ngSrc="" alt="" width="32" height="32" />
    </li>
    <li>
      Dynamic Image:
      <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
    </li>
    ...
  `,
  imports: [NgOptimizedImage],
  templateUrl: './general-image.component.html',
  styleUrl: './general-image.component.css'
})
export class GeneralImageComponent {

    @Input() path: string = "xingxing.jpg";
    @Input() alt: string = "banana";
    @Input() width: number = 32;
    @Input() height: number = 32;
    @Input() priority: boolean = false;

}

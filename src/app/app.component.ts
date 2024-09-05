import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralImageComponent } from '../components/atoms/general-image/general-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'monkey-components';
}

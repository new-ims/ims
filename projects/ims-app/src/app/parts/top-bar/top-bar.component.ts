import { Component, inject } from '@angular/core';
import { ConfigStore } from '@ims';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  readonly store = inject(ConfigStore);
}

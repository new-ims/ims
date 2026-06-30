import { Component, inject } from '@angular/core';
import { ConfigStore, ImsShared } from '@ims';


@Component({
  selector: 'app-root',
  imports: [ImsShared],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly store = inject(ConfigStore);

}

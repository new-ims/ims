import { Component, inject } from '@angular/core';
import { ProcessStore } from '@ims';

@Component({
  selector: 'app-insured-header',
  imports: [],
  templateUrl: './insured-header.component.html',
  styleUrl: './insured-header.component.scss',
})
export class InsuredHeaderComponent {
  readonly store = inject(ProcessStore);
}

import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ims-busy',
  imports: [],
  templateUrl: './busy.component.html',
  styleUrl: './busy.component.css',
  host: {
    '[style.display]': 'display()',
  },
})
export class BusyComponent {
  readonly condition = input(false, { alias: 'if' });
  readonly label = input('טוען...');

  readonly display = computed(() => (this.condition() ? 'flex' : 'none'));
}

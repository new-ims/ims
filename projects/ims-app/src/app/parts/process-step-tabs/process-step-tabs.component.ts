import { Component, inject } from '@angular/core';
import { ProcessStore, ImsShared } from '@ims';

@Component({
  selector: 'app-process-step-tabs',
  imports: [ImsShared],
  templateUrl: './process-step-tabs.component.html',
  styleUrl: './process-step-tabs.component.scss',
})
export class ProcessStepTabsComponent {
  readonly store = inject(ProcessStore);
}

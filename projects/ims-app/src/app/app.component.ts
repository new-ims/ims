import { Component, inject } from '@angular/core';
import { ConfigStore, ImsShared, ProcessStore } from '@ims';
import { TopBarComponent } from './parts/top-bar/top-bar.component';
import { InsuredHeaderComponent } from './parts/insured-header/insured-header.component';
import { ToolbarComponent } from './parts/toolbar/toolbar.component';
import { ProcessStepTabsComponent } from './parts/process-step-tabs/process-step-tabs.component';


@Component({
  selector: 'app-root',
  imports: [ImsShared, ProcessStepTabsComponent, TopBarComponent, InsuredHeaderComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly store = inject(ConfigStore);
  readonly processStore = inject(ProcessStore);

}

import { Component, signal } from '@angular/core';
import { WithFormComponent } from "./with-form/with-form.component";

@Component({
  selector: 'issue-root',
  imports: [WithFormComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class App {
  protected title = 'detachedDomWithFormControlName';
  protected showComponent = signal(true);
}

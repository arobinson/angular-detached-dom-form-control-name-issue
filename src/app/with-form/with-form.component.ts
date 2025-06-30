import { Component, computed, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'issue-with-form',
  imports: [ReactiveFormsModule],
  templateUrl: './with-form.component.html',
  styles: ``
})
export class WithFormComponent {
  // #region First form group
  protected readonly showForm = signal(false);

  /**
   * This form group is destroyed when the form is hidden
   */
  protected readonly formGroup = computed(() => {
    if (this.showForm()) {
    return new FormGroup({
        name: new FormControl(''),
        age: new FormControl('')
      });
    } else {
    return undefined;
    }
  });
  // #endregion

  // #region Second form group
  protected readonly showForm2 = signal(false);

  /**
   * This form group is not destroyed when the form is hidden
   */
  protected readonly secondFormGroup = computed(() => new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    }));
  // #endregion
}

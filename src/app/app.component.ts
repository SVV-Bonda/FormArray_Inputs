import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(private fb : FormBuilder){}

  form = this.fb.group({
    inputs : this.fb.array([])
  })


  get inputs() {
    return this.form.get('inputs') as FormArray;
  }

  Inputadd() {
    this.inputs.push(this.fb.control(''));
  }

  Inputremove(i: any) {
    this.inputs.removeAt(i);
  }

  save(){
    console.log(this.form.value);
  }
}

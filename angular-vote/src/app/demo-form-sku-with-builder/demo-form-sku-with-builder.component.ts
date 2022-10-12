import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', [Validators.required, this.skuValidator]]
    })
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to', form);
    })

  }

  ngOnInit(): void {
  }
  onSubmit(form: any): void {
    console.log(form);
  }
  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
    return { invalidSku: false }
  }

}

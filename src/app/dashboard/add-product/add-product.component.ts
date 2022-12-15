import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  myForm: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    console.log('valid?', this.myForm.valid);
    console.log('Name', this.myForm.value.name);
    console.log('Price', this.myForm.value.price);
    console.log('Description', this.myForm.value.description);
  }
}

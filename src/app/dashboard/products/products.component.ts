import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/shared/api/dashboard/dashboard.service';
import { ProductsModel } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myForm: FormGroup | any;
  productsModelObj: ProductsModel = new ProductsModel();
  productData!: any;

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private fb: FormBuilder, private api: DashboardService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
    });
    this.getAllProducts();
  }

  clickAddProduct() {
    this.myForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  addProduct() {
    this.productsModelObj.productName = this.myForm.value.name;
    this.productsModelObj.productPrice = this.myForm.value.price;
    this.productsModelObj.productDescription = this.myForm.value.description;

    this.api.postProduct(this.productsModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Product added successfully');
        this.myForm.reset();
        this.getAllProducts();
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  getAllProducts() {
    this.api.getProduct().subscribe((res) => {
      this.productData = res;
    });
  }

  deleteProducts(row: any) {
    this.api.deleteProduct(row.id).subscribe((res) => {
      alert('product deleted');
      this.getAllProducts();
    });
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.productsModelObj.id = row.id;
    this.myForm.controls['name'].setValue(row.productName);
    this.myForm.controls['price'].setValue(row.productPrice);
    this.myForm.controls['description'].setValue(row.productDescription);
  }

  updateProducts() {
    this.productsModelObj.productName = this.myForm.value.name;
    this.productsModelObj.productPrice = this.myForm.value.price;
    this.productsModelObj.productDescription = this.myForm.value.description;

    this.api
      .updateProduct(this.productsModelObj, this.productsModelObj.id)
      .subscribe((res) => {
        alert('updated successfully');
        this.getAllProducts();
      });
  }
}

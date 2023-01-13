import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/shared/api/dashboard/dashboard.service';
import { AllProductsModel } from './all-products.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  myForm: FormGroup | any;

  allProducts: Array<any> = [];

  // Created a All Product model file
  // productsModelObj: AllProductsModel = new AllProductsModel();
  // productData!: any;

  constructor(private fb: FormBuilder, private api: DashboardService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      image: ['', [Validators.required]],
    });
    this.getProducts();
  }

  getProducts() {
    this.api.getProduct().subscribe((res: any) => {
      this.allProducts = res.data.reverse();
    });
  }

  // Get all products section
  // getAllProducts() {
  // this.api.getProduct().subscribe((res) => {
  //   this.productData = res;
  // });
  // }

  // Delete all products section
  // deleteProducts(row: any) {
  //   this.api.deleteProduct(row.id).subscribe((res) => {
  //     alert('product deleted');
  //     this.getAllProducts();
  //   });
  // }

  // Edit all products section
  // onEdit(row: any) {
  //   this.productsModelObj.id = row.id;
  //   this.myForm.controls['name'].setValue(row.name);
  //   this.myForm.controls['price'].setValue(row.price);
  //   this.myForm.controls['description'].setValue(row.description);
  //   this.myForm.controls['image'].setValue(row.image);
  // }

  // imageUrl = '../../../assets/images/876.jpg';
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/shared/api/dashboard/dashboard.service';
import { UtilService } from 'src/app/shared/util/util.service';
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
  fileToUpload: File = null;
  user: any;

  // Add product & delete product modal
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private fb: FormBuilder,
    private api: DashboardService,
    private _util: UtilService
  ) {}

  // Form builder/Reactive Forms Section

  ngOnInit() {
    this.getUser();
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      image: ['', [Validators.required]],
    });
    this.getAllProducts();
  }

  // Getting user details Section
  getUser() {
    const userInformation = this._util.readFromLocalStorage('user');
    userInformation ? (this.user = JSON.parse(userInformation)) : '';
  }

  clickAddProduct() {
    this.myForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  // Add Product section

  addProduct() {
    this.productsModelObj.name = this.myForm.value.name;
    this.productsModelObj.price = this.myForm.value.price;
    this.productsModelObj.description = this.myForm.value.description;

    this.api.postProduct(this.productsModelObj).subscribe(
      (res) => {
        let listItem = localStorage.getItem('addList');
        if (listItem) {
          let addList: Array<any> = JSON.parse(listItem);
          addList.push(ProductsModel);
          localStorage.setItem('addList', JSON.stringify(addList));

          const userObject = JSON.stringify(this.productsModelObj);
          localStorage.setItem('addList', userObject);
        } else {
          localStorage.setItem('addList', JSON.stringify([ProductsModel]));
        }
        this.myForm.reset();
        this.getAllProducts();

        alert('Product Added Successfully');
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  // Get all products section
  getAllProducts() {
    this.api.getProduct().subscribe((res) => {
      this.productData = res;
    });
  }

  // Delete all products section
  deleteProducts(row: any) {
    this.api.deleteProduct(row.id).subscribe((res) => {
      alert('product deleted');
      this.getAllProducts();
    });
  }

  // Edit all products section
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.productsModelObj.id = row.id;
    this.myForm.controls['name'].setValue(row.name);
    this.myForm.controls['price'].setValue(row.price);
    this.myForm.controls['description'].setValue(row.description);
    this.myForm.controls['image'].setValue(row.image);
  }

  // Update all products Section
  updateProducts() {
    this.productsModelObj.name = this.myForm.value.name;
    this.productsModelObj.price = this.myForm.value.price;
    this.productsModelObj.description = this.myForm.value.description;

    this.api
      .updateProduct(this.productsModelObj, this.productsModelObj.id)
      .subscribe((res) => {
        alert('updated successfully');
        this.getAllProducts();
      });
  }

  // Image Upload Section
  imageUrl = '../../../assets/images/876.jpg';

  onselectFile(e) {
    this.fileToUpload = e.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}

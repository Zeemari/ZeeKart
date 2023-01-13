import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/shared/api/dashboard/dashboard.service';
import { UtilService } from 'src/app/shared/util/util.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myForm: FormGroup | any;

  imageUrl: any = '';
  user: any;
  products: any[] = [];

  allProducts: Array<any> = [];

  public productData = this.products;

  // Add product & update product modal
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private fb: FormBuilder,
    private api: DashboardService,
    private _util: UtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  clickAddProduct() {
    this.myForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  // Form builder/Reactive Forms Section

  ngOnInit(): void {
    this.UpdateProducts();
    this.getProducts();

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      image: [''],
    });
  }

  getProducts() {
    this.api.getProduct().subscribe((res: any) => {
      this.allProducts = res.data.reverse();
    });
  }

  currentList: string | null = localStorage.getItem('productList');

  UpdateProducts(): void {
    this.api.getProduct().subscribe(
      (_res) => {
        setInterval(() => {
          let currentList = localStorage.getItem('productList');
          if (currentList) {
            let productList: Array<any> = JSON.parse(currentList);
            this.productData = [...this.products, ...productList].reverse();
          } else {
            this.productData = this.products;
          }
        }, 2000);
      },
      (_err: any) => {
        console.log();
        this.router.navigate(['dashboard']);
        console.log(_err);
      }
    );
    try {
      this.productData = this.products;
    } catch {
      alert('error');
    }
  }

  addProduct() {
    // this.showAdd = false;
    // this.showUpdate = true;

    let newListItem = {
      image: '',
      name: this.myForm.value.name,
      description: this.myForm.value.description,
      price: this.myForm.value.price,
    };

    const productData = new FormData();
    productData.append('name', `${this.myForm.value.name}`);
    productData.append('image', this.imageUrl);
    productData.append('description', `${this.myForm.value.description}`);
    productData.append('price', `${this.myForm.value.price}`);

    this.api.Createproduct(productData).subscribe(
      (res) => {
        let currentList = localStorage.getItem('productList');
        if (currentList) {
          let productList: Array<any> = JSON.parse(currentList);
          productList.push(newListItem);
          localStorage.setItem('productList', JSON.stringify(productList));

          const userObject = JSON.stringify(productData);
          localStorage.setItem('productlist', userObject);
        } else {
          localStorage.setItem('productList', JSON.stringify([newListItem]));
        }
        alert('Add Product Successfully');
      },
      (err: any) => {
        alert('something went wrong');
      }
    );
  }

  updateProduct() {
    let newListItem = {
      image: '',
      name: this.myForm.value.name,
      description: this.myForm.value.description,
      price: this.myForm.value.price,
    };

    const productData = new FormData();
    productData.append('name', `${this.myForm.value.name}`);
    productData.append('image', this.imageUrl);
    productData.append('description', `${this.myForm.value.description}`);
    productData.append('price', `${this.myForm.value.price}`);

    this.api.updateProduct(productData).subscribe(
      (res) => {
        let currentList = localStorage.getItem('productList');
        if (currentList) {
          let productList: Array<any> = JSON.parse(currentList);
          productList.push(newListItem);
          localStorage.setItem('productList', JSON.stringify(productList));

          const userObject = JSON.stringify(productData);
          localStorage.setItem('productlist', userObject);
        } else {
          localStorage.setItem('productList', JSON.stringify([newListItem]));
        }
        alert('Add Product Successfully');
      },
      (err: any) => {
        alert('something went wrong');
      }
    );
  }

  // addProduct() {
  //   let newListItem = {
  //     image: this.myForm.value.image,
  //     name: this.myForm.value.name,
  //     description: this.myForm.value.description,
  //     price: this.myForm.value.price,
  //   };

  //   const productData = new FormData();
  //   productData.append('name', `${this.myForm.value.name}`);
  //   productData.append('image', `${this.myForm.value.image}`);
  //   productData.append('description', `${this.myForm.value.description}`);
  //   productData.append('price', `${this.myForm.value.price}`);

  //   this.api.createProduct(productData).subscribe(
  //     (res) => {
  //       let currentList = localStorage.getItem('productList');
  //       if (currentList) {
  //         let productList: Array<any> = JSON.parse(currentList);
  //         productList.push(newListItem);
  //         localStorage.setItem('productList', JSON.stringify(productList));

  //         const userObject = JSON.stringify(productData);
  //         localStorage.setItem('productlist', userObject);
  //       } else {
  //         localStorage.setItem('productList', JSON.stringify([newListItem]));
  //       }
  //       alert('Add Product Successfully');
  //     },
  //     (err: any) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // Edit all products section
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.products = row.id;
    this.myForm.controls['name'].setValue(row.name);
    this.myForm.controls['price'].setValue(row.price);
    this.myForm.controls['description'].setValue(row.description);
    this.myForm.controls['image'].setValue(row.image);
  }

  onDelete(id: number) {
    if (confirm('Are you sure?')) {
      this.api.deleteProduct(+id).subscribe(
        (res) => {
          this.getProducts = res.id;
          console.log(res);
          this.ngOnInit();
        }
        // (error) => (this.error = error)
      );
    }
  }

  getImagePath(event: any) {
    this.imageUrl = event.target.files[0];
  }
}

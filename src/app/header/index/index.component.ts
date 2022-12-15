import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  emailForm: FormGroup | any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log('valid?', this.emailForm.valid);

    console.log('email', this.emailForm.value.email);
  }

  times = [
    {
      image: '../../../assets/images/icon-01-64x64.webp',
      name: 'PRODUCT CATALOG',
      text: 'To maintain the quality of product data and make it configurable for sellers, ZeeKart comes with a catalog system.',
    },
    {
      image: '../../../assets/images/icon-02-64x64.webp',
      name: 'NETWORK WORKFLOW',
      text: 'Network Workflow feature will let you build, organize, and develop a sustainable network in seconds.',
    },
    {
      image: '../../../assets/images/icon-03-64x64.webp',
      name: 'TOP RATING PRODUCT',
      text: 'Our web app has won numerous awards from leading ecommerce awards and received worldwide recognition.',
    },
    {
      image: '../../../assets/images/icon-02-64x64.webp',
      name: 'NETWORK WORKFLOW',
      text: 'Network Workflow feature will let you build, organize, and develop a sustainable network in seconds.',
    },
  ];

  imgs = [
    {
      image:
        '../../../assets/images/cee-cees-closet-small-1d6b515579404482342748f0b67ff6e09836a47b648250d8d1b00e2a24b29faa.webp',
    },
    {
      image:
        '../../../assets/images/tokyo-bike-small-2295b7e1d183bae07eb36ad83451ec624cfe61bbec39e85877d40600f22115b2.webp',
    },
    {
      image:
        '../../../assets/images/brooklyn-museum-small-3cbca35150e701329098cd95f21ec9388886479a5f781a515466b59d80d7b5bb.webp',
    },
    {
      image:
        '../../../assets/images/meso-goods-small-d5c7243d2e6e1e1677b5648f1e672701476c5df7d516a131013a46c7721c98b4.webp',
    },
    {
      image:
        '../../../assets/images/kirrin-finch-small-b85f000eede1716da6a496a95ff3836b300b5beaa57617ab834332b675ede0d6.webp',
    },
    {
      image:
        '../../../assets/images/nalata-nalata-small-b5cd674cc9203997e3a72f2726c8aaa3d594a27c2f69001b4ad833939e9af5ce.webp',
    },
  ];
}

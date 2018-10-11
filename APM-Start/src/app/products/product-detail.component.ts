import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product detail';
  product: IProduct;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId' : id,
      'productName' : 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate' : 'March 19, 2016',
      'description' : 'Leaf rake yeah',
      'price' : 19.95,
      'starRating' : 3.2,
      'imageUrl' : 'https://openclipart.org/image/300px/svg_to_png/26215/Anoymous_Leaf_Rake.png'
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}

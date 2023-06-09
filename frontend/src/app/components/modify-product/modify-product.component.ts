import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  productId!: string | null;
  product: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = productId !== null ? productId : '';
    this.productService.getProductById(this.productId).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.error('Failed to fetch product details:', error);
      }
    );
  }
  fetchProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = productId !== null ? productId : '';
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  updateProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = productId !== null ? productId : '';
    this.productService.updateProduct(this.productId, this.product).subscribe(
      () => {
        console.log('Product updated successfully');
        alert('Product updated successfully');
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error updating product:', error);
        alert(error.error.message)
      }
    );
  }

  deleteProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = productId !== null ? productId : '';
    this.productService.deleteProduct(this.productId).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
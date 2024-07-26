import { Component } from '@angular/core';
import { RecommendedProductsComponent } from '../recommended-products/recommended-products.component';

interface product
{
  pName:string,
  pPrice:number,
  PImg:string,
  pCat:string
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedProductsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  productlist:product[]=[
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/Tv1.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/Tv1.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/Tv1.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/Tv1.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/tv2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/tv2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/tv2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"TV",PImg:"assets/Images/tv2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/Mobile2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/Mobile2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/Mobile2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/Mobile2.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/mobile1.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/mobile1.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/mobile1.jpg"},
    {pName:"Samsung",pPrice:5000,pCat:"Mobile",PImg:"assets/Images/mobile1.jpg"},

  ]

}

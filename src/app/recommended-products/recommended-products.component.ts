import { Component } from '@angular/core';

interface Recommendedproduct
{
  pName:string,
  pPrice:number,
  PImg:string,
  pCat:string
}

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {

  productlist:Recommendedproduct[]=[
    {pName:"Lenovo",pPrice:10000,pCat:"Laptop",PImg:"assets/Images/lenovolap.jpg"},
    {pName:"Lenovo",pPrice:10000,pCat:"Laptop",PImg:"assets/Images/lenovolap.jpg"},
    {pName:"Lenovo",pPrice:10000,pCat:"Laptop",PImg:"assets/Images/lenovolap.jpg"},
    {pName:"Lenovo",pPrice:10000,pCat:"Laptop",PImg:"assets/Images/lenovolap.jpg"},

    {pName:"Lenovo",pPrice:15000,pCat:"Laptop",PImg:"assets/Images/lennvolap2.jpg"},
    {pName:"Lenovo",pPrice:15000,pCat:"Laptop",PImg:"assets/Images/lennvolap2.jpg"},
    {pName:"Lenovo",pPrice:15000,pCat:"Laptop",PImg:"assets/Images/lennvolap2.jpg"},
    {pName:"Lenovo",pPrice:15000,pCat:"Laptop",PImg:"assets/Images/lennvolap2.jpg"},

    {pName:"Lenovo",pPrice:8000,pCat:"Mobile",PImg:"assets/Images/lenovophone01.jpg"},
    {pName:"Lenovo",pPrice:8000,pCat:"Mobile",PImg:"assets/Images/lenovophone01.jpg"},
    {pName:"Lenovo",pPrice:8000,pCat:"Mobile",PImg:"assets/Images/lenovophone01.jpg"},
    {pName:"Lenovo",pPrice:8000,pCat:"Mobile",PImg:"assets/Images/lenovophone01.jpg"},
  ]

}

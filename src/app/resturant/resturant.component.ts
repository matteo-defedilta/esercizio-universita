import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ResturantService } from './resturant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss'],
  providers: [ResturantService]
})
export class ResturantComponent implements OnInit {
  list: Array<string>;
  product:string = "";
  ricercaProdotto:FormGroup;
  availableShops: Array<string>;
  constructor(private resturantServce:ResturantService,private formBuilder:FormBuilder) {
    // console.log(_testService.massimo(1,4));

   }

  ngOnInit(): void {

    this.ricercaProdotto = this.formBuilder.group({
      product: ["", Validators.required]
    });

  }
  searchByItemName = ( shops: any[], itemName:string ):string[] => {
    console.log(shops);
    
    return shops
    .filter (
        shop => shop.items.find((item:any) => item.productName.indexOf(itemName) >= 0)
    ).map((shop:any) => shop.name);
  };
  
  findProduct(){    
    this.resturantServce.searchProduct()
    .subscribe((value) => {
      this.availableShops = 
        this.searchByItemName(value, this.ricercaProdotto.value.product);
    })
  }

}

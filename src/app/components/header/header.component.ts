import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private itemServices: ItemService){ }

  ngOnInit(): void {
    
  }
  filter(code: string){
    this.itemServices.filter(code);
  }
}

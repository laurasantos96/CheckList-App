import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import {FormControl, Validators} from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  items: TaskModel[] = [];
  txtInput: FormControl;


  constructor (private itemService: ItemService)
  {
    this.txtInput = new FormControl ('', 
                    [Validators.minLength(5),
                    Validators.maxLength(35)])
   }

  ngOnInit(): void{

  }
  save(){
     let newItem = {
      name: this.txtInput.value,
      state: false
     }
     if(this.txtInput.invalid || this.txtInput.value === "") return;
     this.itemService.add(newItem);
     this.txtInput.reset();
  }
}

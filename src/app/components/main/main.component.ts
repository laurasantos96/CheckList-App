import {Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import { ItemService } from 'src/app/services/item.service';
  @Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listItems!: TaskModel[];
  codeFilter!: string;
  title!: string;

  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    this.itemService.codefilter$.subscribe(code=>{
      this.codeFilter = code;
      this.changeTitle(code);
    })
    this.itemService.filter('A');
    this.itemService.item$.subscribe(data => this.listItems = data);
    this.itemService.get();
  }
  changeTitle(code: string){
    const All = "A", Completed = "C", Pendings = "P";
    if(code === All) this.title = "All";
    else if (code === Completed) this.title = "Completed";
    else this.title = "Pendings";
  }
}

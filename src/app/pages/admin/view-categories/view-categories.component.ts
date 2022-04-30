import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories = [
    {
      title: '',
      description:''
    }
  ];

  constructor(private category: CategoryService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.category.categories().subscribe(
      (data: any)=>{
        this.categories = data;
        console.log(this.categories);
      },
      (error: any)=>{
        this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
        console.log(error);
      }
    )
  }

  

  

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService, private snackbar: MatSnackBar) { }

  category = {
    title: '',
    description: ''
  };

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }

    this.categoryService.addCategory(this.category).subscribe(
      (data: any)=>{
        console.log(data);
        this.snackbar.open("Successfully added", "OK", {duration: 3000, verticalPosition: "top" });
      },
      (error: any)=>{
        this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });

      }
    )
  }

  

}

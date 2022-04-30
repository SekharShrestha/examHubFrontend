import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  categories: any;
  constructor(private categoryService: CategoryService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data: any)=>{
        this.categories = data;
      },
      (error: any)=>{
        this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
            console.log(error);
      }
      )
    }
  }



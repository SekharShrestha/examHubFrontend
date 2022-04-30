import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddExamsComponent } from './pages/admin/add-exams/add-exams.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdateExamComponent } from './pages/admin/update-exam/update-exam.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewExamComponent } from './pages/admin/view-exam/view-exam.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadExamComponent } from './pages/user/load-exam/load-exam.component';
// import { UserProfileComponent } from './pages/user/profile/profile.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full' 
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'category',
        component: ViewCategoriesComponent
      },
      {
        path: 'add-category',
        component: AddCategoriesComponent
      },
      {
        path: 'exam',
        component: ViewExamComponent
      },
      {
        path: 'add-exams',
        component: AddExamsComponent
      },
      {
        path: 'exam/:qid',
        component: UpdateExamComponent
      },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuestionsComponent
      },
      {
        path: 'add-questions/:qid',
        component: AddQuestionsComponent
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: ':cid',
        component: LoadExamComponent
      },
      {
        path: 'instructions/:qid',
        component: InstructionsComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      }     
    ]
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'start/:qid',
    component: StartExamComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

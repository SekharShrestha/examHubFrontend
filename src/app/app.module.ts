import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './service/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewExamComponent } from './pages/admin/view-exam/view-exam.component';
import { AddExamsComponent } from './pages/admin/add-exams/add-exams.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateExamComponent } from './pages/admin/update-exam/update-exam.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UserSidebarComponent } from './pages/user/sidebar/sidebar.component';
import { LoadExamComponent } from './pages/user/load-exam/load-exam.component';
// import { UserProfileComponent } from './pages/user/profile/profile.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewExamComponent,
    AddExamsComponent,
    UpdateExamComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,
    UserSidebarComponent,
    LoadExamComponent,
    InstructionsComponent,
    StartExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

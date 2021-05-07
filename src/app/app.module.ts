import { ResponseService } from './services/response.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './services/project.service';
import { CourseService } from './services/course.service';
import { FormModelService } from './services/form-model.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; 
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule} from '@angular/material/grid-list'
import { CourseComponent } from './course/course.component';
import { ProjectComponent } from './project/project.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataTablesModule } from 'angular-datatables';
import { ProjectStatusPipe } from './pipes/project-status.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProjectComponent,
    ProjectStatusPipe,
    ProjectFormComponent
  ],
  imports: [
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatGridListModule
    ],
  providers: [FormModelService, CourseService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

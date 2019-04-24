import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component'
import { RepositoryService } from 'src/app/shared/repository.service';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule.forRoot(),
    AmazingTimePickerModule

    
  


 

  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

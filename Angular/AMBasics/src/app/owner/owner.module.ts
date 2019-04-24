import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing.module';
import { MaterialModule } from './../material/material.module';
import { Header_Component } from 'src/app/owner/owner-list/navigation/header/header.component';
import { SidenavList_Component } from 'src/app/owner/owner-list/navigation/sidenav-list/sidenav-list.component'
import { Layout_Component } from 'src/app/owner/owner-list/layout/layout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OwnerListComponent,
    Header_Component,
    SidenavList_Component,
    Layout_Component
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    Header_Component,
    SidenavList_Component,
    Layout_Component

  ]
})
export class OwnerModule { }

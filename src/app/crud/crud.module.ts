import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { CreatebasicinfoComponent } from './createbasicinfo/createbasicinfo.component';
import { UpdatebasicinfoComponent } from './updatebasicinfo/updatebasicinfo.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    BasicinfoComponent,
    CreatebasicinfoComponent,
    UpdatebasicinfoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
    BsDatepickerModule,
    PaginationModule
  ]
})
export class CRUDModule { }

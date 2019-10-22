import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicinfoComponent } from './crud/basicinfo/basicinfo.component';
import { HomeComponent } from './home/home.component';
import { CreatebasicinfoComponent } from './crud/createbasicinfo/createbasicinfo.component';
import { UpdatebasicinfoComponent } from './crud/updatebasicinfo/updatebasicinfo.component';
import { NgxComponent } from './ngx/ngx.component';


const routes: Routes = [
  { path: 'Ngx', component: NgxComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Basicinfo', component: BasicinfoComponent },
  { path: 'Basicinfo/Createbasicinfo', component: CreatebasicinfoComponent },
  { path: 'Basicinfo/Updatebasicinfo/:id', component: UpdatebasicinfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

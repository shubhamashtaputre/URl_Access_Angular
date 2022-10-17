import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlaccessComponent } from './urlaccess/urlaccess.component';
import { UrlsettingComponent } from './urlsetting/urlsetting.component';

const routes: Routes = [
  {path:"",component:UrlaccessComponent},
  {path:"settings",component:UrlsettingComponent},
  {path:"home",component:UrlaccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { SinglereduxComponent } from './components/singleredux/singleredux.component';
import { SingleComponent } from './components/single/single.component';
import { HomeComponent } from './components/home/home.component';
import { MultiComponent } from './components/multi/multi.component';
import { ListingComponent } from './components/listing/listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path:'single', component: SingleComponent },
  {  path:'singleredux', component: SinglereduxComponent },
  {  path:'multi', component: MultiComponent },
  {  path:'listing', component: ListingComponent },
  {  path:'*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerAppComponent } from './components/container-app/container-app.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';
import { Page1Component } from './components/page1/page1.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      { path: 'pagea', component: PageaComponent },
      { path: 'pageb', component: PagebComponent },
      { path: 'pagec', component: PagecComponent }
    ]
  },
  { path: 'page1', component: Page1Component },
  { path: '**', pathMatch: 'full', redirectTo: 'pagea' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

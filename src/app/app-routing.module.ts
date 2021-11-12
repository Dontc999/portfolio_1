import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'styleGuide',
    loadChildren: () => import('./style-guide/style-guide.module').then(m => m.StyleGuideModule)
  },
  {
    path: '', component: AppComponent
  },
  {
    path: '', redirectTo: '/styleGuide', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

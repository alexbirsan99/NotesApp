import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { TagsPageComponent } from './tags-page/tags-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path:'tags',
        component: TagsPageComponent
      },
      {
        path: '',
        component: NotesPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

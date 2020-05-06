import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { OfficeComponent } from './office/office.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "project"},
  {path: "project", component: ProjectComponent},
  {path: "office", component: OfficeComponent},
  {path: "team", component: TeamComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

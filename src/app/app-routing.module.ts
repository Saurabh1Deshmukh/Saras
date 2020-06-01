import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "project"},
  {path: "project", component: ProjectComponent},
  {path: "services", component: ServicesComponent},
  {path: "profile", component: ProfileComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

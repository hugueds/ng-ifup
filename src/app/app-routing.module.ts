import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectContainerComponent } from './containers/project-container/project-container.component';
import { DetailsContainerComponent } from './containers/details-container/details-container.component';
import { ResponsibleContainerComponent } from './containers/responsible-container/responsible-container.component';
import { PrioritiesContainerComponent } from './containers/priorities-container/priorities-container.component';
import { VdtContainerComponent } from './containers/vdt-container/vdt-container.component';
import { ReportsContainerComponent } from './containers/reports-container/reports-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectContainerComponent },
  { path: 'responsibles', component: ResponsibleContainerComponent },
  { path: 'priorities', component: PrioritiesContainerComponent },
  { path: 'vdt', component: VdtContainerComponent },
  { path: 'reports', component: ReportsContainerComponent },
  { path: 'details/:id', component: DetailsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

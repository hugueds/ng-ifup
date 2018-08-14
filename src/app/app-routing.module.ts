import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectContainerComponent } from './containers/project-container/project-container.component';
import { DetailsContainerComponent } from './containers/details-container/details-container.component';
import { ResponsibleContainerComponent } from './containers/responsible-container/responsible-container.component';
import { PrioritiesContainerComponent } from './containers/priorities-container/priorities-container.component';
import { VdtContainerComponent } from './containers/vdt-container/vdt-container.component';
import { ReportsContainerComponent } from './containers/reports-container/reports-container.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ScheduleContainerComponent } from './containers/schedule-container/schedule-container.component';
import { CreateProjectContainerComponent } from './containers/create-project-container/create-project-container.component';
import { OrganizationComponent } from './containers/organization/organization.component';

const routes: Routes = [
  { path: '', redirectTo: 'automation/projects', pathMatch: 'full' },
  { path: 'automation/projects', component: ProjectContainerComponent },
  { path: 'automation/create', component: CreateProjectContainerComponent },
  { path: 'automation/responsibles', component: ResponsibleContainerComponent },
  { path: 'automation/priorities', component: PrioritiesContainerComponent },
  { path: 'vdt/deviations', component: VdtContainerComponent },
  { path: 'automation/reports', component: ReportsContainerComponent },
  { path: 'automation/organization', component: OrganizationComponent },
  { path: 'details/:id', component: DetailsContainerComponent },
  { path: 'schedule/:id', component: ScheduleContainerComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './modules/material/material.module';


import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { ProjectContainerComponent } from './containers/project-container/project-container.component';
import { DetailsContainerComponent } from './containers/details-container/details-container.component';
import { ResponsibleCardComponent } from './components/responsible-card/responsible-card.component';
import { ResponsibleContainerComponent } from './containers/responsible-container/responsible-container.component';
import { PrioritiesContainerComponent } from './containers/priorities-container/priorities-container.component';
import { VdtContainerComponent } from './containers/vdt-container/vdt-container.component';
import { ReportsContainerComponent } from './containers/reports-container/reports-container.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    ProjectTableComponent,
    ProjectContainerComponent,
    DetailsContainerComponent,
    ResponsibleCardComponent,
    ResponsibleContainerComponent,
    PrioritiesContainerComponent,
    VdtContainerComponent,
    ReportsContainerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

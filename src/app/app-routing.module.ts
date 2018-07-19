import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

const appRoutes: Routes = [
    { path: 'home', component: NavbarComponent },
    { path: 'test', component: FooterComponent, },
    { path: '', redirectTo: '/test', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, {
                enableTracing: true
            }
        )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}


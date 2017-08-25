import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroUpdateComponent } from './hero-update/hero-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero.service';

import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroUpdateComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroUpdateComponent
            }
        ])
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Components */
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroUpdateComponent } from './hero-update/hero-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/* Services */
import { HeroService } from './hero.service';

/* Router */
import { AppRoutingModule } from './app-routing.module';

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
        AppRoutingModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }

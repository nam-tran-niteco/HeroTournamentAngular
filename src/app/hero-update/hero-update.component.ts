import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import Hero from '../hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-hero-update',
    templateUrl: './hero-update.component.html',
    styleUrls: ['./hero-update.component.css']
})
export class HeroUpdateComponent implements OnInit {

    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))) // "+" stands for convert function from string to number
            .subscribe(hero => this.hero = hero)
    }

    goBack(): void {
        this.location.back();
    }

}

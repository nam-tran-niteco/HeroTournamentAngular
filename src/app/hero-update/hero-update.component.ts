import { Component, OnInit, Input } from '@angular/core';
import Hero from '../hero';

@Component({
    selector: 'app-hero-update',
    templateUrl: './hero-update.component.html',
    styleUrls: ['./hero-update.component.css']
})
export class HeroUpdateComponent implements OnInit {

    @Input() hero: Hero;

    constructor() { }

    ngOnInit() {
    }

}

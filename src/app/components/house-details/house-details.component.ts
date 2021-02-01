import { Component, OnInit, Input } from '@angular/core';
import {Info} from '../../classes/houses';

@Component({
    selector: 'house-details',
    templateUrl: 'house-details.component.html',
    styleUrls: ['house-details.component.scss']
})

export class HouseDetailsComponent implements OnInit {
    
    @Input() details: Info;

    constructor() { }

    ngOnInit() {}
}
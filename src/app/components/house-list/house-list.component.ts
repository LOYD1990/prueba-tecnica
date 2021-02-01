import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service'
import {Houses, Info} from '../../classes/houses';

@Component({
    selector: 'house-list',
    templateUrl: 'house-list.component.html',
    styleUrls: ['house-list.component.scss']
})

export class HouseListComponent implements OnInit {
    constructor(private houseService : HouseService) { }

    houses: Info[];
    links;

    ngOnInit() {
        this.loadData();
     }

    
    loadData() {

        this.houseService.getHouses().subscribe(
            (res: Houses) => {
                this.houses = res.housesInfo;
                this.links = res.housesLinks;
            },
            (err) => { console.log(err)},
            () => {}
        )
    }

    loadMoreHouses() {
        this.houseService.getNextHouses(this.links.next.href).subscribe(
            (res: Houses) => {
                this.houses.push(...res.housesInfo);
                this.links = res.housesLinks;
            },
            (err) => { console.log(err)},
            () => {}
        )
    }
}
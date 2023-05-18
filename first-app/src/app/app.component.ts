import { Component } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, filter, map, Subject } from 'rxjs';
import { AppService } from './app.service';
import { DogBreedInfo, DogBreedMap } from './pojo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dogBreeds = <DogBreedInfo[]>[];
  searchBreed$ = new Subject<any>();
  searchStr = "";

  constructor(private appService: AppService) {
    this.appService.getdogBreeds().subscribe((response: DogBreedMap) => {
      Object.keys(response).forEach(breed => {
        this.dogBreeds.push({
          name: response[breed].length ? breed + " (" + response[breed].length + ")" : breed,
          children: response[breed],
          showChildren: false
        });
      });
    });
    this.subscribeToSearchInput();
  }

  subscribeToSearchInput() {
    this.searchBreed$.pipe(
      debounceTime(1000),
      map((e: any) => e.target.value),
      distinctUntilChanged()
    ).subscribe(searchStr => {
      this.searchStr = searchStr;
    })
  }

  onBreedClick(breed: DogBreedInfo) {
    breed.showChildren = !breed.showChildren;
  }

}

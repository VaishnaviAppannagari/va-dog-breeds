
import { Pipe, PipeTransform } from '@angular/core';
import { DogBreedInfo } from './pojo';

@Pipe({name: 'filterBreed'})
export class FilterBreedPipe implements PipeTransform {
  transform(breeds: DogBreedInfo[], searchStr: string): DogBreedInfo[] {
    return searchStr ? breeds.filter((breed: DogBreedInfo) => breed.name.includes(searchStr)) : breeds;
  }
}
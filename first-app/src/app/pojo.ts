
export interface DogBreedMap {
    [key: string] : string[];
  }
  
export interface DogBreedInfo {
    name: string,
    children: string[];
    showChildren?: boolean;
}
  
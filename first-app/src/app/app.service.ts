import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AppService {
    constructor(private http: HttpClient) {}

    getdogBreeds() {
        return this.http.get('https://dog.ceo/api/breeds/list/all').pipe(
            map((response: any) => response.status === "success" ? response.message : [])
        )
    }
}
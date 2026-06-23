import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SalutiData {
    constructor(private HttpClient: HttpClient){}

    getSaluti = (): Observable<Object> => this.HttpClient.get('http://localhost:8050/api/saluti');
}

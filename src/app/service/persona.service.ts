import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PersonaService {
 //URL = environment.URL + 'personas/';
 URL = 'http://localhost:8080/personas/';


constructor(private http: HttpClient) {}

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + `traer/perfil`);
  }
}

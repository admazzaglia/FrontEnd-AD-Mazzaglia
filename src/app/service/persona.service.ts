import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/model/persona.model';



@Injectable({
  providedIn: 'root',
})
export class PersonaService {
 //URL = environment.URL + 'personas/';
 URL = 'http://localhost:8080/personas/';



constructor(private httpClient: HttpClient) {}

public lista(): Observable<persona[]>{
  return this.httpClient.get<persona[]>(this.URL + `lista`);
}

public detail(id: number): Observable<persona>{
  return this.httpClient.get<persona>(this.URL + `detail/${id}`);
}


public update(id: number, Persona: persona): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
}

/* public save(persona: Persona): Observable<any>{
  return this.httpClient.post<any>(this.URL + `create`, persona);
}*/

/*public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}*/

}

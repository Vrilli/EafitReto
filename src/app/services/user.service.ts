import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private htttp = inject(HttpClient)

  constructor(private http: HttpClient) { }

  private API_ENDPOIND = "https://66734e1c6ca902ae11b3cbd2.mockapi.io/";
  private PLATZI_ENDPOINT= 'https://api.escuelajs.co/api/v1/'
  registerUser(dataSent: Object): Observable<any> {
    return this.http.post<any>(this.API_ENDPOIND + "Users", dataSent);
  }
  authUser(dataSent:object):Observable<any>{
    return this.http.post<any>(this.PLATZI_ENDPOINT+"auth/login",dataSent);
  }
}

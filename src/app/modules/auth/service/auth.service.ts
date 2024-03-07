import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConstants } from 'src/app/constants/url.constants';
import { LoginResponse } from 'src/app/models/login-response.model';
import { LoginRequest } from '../models/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }


  login(request:LoginRequest):Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(urlConstants.auth, request);
  }


}

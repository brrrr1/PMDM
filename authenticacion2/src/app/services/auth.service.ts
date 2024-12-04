import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRequestTokenResponse } from '../models/interfaces/create-request-token-interfacte';

// Screamming snake case
const API_KEY = '433d2c486572afb242c6fe7c1ddc6771';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // STEP 1
  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    );
  }

  //STEP 3
  createSession(): Observable<> {
    return this.http.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
      {
        request_token: localStorage.getItem('token'),
      }
    );
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  entrar(usuarioLogin:UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/api/v1/recycleMe/usuario/logar',usuarioLogin)
  }

  cadastrar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/api/v1/recycleMe/usuario/cadastrar',usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/api/v1/recycleMe/usuario/${id}`)
  }

  logado(){
    let ok = false

    if(environment.token!= ''){
      ok = true
    }

    return ok
  }

  
  
}

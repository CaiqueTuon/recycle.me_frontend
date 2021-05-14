import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/api/v1/recycleMe/produto')
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/api/v1/recycleMe/produto/${id}`, this.token)
  }

  getByCategoria(categoria: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/api/v1/recycleMe/produto/produtoCategoria/${categoria}`)
  }

  getByProdutoUsuario(usuario: number): Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/api/v1/recycleMe/usuario/nomeUsuario/${usuario}`, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`http://localhost:8080/api/v1/recycleMe/produto/${id}`, this.token)
  }

  registrar(produto:Produto, idUsuario:number): Observable<Produto>{
    return this.http.post<Produto>(`http://localhost:8080/api/v1/recycleMe/usuario/produto/novo/${idUsuario}`, produto)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('http://localhost:8080/api/v1/recycleMe/produto', produto, this.token)
  }
  
}

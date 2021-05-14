import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Avaliacao } from '../model/Avaliacao';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]

  avaliacao: Avaliacao = new Avaliacao();
  listaAvaliacao: Avaliacao[]  

  categoria: string
  categorias = ['METAL','PAPEL','PLASTICO','VIDRO', 'MADEIRA']

  constructor(
    private produtoService: ProdutoService,
    public auth: AuthService
  ){ }
  ngOnInit() {
    window.scroll(0,0)
    this.findAllProduto()
  }
  findAllProduto(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  } 
  tipoCategoria(event: any){
    this.categoria = event.target.value
    console.log(this.categoria)
  }

  aplicar(){
    this.produtoService.getByCategoria(this.categoria).subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }
  cancel(){
    this.findAllProduto()
  }
}

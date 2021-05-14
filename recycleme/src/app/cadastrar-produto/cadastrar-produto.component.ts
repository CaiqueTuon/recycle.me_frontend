import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  usuario: Usuario = new Usuario() 
  categoria: string
  idUser = environment.id
  categorias: string[] = ['METAL','PAPEL','PLASTICO','VIDRO','MADEIRA']

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      this.alertas.showAlertInfo("Você precisa estar logado para cadastrar produto! Sua sessão deve ter sido encerrada, efetue login novamente")
    }
  }

  tipoCategoria(event: any){
    this.categoria = event.target.value
  }


  registrar(){
    this.produto.categoria = this.categoria
    console.log(this.idUser)
    console.log(this.produto)
    this.produtoService.registrar(this.produto, this.idUser).subscribe((resp: Produto) =>{
      this.produto = resp
      this.router.navigate(['/detalhe'])
      this.alertas.showAlertSuccess('Produto registrado com sucesso!')
    })

    console.log(this.registrar)
  }
  
}

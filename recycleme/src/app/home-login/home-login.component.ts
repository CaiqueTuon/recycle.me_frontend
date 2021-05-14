import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css'],
})
export class HomeLoginComponent implements OnInit {
  idUser = environment.id;
  idUsuarioLogin = this.idUser;

  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  usuario: Usuario = new Usuario();
  listaUsuario: Usuario[];

  produto: Produto = new Produto();
  listaProduto: Produto[];

  idProduto: number;
  categoria: string;
  categorias: string[] = ['METAL', 'PAPEL', 'PLASTICO', 'VIDRO', 'MADEIRA'];

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0,0)
    
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
      alert("Você precisa estar logado para cadastrar produto! Sua sessão deve ter sido encerrada, efetue login novamente")
    }
    this.findByIdUser();
  
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUsuarioLogin).subscribe((resp: Usuario) => {
        this.usuario = resp;
      });
  }
  showModal(id: number) {
    this.idProduto = id;
    this.findByProdutoId()
    console.log(this.produto)
  }
  apagar() {
    this.produtoService.deleteProduto(this.idProduto).subscribe(() => {
      this.alertas.showAlertDanger('Produto apagado com sucesso');
      this.findByIdUser();
    });
  }

  tipoCategoria(event: any) {
    this.categoria = event.target.value;
  }

  atualizar(){
    console.log(this.produto)
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      console.log(this.produto)
      this.produto = resp
      this.alertas.showAlertSuccess('Produto atualizado com sucesso')
      this.findByIdUser()
    })
  }

  findByProdutoId(){
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin:UsuarioLogin = new UsuarioLogin()

  user: Usuario = new Usuario()

  constructor(
    private auth:AuthService,
    private router:Router

  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp:UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.usuario = this.usuarioLogin.usuario
      environment.id = this.usuarioLogin.id
      this.router.navigate(['/home', this.usuarioLogin])

<<<<<<< HEAD
      this.router.navigate(['/cadastrarProduto'])
=======
      console.log(this.user.id)
      console.log(this.usuarioLogin.id)
      console.log(this.usuarioLogin.usuario)
      console.log(this.usuarioLogin.senha)
>>>>>>> 134f2ba4d9fd20e7ca6db8555374a031ad090d13

      
    },erro=> {
      if(erro.status == 500){
        alert('Usuario ou Senha incorreta!!')
      }
    })

  }

}

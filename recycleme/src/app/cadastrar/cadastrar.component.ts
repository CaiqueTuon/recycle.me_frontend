import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario:Usuario = new Usuario
  confirmarSenha:string


  constructor(
    private authService:AuthService,
    private router:Router,
    private formBuider: FormBuilder,
    private alertas: AlertasService

  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
  }

  confirmSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  cadastrar(){
    if(this.usuario.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('Senha Incorreta!!')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp 
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso!')
      })
    } 
    (erro: { status: number; })=>{
    if(erro.status == 400){
      this.alertas.showAlertInfo('É necessário preencher todos os dados corretamente.')
    }else{
      this.alertas.showAlertSuccess('Usuario cadastrado com sucesso!')
    }
  }

    
  }

  

  
 


}

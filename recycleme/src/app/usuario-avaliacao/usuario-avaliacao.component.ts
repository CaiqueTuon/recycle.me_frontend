import { Component, OnInit } from '@angular/core';
import { Avaliacao } from '../model/Avaliacao';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { UsuarioAvaliacaoService } from '../service/usuario-avaliacao.service';

@Component({
  selector: 'app-usuario-avaliacao',
  templateUrl: './usuario-avaliacao.component.html',
  styleUrls: ['./usuario-avaliacao.component.css']
})
export class UsuarioAvaliacaoComponent implements OnInit {
  avaliacao: Avaliacao = new Avaliacao();
  listaAvaliacao: Avaliacao[];
  userLogin: UsuarioLogin = new UsuarioLogin;

  constructor(
    private avaliacaoService: UsuarioAvaliacaoService,
    private alertas: AlertasService
    ) { }

  ngOnInit(): void {
  }
  findAvaliacaoId(){
    this.avaliacaoService.getAvaliacaoId().subscribe((resp: Avaliacao) =>{
      this.avaliacao = resp
    })
  }

// Retorna uma lista baseado em um número de 0 a 5
  findAvaliacao(){
    this.avaliacaoService.getAvaliacao().subscribe((resp: Avaliacao[]) =>{
      this.listaAvaliacao = resp
    })
  }

  findAvaliacaoMaior(){
    this.avaliacaoService.getAvaliacaoMaior().subscribe((resp: Avaliacao[]) => {
      this.listaAvaliacao = resp
    })
  }

  cadastrar() {
    this.avaliacaoService
      .postAvaliacao(this.avaliacao)
      .subscribe((resp: Avaliacao) => {
        this.avaliacao = resp;
        this.alertas.showAlertSuccess('Avaliação postada com sucesso!');
        this.avaliacao = new Avaliacao();


        console.log(this.userLogin.id)
      });
  }
}

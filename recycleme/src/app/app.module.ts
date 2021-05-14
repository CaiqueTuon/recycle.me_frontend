import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HashLocationStrategy,LocationStrategy} from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { DicasComponent } from './dicas/dicas.component';
import { UsuarioAvaliacaoComponent } from './usuario-avaliacao/usuario-avaliacao.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AlertasComponent } from './alertas/alertas.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    CadastrarComponent,
    FooterComponent,
    HomeComponent,
    CadastrarProdutoComponent,
    HomeLoginComponent,
    ProdutoDetalheComponent,
    EditarPerfilComponent,
    SobreNosComponent,
    DicasComponent,
    UsuarioAvaliacaoComponent,
    CategoriaComponent,
    AlertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

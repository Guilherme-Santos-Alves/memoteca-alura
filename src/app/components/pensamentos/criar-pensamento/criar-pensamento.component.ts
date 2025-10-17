import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../services/pensamento.service';
import { IPensamento } from '../Ipensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private pensamentoService: PensamentoService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.pensamentoService.criarPensamento(this.pensamento).subscribe();
    alert("Novo pensamento criado!");
    this.router.navigateByUrl('/listarPensamento');
  }

  cancelar() {
    alert("Ação cancelada!");
    this.router.navigateByUrl('/listarPensamento');
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../Ipensamento';
import { PensamentoService } from '../services/pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  excluirPensamento(){
    alert('quer excluir?');
  }

}

import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from '../Ipensamento';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '', 
    modelo: ''
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log('chegou');

    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });

  }

  excluirPensamento() {
    if(this.pensamento.id) {
        this.pensamentoService.deletar(this.pensamento.id).subscribe(() => {
            this.router.navigate(['/listarPensamento']);
        });
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

}

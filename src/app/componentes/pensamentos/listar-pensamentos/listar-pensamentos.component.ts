import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  listaPensamentos: Pensamento[] = [];
  filtro: string = '';
  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((l) => {
      this.listaPensamentos = l;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe((p) => {
      this.listaPensamentos.push(...p);
      if (!p.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro).subscribe((p) => {
      console.log(p);
      this.listaPensamentos = p;
    });
  }
}

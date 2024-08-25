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
  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((l) => {
      this.listaPensamentos = l;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual).subscribe((p) => {
      this.listaPensamentos.push(...p);
      if (!p.length) {
        this.haMaisPensamentos = false;
      }
    });
  }
}

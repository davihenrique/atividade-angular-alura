import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = ' http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar(pagina: number): Observable<Pensamento[]> {
    const itemPorPagina = 6;

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itemPorPagina);

    return this.http.get<Pensamento[]>(this.API, { params: params });
  }

  criar(p: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, p);
  }

  editar(p: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${p.id}`;
    return this.http.put<Pensamento>(url, p);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}

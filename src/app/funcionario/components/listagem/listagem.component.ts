import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {
  NgbdSortableHeader,
  SortEvent,
} from './../../../shared/directives/sort.directive';
import { Lancamento, LancamentoService } from './../../../shared/';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  compare = (v1, v2) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
  dataSource: Lancamento[];
  msg: string;

  page = 1;
  pageSize = 10;

  lancamento: Lancamento[];


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(private lancamentoService: LancamentoService) {
    //this.refreshPages();
  }

  ngOnInit(): void {
    this.lancamentoService.listarTodosLancamentos().subscribe(
      (data) => {
        this.dataSource = data['data'];
      },
      (err) => {
        this.msg = 'Erro obtendo lancamento';
      }
    );
  }

  onSort({ column, direction }: SortEvent) {
    console.log(column, direction);
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '') {
      this.dataSource = this.dataSource;
    } else {
      this.dataSource = [...this.dataSource].sort((a, b) => {
        const res = this.compare(a[column], b[column]);

        return direction === 'asc' ? res : -res;
      });
    }
  }

  // refreshPages(){
  //   this.lancamentoService.listarTodosLancamentos().subscribe(
  //     (data) => {
  //       this.dataSource = data['data'];
  //       this.lancamento = this.dataSource
  //       .map((pagina, i) => ({id: i + 1, ...pagina}))
  //       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  //     },
  //     (err) => {
  //       this.msg = 'Erro obtendo lancamento';
  //     }
  //   );
  //   console.log("datasource!", this.dataSource);
  //   // this.lancamento = this.dataSource
  //   // .map((pagina, i) => ({id: i + 1, ...pagina}))
  //   // .slice((this.page - 1) * this.pageSize, (this.page -1) * this.pageSize + this.pageSize);
  // }
}

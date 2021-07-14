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

  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit(): void {
    this.lancamentoService.listarTodosLancamentos().subscribe(
      (data) => {
        this.dataSource = data['data'];
        console.log(data.tipo);
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
}

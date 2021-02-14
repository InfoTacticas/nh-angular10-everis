import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss']
})
export class BookDetailPageComponent implements OnInit {

  bookId: number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookId = this.getBookId(params);
        console.log(`El parámetro es: `, params);
      }
    );
    // proporciona un observble asincrono y hay que suscribirse
  }

  getBookId(params: Params): number{
    return Number(params.id);
  }

}

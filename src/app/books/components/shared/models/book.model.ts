import { CurrencyPipe, DatePipe } from "@angular/common";

export class BookModel {
  book_id;
  book_title;
  price;
  release_date;
  eddition;
  publisher_id;
  constructor(element) {
    this.book_id = element?.book_id;
    this.book_title = element?.book_title;
    this.price = this.pricePipe(element?.price);
    this.release_date = this.date(element?.release_date);
    this.eddition = element?.eddition;
    this.publisher_id = element?.publisher_id;
  }

  private date(encodedDate): string {
    let datePipe = new DatePipe("en-US");
    return datePipe.transform(encodedDate, "dd/MM/yyyy");
  }

  private pricePipe(data) {
    let currencyPipe = new CurrencyPipe("en-US");
    return currencyPipe.transform(data);
  }
}


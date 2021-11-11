import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pager = { currentPage: 1, totalPages: 1 };
  displayPageSet = [1, 2, 3, 4];
  recordsPerPage = 25;
  constructor() { }

  ngOnInit(): void {
    
  }
  
  setPagination(pageNumber: number) {
    if (pageNumber > 2) {
      if (pageNumber === this.displayPageSet[0]) {
        this.displayPageSet = [pageNumber - 1, pageNumber, pageNumber + 1, pageNumber + 2];
      } else if (pageNumber === this.displayPageSet[1]) {
        this.displayPageSet = [pageNumber - 2, pageNumber - 1, pageNumber, pageNumber + 1];
      } else {
        if (pageNumber >= (this.pager.totalPages - 3)) {
          this.displayPageSet = [this.pager.totalPages - 4, this.pager.totalPages - 3, this.pager.totalPages - 2, this.pager.totalPages - 1, this.pager.totalPages];
        } else {
          const removedPage = this.displayPageSet.shift();
          this.displayPageSet.push(removedPage + 4);
        }
      }
    } else {
      this.displayPageSet = [1, 2, 3, 4];
    }
  }

  onPagination(pageNumber: number) {
    this.pager.currentPage = pageNumber;
    this.onSearchClick();
  }
}

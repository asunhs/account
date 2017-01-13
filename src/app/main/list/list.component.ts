import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  items:any[] = [{
      title: 'good1'
  }, {
      title: 'good2'
  }, {
      title: 'good3'
  }, {
      title: 'good4'
  }, {
      title: 'good2'
  }, {
      title: 'good3'
  }, {
      title: 'good4'
  }, {
      title: 'good2'
  }, {
      title: 'good3'
  }, {
      title: 'good4'
  }, {
      title: 'good2'
  }, {
      title: 'good3'
  }, {
      title: 'good4'
  }, {
      title: 'good4'
  }, {
      title: 'good2'
  }, {
      title: 'good3'
  }, {
      title: 'good4'
  }, {
      title: 'good2'
  }, {
      title: 'good3'
  }, {
      title: 'good4'
  }, {
      title: 'good2'
  }, {
      title: 'good3'
  }, {
      title: 'good4'
  }];

  constructor() { }

  ngOnInit() {
  }

}

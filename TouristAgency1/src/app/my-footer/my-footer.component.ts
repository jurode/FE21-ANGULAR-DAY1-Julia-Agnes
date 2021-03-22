import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {
  company = "Agnes & Julia GmbH";
  constructor() { }

  ngOnInit(): void {
  }

}

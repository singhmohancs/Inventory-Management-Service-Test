import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inline-loader',
  templateUrl: './inline-loader.component.html',
  styleUrls: ['./inline-loader.component.scss']
})
export class InlineLoaderComponent implements OnInit {

  @Input() color :string = 'primary';
  @Input() size :number = 50;
  @Input() loading:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

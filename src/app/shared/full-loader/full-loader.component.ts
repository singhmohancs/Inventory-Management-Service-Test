import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'full-loader',
  templateUrl: './full-loader.component.html',
  styleUrls: ['./full-loader.component.scss']
})
export class FullLoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}

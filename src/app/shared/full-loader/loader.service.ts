import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading: boolean = false;
  constructor() { }

  show() {
    this.loading = true;
  }

  hide() {
    this.loading = false;
  }

  get isLoading(): boolean {
    return this.loading;
  }
}

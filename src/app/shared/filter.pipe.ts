import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(data: any, searchTerm: any): any {
    if (!searchTerm) return data;
    
    return data[0].name ? data.filter(item => item && item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) : 
    data.filter(item => item && item.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}

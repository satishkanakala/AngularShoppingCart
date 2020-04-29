import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productList, searchTerm) {
  if (!productList || !searchTerm) {
  return productList;
  }
  return productList.filter((item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}


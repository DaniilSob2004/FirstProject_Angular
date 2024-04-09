import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersAudience'
})
export class FiltersAudiencePipe implements PipeTransform {
  transform(
      arr: any[],
      sortFunc: (a: any, b: any) => any,
      facultyIndex?: number): any[] {
    if (arr.length === 0) {
      return arr;
    }
    arr = arr.sort(sortFunc);

    if (facultyIndex !== -1) {
      arr = arr.filter(a => a.facultyId === facultyIndex);
    }
    return arr;
  }
}

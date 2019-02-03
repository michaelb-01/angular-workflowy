import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint'
})
export class PrettyprintPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

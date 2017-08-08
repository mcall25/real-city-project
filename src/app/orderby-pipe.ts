/**
 * Created by codev on 8/7/17.
 */
/**
 * Created by codev on 8/7/17.
 */
/**
 * Created by codev on 7/1/17.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderBy implements PipeTransform{

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter( (item:any) => this.applyFilter(item, filter));

  }

  applyFilter(key: any, filter: any): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (key[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (key[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }

}

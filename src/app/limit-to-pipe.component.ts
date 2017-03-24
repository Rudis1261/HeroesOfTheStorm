import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'limitTo'})
export class LimitToPipe implements PipeTransform {
  transform(value, limit:number, useWordBoundary: boolean) : any {
    if (!value || !limit) {
      return false;
    }
    let isTooLong:boolean = (value.length > limit);
    let s_:any = (isTooLong) ? value.substr(0, (limit - 1)) : value;
    s_ = (useWordBoundary && isTooLong) ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
    if (s_ == "") {
      s_ = isTooLong ? value.substr(0,limit-1) : value;
    }
    return isTooLong ? s_ + '...' : s_;
  }
}
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {

  transform(url: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  constructor(private sanitizer: DomSanitizer){}


}

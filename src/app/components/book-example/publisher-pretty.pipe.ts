import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publisherPretty'
})
export class PublisherPrettyPipe implements PipeTransform {

  transform(value: string): string {
    const publishers = value.split('&').map( p => p.trim() );
    let newValue = '';
    for(let p in publishers){
      newValue += `<< ${ publishers[p] } >>`;
    }
    return newValue;
  }

}

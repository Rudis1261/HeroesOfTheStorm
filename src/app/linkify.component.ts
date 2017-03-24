import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({name: 'linkify'})
    export class LinkifyPipe implements PipeTransform {
      transform(link: string): string {
        return this.linkify(link);
      }

      private linkify(plainText): string{

        if (!plainText.replace) {
          return plainText;
        }

        let replacedText, replacePattern1, replacePattern2, replacePattern3;

        // URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b((https?|ftp|file):\/\/|(www))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]*)/ig;
        replacedText = plainText.replace(replacePattern1, '<a href="$1" class="external" target="_blank">$1</a>');

        // Twitter @ mentions
        replacePattern2 = /(@|#)\w+/g;
        let mentions = plainText.match(replacePattern2);
        if (mentions && mentions.length > 0) {
          mentions.forEach((match) => {
            replacedText = replacedText.replace(match, '<a target="_blank" class="external" href="https://twitter.com/' + match + '">' + match + '</a>');
          });
        }

        return replacedText;
       }
    }
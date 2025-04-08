import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from 'src/app/config/constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string, defaultPath = APP_CONST.defaultPath): string {
    return path.trim() ? path : defaultPath;
  }

}

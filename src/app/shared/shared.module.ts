import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ImageSourceDirective } from './directives/image-source.directive';

const PIPES = [];
const DIRECTIVES = [ImageSourceDirective];

const matModules = [MatIconModule, MatButtonModule, MatTableModule];
@NgModule({
  declarations: [...PIPES, ...DIRECTIVES],
  imports: [CommonModule, matModules],
  entryComponents: [],
  exports: [...PIPES, ...DIRECTIVES],
  providers: [...PIPES],
})
export class SharedModule {}

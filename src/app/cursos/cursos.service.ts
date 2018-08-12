import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  curso: String[] = ['Angular2', 'Java', 'Cordova'];
  emitirCursoCriado = new EventEmitter<String>();

  // tslint:disable-next-line:member-ordering
  static criouNovoCurso = new EventEmitter<String>();

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos() {
      this.logService.consoleLog('Obtendo lista de cursos');
      return this.curso;
  }
  addCurso(curso: String) {
    this.curso.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);

    this.logService.consoleLog(`Criando novo curso ${curso}`);
  }
}

import { UploadService } from './../../services/upload.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
// import { MoviesService } from './movies.service';

@Injectable()
export class SinglereduxEffects {

  constructor(
    private actions$: Actions,
    private upService: UploadService
  ){}

  // loadSingle$ = createEffect(() => this.actions$.pipe(
  //   ofType('SINGLE_UPLOAD'),
  //   mergeMap(() => this.upService.getAllFiles
  //     .pipe(
  //       map(movies => ({ type: 'SINGLE_UPLOAD', payload: movies })),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );
}

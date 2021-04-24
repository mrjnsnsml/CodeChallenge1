import { ISingle } from './singleredux.model';
import { Action } from '@ngrx/store';

export const SINGLE_UPLOAD = 'SINGLE_UPLOAD';

export function addISingleReducer(state: ISingle[] = [], action) {
  switch (action.type) {
    case SINGLE_UPLOAD:
        console.log('-------');
        return [...state, action.payload];
    default:
        return state;
    }
}

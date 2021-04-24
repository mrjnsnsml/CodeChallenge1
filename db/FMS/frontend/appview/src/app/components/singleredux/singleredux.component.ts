import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { ISingle } from './singleredux.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singleredux',
  templateUrl: './singleredux.component.html',
  styleUrls: ['./singleredux.component.css']
})
export class SinglereduxComponent implements OnInit {
  singleState: Observable<ISingle>;
  singleFile; singleFileName;

  constructor(
    private store: Store<AppState>,
    public upServ: UploadService
  ) {
    this.singleState = this.store.select(state => state.singleState);
  }

  ngOnInit(): void {
  }

  handleFilePath(event: any){
    this.singleFileName = event.target.files[0]['name'];
    this.singleFile = event.target.files[0];
    this.upServ.singleSuccessFlag = false;
  }

  addSingle(event, name) {
    this.upServ.uploadBegin = true; this.upServ.uploadEnd = false; this.upServ.currentFiles = [];
    this.upServ.currentFiles.push(this.singleFileName);
    this.upServ.uploadMode = 'single';

    // setTimeout(()=>{
    //   this.upServ.uploadSingle(event, this.singleFile, this.singleFileName);
    // }, 3000);

    this.store.dispatch({
      type: 'SINGLE_UPLOAD',
      payload: <ISingle> {
        file_name: this.singleFileName,
      }
    });

  }

}

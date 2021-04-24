import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {
  files:string[] = [];
  filenames:string[] = [];
  fileExts = []; filteredExts = [];

  constructor(
   public upServ: UploadService,
  ) { }

  ngOnInit(): void {
  }

    handleMultiFilePath(event){
      console.log(event.target.files.length);
      this.files =[], this.filenames=[];
      for (let i = 0; i<= event.target.files.length -1 ; i++){
        this.files.push(  event.target.files[i] );
        this.filenames.push( event.target.files[i]['name'] );
      }
      if(this.filenames.length > 0 ) this.checkFileExts();
    }

    checkFileExts(){
      this.filteredExts = this.filenames.filter((item, i)=>{
        let pattern = /(pdf|docx|xlsx|xlsm)/g;
        return !item.match(pattern)
      });
      console.log(this.filteredExts, this.filteredExts.length);
    }

    handleMulti(event){
      this.upServ.uploadBegin = true; this.upServ.uploadEnd = false; this.upServ.currentFiles = [];
      this.upServ.currentFiles.push(this.filenames);
      this.upServ.uploadMode = 'multi';

      setTimeout (() => {
        this.upServ.uploadMulti(event, this.files, this.filenames);
      }, 3000);
    }
}

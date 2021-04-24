import { Component, OnInit } from '@angular/core';
import { UploadService } from './../../services/upload.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  singleFileName: string;
  singleFile: string;
  fileExts = []; filteredExt;

  constructor( public upServ: UploadService) { }

  ngOnInit(): void {
  }

  handleFilePath(event: any){
    this.singleFileName = event.target.files[0]['name'];
    this.singleFile = event.target.files[0];
    this.upServ.singleSuccessFlag = false;
    this.checkFileExts();
  }

  checkFileExts(){
    let pattern = /(pdf|docx|xlsx|xlsm)/g;
    this.filteredExt = !this.singleFileName.match(pattern);
    // .filter((item, i)=>{
    //   let pattern = /(pdf|docx|xlsx|xlsm)/g;
    //   return !item.match(pattern)
    // });
    // console.log(this.filteredExts, this.filteredExts.length);
  }

  handleSingle(event, inputVal){
    this.upServ.uploadBegin = true; this.upServ.uploadEnd = false; this.upServ.currentFiles = [];
    this.upServ.currentFiles.push(this.singleFileName);
    this.upServ.uploadMode = 'single';

    setTimeout(()=>{
      this.upServ.uploadSingle(event, this.singleFile, this.singleFileName);
    }, 3000);
  }
}

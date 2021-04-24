import { singleurl, multiurl, getAllFiles } from './../constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  singleurl: string = singleurl;
  multiurl: string = multiurl;
  getAllFiles: string = getAllFiles;

  uploadBegin: boolean = false;
  uploadEnd: boolean = false;
  currentFiles:any[];
  uploadMode: string;

  singleSuccessFlag: boolean = false;
  singleErrFlag: boolean = false;

  multiSuccessFlag: boolean = false;
  multiErrFlag:boolean = false;

  constructor(private http: HttpClient) { }

  // SINGLE

  uploadSingle(event, file, filename){
    // this.uploadBegin = true;

    const formData = new FormData();
    formData.append('dataFile', file, filename);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    this.http.post( this.singleurl, formData, { headers: headers } )
             .subscribe((res)=>{ this.singleSuccessFlag = true; this.singleErrFlag = false; this.uploadEnd = true;
                            console.log(res['file']['path']);
                        },
                        (err)=>{ this.singleErrFlag = true; this.singleSuccessFlag = false; this.uploadEnd = true; }
             );
    // this.uploadBegin = false;
  } // uploadSingle ends

  // MULTIPLE

  uploadMulti(event, files, filenames){
    // console.log('x2: ', files, filenames, files.length);
    // this.uploadBegin = true;

    const formData = new FormData();
    for(let i=0; i < files.length ; i++){
      formData.append('dataFiles', files[i]);
    }

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    this.http.post( this.multiurl, formData, { headers: headers } )
             .subscribe((res)=>{ this.multiSuccessFlag = true; this.multiErrFlag = false; this.uploadEnd = true; },
                        (err)=>{ this.multiErrFlag = true; this.multiSuccessFlag = false; this.uploadEnd = true; }
             );
    // this.getAllFilesApi();
    // this.uploadBegin = false;

  } // uploadMulti ends


  getAllFilesApi(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.get(this.getAllFiles);
  }

}

import { PreviewComponent } from './../../components/preview/preview.component';
import { getAllFiles, pdfService } from './../../constant';
import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';
// import { saveAs } from 'file-saver';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  myThis = this;
  myWin;
  columnDefs = [
    { headerName: 'File', field: 'file', sortable:true, filter:true, suppressSizeToFit: true, width: 200 },
    { headerName: 'Ext.', field: 'extension', sortable:true, filter:true, width: 80 },
    { headerName: 'FileSize', field: 'fileSizeInBytes', sortable:true, filter:true, width: 100 },
    { headerName: 'Download', field: 'download', sortable:true, filter:true, width: 100,
      cellRenderer: (params)=>{
        let url = `${pdfService}/${params.value}`;
        return `<a download href="${url}" >Download</a>`
      }
    },
    {
      headerName: 'Preview',
      cellRendererFramework: PreviewComponent,
    }
  ];

//   { headerName: 'Preview', field: 'preview', sortable:true, filter:true, flex: 1, floatingFilter:true,
//   cellRenderer: (params)=>{
//     let url = `${pdfService}/${params.value}`;
//     let file=`${params.value}`;
//     return `<button style="height:25px; width:70px" onclick="${this.loadComp(url, file )}">Preview</button>
//             `
//   }
// }
              // <a href="javascript:void()" onClick="return false"><b>PreviewDoc</b></a>
              // <app-preview [filename]="${params.value}" [url]="${url}">Preview Doc</app-preview>



  //(mouseover)="openWindow(url, params.value)" (mouseout)="closeIt()"

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  rowData:any;

  constructor( private upServ:UploadService
    ) { }

  ngOnInit(): void {
    this.getRowData();
  }

  getRowData(){
    this.upServ.getAllFilesApi().subscribe((data)=>{
      this.rowData = data;
      this.createDownloadLink();
    })
  }

  createDownloadLink(){
    // //  setTimeout(()=>{
    //   this.rowData.forEach((item, i)=>{
    //     console.log ( item );
    //   });
    // //  }, 1000);

  }

  // openWindow(url, name)
  // {
  //   this.myWin = window.open("","nCt", "left=0,width=272,height=54,status=no,toolbar=no,menubar=no,scrollbars=no");
  // }

  closeIt(){
    if (!this.myWin.closed)
    this.myWin.self.close()
  }

  openWindow(url){
    window.open(url, "_blank", "width=500, height=500, scrollbars=yes, resizeable=yes, menubar=no");
  }

  loadComp(url, file){
    console.log('111111', url, file);
  }
}

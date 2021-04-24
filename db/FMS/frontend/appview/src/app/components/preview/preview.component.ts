import { Component, OnInit } from '@angular/core';
import { pdfService } from '../../constant';

@Component({
  selector: 'app-preview',
  // templateUrl: './preview.component.html',
  template: ` <a (click)="handleClick()" > Preview </a>`,
  styleUrls: ['./preview.component.css']
})

// href=\"{{ mypdfService + '\' + myparams.data.file }}\"
export class PreviewComponent implements OnInit {
  myparams: any;
  mypdfService = pdfService;

  agInit(params: any){
    this.myparams = params;
    // console.log(this.myparams);
  }

  constructor() { }

  handleClick(){
    let url = this.mypdfService + this.myparams.data.file;
    let win = window.open("", "_blank", "height=200,width=200,titlebar=no,menubar=no,toolbar=no,location=no,status=no");
    // win.document.write(`<iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>`);
    win.document.write(`<iframe width="560" height="315" src="${url}" frameborder="0" ></iframe>`);
  }

  ngOnInit(): void {
  }

}

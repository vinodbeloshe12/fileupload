import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: any;
  images: any;
  title = 'app';

  constructor(private fileService: FileService) { }
  ngOnInit() { this.getImageData(); }
  getImageData() {
    this.fileService.getImages().subscribe(
      data => { this.images = data.result },
      error => this.errorMessage = error
    )
  }
}

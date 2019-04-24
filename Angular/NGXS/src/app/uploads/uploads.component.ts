import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from '../Service/file-upload.service'

const MAX_SIZE: number = 1000048576;

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})

export class UploadsComponent implements OnInit {
  
  profileForm:FormGroup;
  error:string;
  fileUpload = { status: '', message: '', filePath: '' };

  constructor(private fb:FormBuilder,private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name:[''],
      content:['']
    });
  }

  onSelectedFile(event){
    if(event.target.files.length>0){
      const content= event.target.files[0];
      this.profileForm.get('content').setValue(content);
    }
  }

  onSubmit() {
    debugger;
    const formData = new  FormData();
   formData.append('name',this.profileForm.get('name').value);
    formData.append('content',this.profileForm.get('content').value);
    // let jsonData = {
    //   fileName: this.profileForm.get('content').value.name,
    // }
   // console.log(jsonData);
    this.fileUploadService.upload(formData).subscribe(
      res => this.fileUpload = res,
      err => this.error = err,  
  );

    console.log(this.profileForm);

  }
  
 }

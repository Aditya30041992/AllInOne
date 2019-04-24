import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UploadImageService {

  constructor(private http : HttpClient) { }

  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:28101/api/UploadImage';
    const formData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
   
    return this.http
      //.post(endpoint, formData);
      .post(endpoint, formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(
        map(event => this.getEventMessage(event, formData)),
        //catchError(this.handleError)
      );
      
  }
  private getEventMessage(event:HttpEvent<any>,formData){

    switch(event.type){
  
      case HttpEventType.UploadProgress:
      return this.fileUploadProgress(event);
      
      case HttpEventType.Response:
      return this.apiResponse(event);
      
      default:
      return `File "${formData.get('Image').name}" surpriseing upload event: ${event.type}`;
    }
  }
  
  private fileUploadProgress(event){
    const percentDone = Math.round(100 * event.loaded/event.total);
    return { status :'progress', message: percentDone };
  
  }
  
  private apiResponse(event){
    return event.body;
  
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error Occurred:', error.error.message);
  
    }
    else{
      console.error(`Backend  returned code ${error.status},` + `body was : ${error.error.body}`)
    }
    return throwError ('somthing bad happened. Please try again later.');
  }

}
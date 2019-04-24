import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders, } from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
const apiUrl = 'https://devworkarea.com/angapi/api/upload';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})



export class FileUploadService {


  constructor(private http:HttpClient) { }


  upload(PFormData) {
    debugger;
    console.log(PFormData);
     return this.http.post(apiUrl,PFormData,{
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event, PFormData)),
      catchError(this.handleError)
      );
  }


private getEventMessage(event:HttpEvent<any>,PFormData){
debugger;
  switch(event.type){

    case HttpEventType.UploadProgress:
    return this.fileUploadProgress(event);
    
    case HttpEventType.Response:
    console.log(event.body);
    return this.apiResponse(event.body);
    
    
    default:
    return `File "${PFormData.get('content').name}" surpriseing upload event: ${event.type}.`;
  }
}

private fileUploadProgress(event){
  debugger;

  const percentDone = Math.round(100 * event.loaded/event.total);
  return { status :'progress', message: percentDone };

}

private apiResponse(event){
  debugger;
  console.log(event.body);
  return event.body;

 }

private handleError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error('An error Occurred:', error.error.message);

  }
  else{
    console.error(`Backend  returned code ${error.status},` + `body was : ${error.error.body}`)
  }
  return  throwError ('somthing bad happened. Please try again later.');
}





}

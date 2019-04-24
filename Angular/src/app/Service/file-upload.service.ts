import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  apiUrl = ''

  constructor(private http:HttpClient) { }

  upload(FormData){
    return this.http.post(`${this.apiUrl}`,FormData,{
      reportProgress: true,
      observe: 'events',
    }).pipe(
      map(event => this.getEventMessage(event, FormData)),
      catchError(this.handleError)
    );
  }


private getEventMessage(event:HttpEvent<any>,FormData){

  switch(event.type){

    case HttpEventType.UploadProgress:
    return this.fileUploadProgress(event);
    
    case HttpEventType.Response:
    return this.apiResponse(event);
    
    default:
    return `File "${FormData.get('profile').name}" surpriseing upload event: ${event.type}`;
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
  return  throwError ('somthing bad happened. Please try again later.');
}

}

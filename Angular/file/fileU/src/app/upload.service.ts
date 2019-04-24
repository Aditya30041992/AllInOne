import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders, } from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  SERVER_URL: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  public upload(data, userId) {
    let uploadURL = `${this.SERVER_URL}/auth/${userId}/avatar`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) =>   {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
 }
//     this.getEventMessage(event, data))
//     );
// }

// private getEventMessage(event:HttpEvent<any>,data){
//   debugger;
//     switch(event.type){
  
//       case HttpEventType.UploadProgress:
//       return this.fileUploadProgress(event);
      
//       case HttpEventType.Response:
//       console.log(event.body);
//       return this.apiResponse(event.body);
      
      
//       default:
//       return `Unhandled event: ${event.type}`;
//     }
//   }
  
//   private fileUploadProgress(event){
//     debugger;
  
//     const percentDone = Math.round(100 * event.loaded/event.total);
//     return { status :'progress', message: percentDone };
  
//   }
  
//   private apiResponse(event){
//     debugger;
//     console.log(event.body);
//     return event.body;
  
//    }

  

}


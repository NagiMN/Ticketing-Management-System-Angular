import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Observable module used to handle asynchronous requests and responses.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //add the URL API for our back-end project.
  readonly APIUrl="http://localhost:5000/api";

  //instantiate HttpClient in constructor.
  constructor(private http:HttpClient) { }

  //the following API method added to consume all the data needed from API.
  getTicketList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tickets');
  }

  addTicket(val:any){
    return this.http.post(this.APIUrl+'/Tickets',val);
  }

  updateTicket(val:any){
    return this.http.put(this.APIUrl+'/Tickets',val);
  }

  deleteTicket(val:any){
    return this.http.delete(this.APIUrl+'/Tickets/'+val);
  }

}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-delete-ticket',
  templateUrl: './show-delete-ticket.component.html',
  styleUrls: ['./show-delete-ticket.component.css']
})
export class ShowDeleteTicketComponent implements OnInit {

  constructor(private service:SharedService) { }

  TicketList:any=[];

  ModalTitle:any;
  ActivateAddEditTickComp:boolean=false;
  ticket:any;

  ngOnInit(): void {
    this.refreshTicketList();
  }

  addClick(){
    this.ticket={
      TicketNum:0,
      Title:"",
      Category:"",
      CompUser:"",
      TicketStatus:""
    }
    this.ModalTitle="Add Ticket:";
    this.ActivateAddEditTickComp=true;
  }

  editClick(item:any){
    this.ticket=item;
    this.ModalTitle="Edit Ticket:";
    this.ActivateAddEditTickComp=true;
  }


  deleteClick(item:any){
    if(confirm('Are You Sure You Want To Delete this Ticket? ')){
      this.service.deleteTicket(item.TicketNum).subscribe(data=>{
        alert(data.toString());
        this.refreshTicketList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTickComp=false;
    this.refreshTicketList();
  }


  refreshTicketList(){
    this.service.getTicketList().subscribe(data=>{
      this.TicketList=data;
    });
  }

}

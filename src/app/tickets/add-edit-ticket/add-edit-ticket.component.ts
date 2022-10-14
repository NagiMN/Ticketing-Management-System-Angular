import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styleUrls: ['./add-edit-ticket.component.css']
})
export class AddEditTicketComponent implements OnInit {

  //instantiate the shared service.
  constructor(private service:SharedService) { }

  @Input() ticket:any;
  TicketNum:any;
  Title:any;
  Category:any;
  CompUser:any;
  TicketStatus:any;

  ngOnInit(): void {
    this.loadTicketList();
  }


  loadTicketList(){
    this.service.getTicketList().subscribe((data:any)=>{
      this.TicketNum=this.ticket.TicketNum;
      this.Title=this.ticket.Title;
      this.Category=this.ticket.Category;
      this.CompUser=this.ticket.CompUser;
      this.TicketStatus=this.ticket.TicketStatus;
    });
  }

  //Create a ticket object in json format.
  addTicket(){
    var val = {TicketNum:this.TicketNum,
                Title:this.Title,
                Category:this.Category,
                CompUser:this.CompUser,
                TicketStatus:this.TicketStatus};
    this.service.addTicket(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  //Create a ticket object in json format.
  updateTicket(){
    var val = {TicketNum:this.TicketNum,
                Title:this.Title,
                Category:this.Category,
                CompUser:this.CompUser,
                TicketStatus:this.TicketStatus};
    this.service.updateTicket(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}

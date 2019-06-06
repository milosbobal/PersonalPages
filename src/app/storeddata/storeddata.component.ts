import { Component, OnInit, Input } from '@angular/core';
import { StoringdataService } from '../storingdata.service';

@Component({
  selector: 'app-storeddata',
  templateUrl: './storeddata.component.html',
  styleUrls: ['./storeddata.component.css'],
})
export class StoreddataComponent implements OnInit {

  public senders = [];
 
  show: boolean = true;
  @Input('contactformdata') data: string;

  constructor(private _storingdataService: StoringdataService) { }

  ngOnInit() {
    this.senders = this._storingdataService.getSenders();
  }


}

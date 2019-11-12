import { Component, OnInit } from '@angular/core';

import { TravelsService } from '../travels.service'

@Component({
  selector: 'app-travels-edit',
  templateUrl: './travels-edit.component.html',
  styleUrls: ['./travels-edit.component.styl']
})
export class TravelsEditComponent implements OnInit {

  constructor(private travelsService: TravelsService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.travelsService.form.valid) {
      if(this.travelsService.form.get("$key").value == null) {
        this.travelsService.insertTravel(this.travelsService.form.value)
      } else {
        this.travelsService.updateTravel(this.travelsService.form.value)
      }
    }
    this.travelsService.resetForm()
  }
}

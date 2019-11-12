import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private firebase: AngularFireDatabase) { }

  travelsDbList : AngularFireList<any>
  form = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl("", Validators.required),
    locations: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    /* img: new FormControl("", Validators.required) */
  })

  getTravels() {
    this.travelsDbList = this.firebase.list('travels')
    return this.travelsDbList.snapshotChanges()
  }

  insertTravel(travel) {
    this.travelsDbList.push({
      title: travel.title,
      locations: travel.locations,
      description: travel.description,
      /* img: travel.img */
    })
  }

  populateForm(travel) {
    this.form.setValue(travel)
  }

  updateTravel(travel) {
    this.travelsDbList.update(travel.$key, {
      title: travel.title,
      locations: travel.locations,
      description: travel.description,
    })
  }

  deleteTravel(key: string) {
    this.travelsDbList.remove(key)
  }

  resetForm() {
    this.form.reset()
  }
}

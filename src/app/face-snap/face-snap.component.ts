import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  
  isSnaped!: boolean;
  texteSnap!: string;
  jungle!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.isSnaped = false;
    this.texteSnap = 'Oh Snap!';  
    this.jungle = 'welcome to the jungle';
  }

  onClickSnap() {
    if(this.isSnaped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.texteSnap = 'Oh Snap!';
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.texteSnap = 'Oops, unsnap...';
    }

    this.isSnaped = !this.isSnaped;
  }
}

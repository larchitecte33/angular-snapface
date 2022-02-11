import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  
  isSnaped!: boolean;
  texteSnap!: string;

  ngOnInit() {
    this.isSnaped = false;
    this.texteSnap = 'Oh Snap!';  
  }

  onClickSnap() {
    if(this.isSnaped) {
      this.faceSnap.snaps--;
      this.texteSnap = 'Oh Snap!';
    }
    else {
      this.faceSnap.snaps++;
      this.texteSnap = 'Oops, unsnap...';
    }

    this.isSnaped = !this.isSnaped;
  }
}

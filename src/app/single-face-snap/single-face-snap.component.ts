import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  
  isSnaped!: boolean;
  texteSnap!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.isSnaped = false;
    this.texteSnap = 'Oh Snap!';  
    
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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

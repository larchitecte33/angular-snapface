import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

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

  constructor(private faceSnapsService: FaceSnapsService,
              private router : Router) {}

  ngOnInit() {
    this.isSnaped = false;
    this.texteSnap = 'Oh Snap!';  
    this.jungle = 'welcome to the jungle';
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}

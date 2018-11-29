import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {MatDialog} from '@angular/material';
import {ResultDialogComponent} from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgSrc = '../../assets/q1.png';
  imgNum = 0;
  imgList: string[] = [
    '../../assets/q1.png',
    '../../assets/q2.png',
    '../../assets/q4.png',
    '../../assets/q5.png',
    '../../assets/q6.png',
    '../../assets/q7.png',
    '../../assets/q8.png',
  ];
  answerList = new Array<string>(this.imgList.length);

  constructor(public auth: AuthService, public dialog: MatDialog) { }

  ngOnInit() {}

  next() {
    if (this.imgNum < this.imgList.length - 1) { this.imgNum++; } else { this.imgNum = 0; }
    this.imgSrc = this.imgList[this.imgNum];
    console.log(this.imgNum)
  }

  previous() {
    if (this.imgNum > 0) {this.imgNum--; } else {this.imgNum = this.imgList.length - 1; }
    this.imgSrc = this.imgList[this.imgNum];
  }

  submitAnswer() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      width: '250px',
      data: this.answerList
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reset();
    });
  }

  reset() {
    this.answerList = new Array<string>(this.imgList.length);
    this.imgNum = 0;
  }

}

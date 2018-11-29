import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent implements OnInit {
  answerList: string[];
  correctAnswers = [
    'a',
    'a',
    'true',
    'b',
    'Turing Recognizable',
    'e',
    'd'
  ];
  score = 0;
  done = false;
  constructor(public dialogRef: MatDialogRef<ResultDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  ngOnInit() {
    this.answerList = this.data;
    for (let i = 0; i < this.correctAnswers.length; i++) {
      if (this.answerList[i] !== undefined && this.correctAnswers[i].toLocaleLowerCase() === this.answerList[i].toLocaleLowerCase() ) {
          this.score++;
      }
    }
    this.done = true;
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}

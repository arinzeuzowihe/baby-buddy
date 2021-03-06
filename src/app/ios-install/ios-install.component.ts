import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-ios-install',
  templateUrl: './ios-install.component.html',
  styleUrls: ['./ios-install.component.css']
})
export class IosInstallComponent implements OnInit {

  constructor(private snackBarRef:MatSnackBarRef<IosInstallComponent>) { }

  ngOnInit() {
  }

  close(){
    this.snackBarRef.dismiss();
  }
}

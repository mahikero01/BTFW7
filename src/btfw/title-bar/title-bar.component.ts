import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'btfw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}

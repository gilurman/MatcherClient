import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../models/job";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @Input() allJobs: Job[];
  @Input() ShoeDescription = false;

  constructor() { }

  ngOnInit(): void {
  }

}

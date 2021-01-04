import {Component, OnInit} from '@angular/core';
import {HttpService} from "./service/http.service";
import {MatcherApiService} from "./service/matcher-api.service";
import {Job} from "./models/job";
import {Candidate} from "./models/candidate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allJobs: Job[];
  candidate: Candidate;

  constructor(private matcherApiService: MatcherApiService) {
  }

  ngOnInit(): void {
    this.matcherApiService.getAllJobs().subscribe(data => {
      this.allJobs = data;
    });
  }

  public newCandidate(candidate) {
    this.candidate = candidate;
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from "../models/job";
import {Candidate} from "../models/candidate";
import {MatcherApiService} from "../service/matcher-api.service";
import {Skill} from "../models/Skill";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent implements OnInit {

  @Output() dataChange = new EventEmitter<Candidate>();

  candidate = new Candidate();
  allSkills: Skill[];
  toppings = new FormControl();

  constructor(private matcherApiService: MatcherApiService) { }

  ngOnInit(): void {
    this.matcherApiService.getAllSkills().subscribe(data => {
      this.allSkills = data;
    });
  }

  public save() {
    this.candidate.skills = this.toppings.value;
    this.dataChange.emit(this.candidate);
  }
}

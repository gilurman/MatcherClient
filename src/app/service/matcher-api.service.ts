import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Job} from "../models/job";
import {Observable} from "rxjs";
import {Skill} from "../models/Skill";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MatcherApiService {
  baseURL: string;

  constructor(private httpService: HttpService) {
    this.baseURL = environment['serverUrl'];
  }

  public getAllJobs(): Observable<Job[]> {
    return this.httpService.get<Job[]>('job/');
  }

  public getAllSkills(): Observable<Skill[]> {
    return this.httpService.get<Skill[]>('skill/');
  }
}

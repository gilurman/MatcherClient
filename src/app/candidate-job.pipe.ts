import {Pipe, PipeTransform} from '@angular/core';
import {Job} from "./models/job";
import {Candidate} from "./models/candidate";
import {split} from "ts-node";

@Pipe({
  name: 'candidateJob'
})
export class CandidateJobPipe implements PipeTransform {

  transform(allJobs: Job[], candidate: Candidate): Job[] {
    if(candidate){
      let arrString = candidate.title.split(" ");

      allJobs = allJobs.filter(job =>
        arrString.some(word => job.title.includes(word))
      );

      allJobs.map(job => {
        job.description = 'The title match to yours'
        if (candidate.skills && candidate.skills.some(skill => skill.id == job.skill.id)) {
          job.description += ' and you have the needed skill'
        }
      });
    }

    return allJobs;
  }

}

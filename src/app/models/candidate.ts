import {Skill} from "./Skill";

export class Candidate {
  id: number;
  title: string;
  skills: Skill[];

  constructor() {
    this.title = '';
    this.skills = [];
  }
}

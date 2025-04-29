import Work from './Work';

export default class WorkList {
  public works: Work[] = [];

  public constructor() {}

  public addWork(work: Work): void {
    const workData = new Work(
      work.workId,
      work.description,
      work.dateInit,
      work.dateEnd,
      work.typeContract,
      work.time,
      work.company,
    );
    this.works.push(workData);
  }

  public addWorks(works: Work[]): void {
    works.forEach((work) => this.addWork(work));
  }

  public setWorks(works: Work[]): void {
    this.removeWorks();
    this.addWorks(works);
  }

  public removeWorks(): void {
    this.works = [];
  }

  public totalWorks(): number {
    return this.works.length;
  }
}

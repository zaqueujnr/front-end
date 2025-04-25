import Work from "./Work";

export default class WorkList {
  public works: Work[]
  
  constructor() {
    this.works = []
  }
  addWork(work: Work) {
    const workData = new Work(work.workId, work.description, work.dateInit, work.dateEnd,
      work.typeContract, work.time, work.company
    )
    this.works.push(workData)
  }
  addWorks(works: Work[]) {
    works.forEach(work => this.addWork(work))
  }
  setWorks(works: Work[]) {
    this.removeWorks()
    this.addWorks(works)
  }
  removeWorks() {
    this.works = []
  }
  totalWorks() {
    return this.works.length
  }
}
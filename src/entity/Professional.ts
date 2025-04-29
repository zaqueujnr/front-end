export default class Professional {
  public constructor(
    public readonly professionalId: string,
    public readonly name: string,
    public readonly email: string,
    public readonly position: string,
    public readonly salary: number,
  ) {}
}

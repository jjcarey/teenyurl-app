export class Shorten {
  public longUrl: string;
  public shortUrl: string;
  public hitCount: number;

  constructor(longUrl: string, shortUrl: string, hitCount: number) {
    this.longUrl = longUrl;
    this.shortUrl = shortUrl;
    this.hitCount = hitCount;
  }
}

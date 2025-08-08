export class Tag {
  static readonly ANGULAR     = new Tag('Angular',     '#DD0031');
  static readonly TYPESCRIPT  = new Tag('TypeScript',  '#3178C6');
  static readonly REACT       = new Tag('React',       '#61DAFB');
  static readonly VUE         = new Tag('Vue',         '#41B883');
  static readonly JAVASCRIPT  = new Tag('JavaScript',  '#F7DF1E');
  static readonly DESIGN      = new Tag('Design',      '#40E0D0'); 
  static readonly FIREBASE    = new Tag('Firebase',    'rgb(255, 202, 40)');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}

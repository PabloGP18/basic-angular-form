export class Friend {

  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _languages: string;

  constructor(firstName: string, lastName: string, email: string, phoneNumber: string, languages: string)
  {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._languages = languages;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get languages(): string {
    return this._languages;
  }

  set languages(value: string) {
    this._languages = value;
  }
}

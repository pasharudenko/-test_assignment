export class MissingBodyException extends Error {
  constructor() {
    super(`Body is empty`);
  }
}

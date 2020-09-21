export function getArrayOfErrors(errors) {
  if (errors) {
    if (Array.isArray(errors)) {
      return errors;
    } else {
      return [errors];
    }
  }
}

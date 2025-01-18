// validateInput.js
export function validateInput(value, rules) {
    const errors = [];
    rules.forEach((rule) => {
      if (rule.required && !value) {
        errors.push('This field is required.');
      }
      if (rule.min && value.length < rule.min) {
        errors.push(`Minimum length is ${rule.min} characters.`);
      }
      if (rule.max && value.length > rule.max) {
        errors.push(`Maximum length is ${rule.max} characters.`);
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        errors.push('Invalid format.');
      }
    });
    return errors;
  }
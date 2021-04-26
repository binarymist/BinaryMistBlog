// This script is used by the staticman submission forms in layouts/partials/comments.html and layouts/section/post.html
// Currently processed by `plugins_js  = ["staticmanFormSubmissionValidation"]` in params.toml

let form;
let validateCommentPost

const question = '5 + 2';
const correctAnswer = '7';

const validateRealUser = () => {
  if (validateCommentPost.value === correctAnswer) return true;
  validateCommentPost.value = '';
  return false;
}

// If the page is taking to long to load before onload is fired, just add this script inline immediatly below where the elements load.

// Currently the process is:
// 1. Leave out a critical piece of your form (like the action attribute)
// 2. Populate it using javascript when the document is loaded
// 3. Tell visitors that the form doesn't work if javascript is disabled and remove this message when the form is set up correctly.
// If this doesn't work, use reCAPTCHA: https://staticman.net/docs/spam
window.onload = function () {
  form = document.querySelector('form.staticman');
  validateCommentPost = document.querySelector('input[name="validateRealUser"].post-comment-field');
  if (validateCommentPost && form) {
    validateCommentPost.placeholder = question;
    form.onsubmit = validateRealUser;
    form.action = form.querySelector('.form-action-value').innerHTML;
    form.querySelector('.post-comment-field.js-note.label').hidden = true;
  }
};

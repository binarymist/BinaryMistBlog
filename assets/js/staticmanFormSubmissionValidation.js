// This script is used by the staticman submission forms in layouts/partials/comments.html and layouts/section/post.html
// Currently processed by `plugins_js  = ["staticmanFormSubmissionValidation"]` in params.toml

const internals = {
  form: 'to be set',
  validateCommentPost: 'to be set',
  question: '5 + 2',
  correctAnswer: '7'
}

internals.validateRealUser = () => {
  const { validateCommentPost, correctAnswer } = internals;
  if (validateCommentPost.value === correctAnswer) return true;
  validateCommentPost.value = '';
  return false;
}

// If the page is taking to long to load before the load event is fired, just add this script inline immediately below where the elements load.

// Currently the process is:
// 1. Leave out a critical piece of your form (like the action attribute)
// 2. Populate it using javascript when the document is loaded
// 3. Tell visitors that the form doesn't work if javascript is disabled and remove this message when the form is set up correctly.
// If this doesn't work, use reCAPTCHA: https://staticman.net/docs/spam
internals.staticmanFormHandler = () => {
  let { form } = internals;
  const  { question, validateRealUser } = internals;
  form = document.querySelector('form.staticman');
  internals.validateCommentPost = document.querySelector('input[name="validateRealUser"].post-comment-field');
  if (internals.validateCommentPost && form) {
    internals.validateCommentPost.placeholder = question;
    form.onsubmit = validateRealUser;
    form.action = form.querySelector('.form-action-value').innerHTML;
    form.querySelector('.post-comment-field.js-note.label').hidden = true;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#checking_whether_loading_is_already_complete
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', internals.staticmanFormHandler) : internals.staticmanFormHandler();

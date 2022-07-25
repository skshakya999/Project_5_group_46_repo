let isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "number" && value.toString().trim().length === 0)
    return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

let isValidRequestBody = function (data) {
  return Object.keys(data).length > 0;
};

let validPassword = function (value) {
  if (value.length >= 8 && value.length <= 15) return true;
};

let validCity = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
let validPincode = /^[1-9][0-9]{5}$/;
let validName = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
let validPhone = /^[6-9]\d{9}$/;
let validString = /^[ a-z ]+$/i;
let validEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

module.exports = { isValid, isValidRequestBody, validCity, validPincode, validName, validPhone, validString, validEmail,validPassword};
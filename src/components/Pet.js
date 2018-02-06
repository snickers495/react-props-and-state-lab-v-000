
javascript:(function(){
var numOfForms = prompt('Is this for the first, second, or third trait box?(1, 2, or 3)') - 1;
var formValues = prompt('Enter values for traits.');
var traitValues = formValues.split("on");
var currentForm = document.getElementsByClassName("form-default four columns ng-scope");
var currentDiv = currentForm[numOfForms].getElementsByClassName("two-column-controls gx-input");
var btn = document.getElementsByClassName("icon-plus btn-small ng-binding");
const enterValues = function(){
  for (var i = 0; i < traitValues.length; i ++) {
    btn[numOfForms].click();
    let input = currentDiv[(i * 2)].firstElementChild;
    input.value = traitValues[i];
    console.log(input)
  }
};
enterValues();
})();

export default Pet;

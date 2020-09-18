const form = document.querySelector("form");

console.log(form);

//grab all of the divs except for the last one
const fields = form.querySelectorAll("div:not(:last-of-type)");

//we need to seperate out the 'special' from the 'regular' fields
//TODO: write a filter that will return out anything that doesn't have a 'data-status' attribute (HINT: hasAttribute("data-status"))

const regularFields = [...fields].filter(
  (field) => !field.hasAttribute("data-status")
);

export default () => {
  console.log(fields, regularFields);
};

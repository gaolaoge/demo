const template = "My name is ${name},I'm from ${city}";
const result = sprintf(template, {
    name: 'Yiming Zhang',
    city: 'FuJian',
});
console.log(result); // My name is Yiming Zhang,I'm from FuJian

function sprintf(template, replacements) {

}
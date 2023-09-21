// code your solution here
function saturdayFun (first = "roller-skate"){
    return(`This Saturday, I want to ${first}!`);
};
saturdayFun("bathe my dog");
function mondayWork (office = "go to the office"){
    return(`This Monday, I will ${office}.`);
}
mondayWork ("work from home");
function wrapAdjective(noIdea) { 
    return (function innerF (special = "*") {
        return `You are ${noIdea}${special}${noIdea}!`;
    });
};
wrapAdjective ("||")(`||||!`);
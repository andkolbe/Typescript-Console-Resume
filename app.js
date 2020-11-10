var myName = 'Bob';
console.log("Name: " + myName.toUpperCase());
console.log('Career: Exotic Animal Trainer');
console.log('Description: I like tigers');
var interests = function (interest) {
    console.log("* " + interest);
};
console.log('My Interests:');
interests('Long Walks On The Beach');
interests('Origami');
interests('Swinging From Rope Swings');
interests('Bellyflopping into Public Pools');
function displayPosition(jobTitle, companyName, description) {
    console.log('* ' + jobTitle + ' at ' + companyName + ' - ' + description);
}
;
console.log('My Previous Experience:');
displayPosition('Head Zebra Tamer', 'The Zoo', 'I taught all of the zebras tricks.');
displayPosition('Air Guitar Instructor', 'Air Guitar School', 'I trained world class air guitarists.');
displayPosition('Beekeeper', 'IHEARTBEES', 'I ate a lot of honey.');
console.log('My Skills:');
function displaySkill(skill, cool) {
    if (cool == true) {
        console.log('* ' + 'BAM: ' + skill);
    }
    else {
        console.log('* ' + skill);
    }
}
;
displaySkill('Skateboarding', true);
displaySkill('Extreme Cello-ing', true);
displaySkill('Baking', false);
displaySkill('Underwater Juggling', true);
displaySkill('HTML', false);

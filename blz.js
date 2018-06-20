// barbarian body background: #02A6C1
//barbarian skills background: #c11d02
//crusader body background: #0C447F, 12, 68, 127
//crusader skills background: #7F470C
//demon hunter body background: #366215
//demon hunter skills background: #411562
//monk body background: #fef9a7, c9be70
//monk skills background: #A7ACFE, 707bc9
//necromancer body background: #2df5eb, 18C5C5
//necromancer skills background: #F52D37, c51818
//witch doctor body background: #193e13
//witch doctor skills background: #38133E
//wizard body background: #2f4cb0
//wizard skills background: #B0932F

const iconBase = 'http://media.blizzard.com/d3/icons/skills/64/';
const skillsURLBegin = 'https://us.api.battle.net/d3/data/hero/';
const skillsURLEnd = '?locale=en_US&apikey=8xv88xzq2ns33rdfvy5zrcrc2dkrfkvn';

const body = document.querySelector('body');
const skillsBucket = document.getElementById('skillsBucket');
const className = document.getElementById('className');
const classIcon = document.getElementById('classIcon');
const classResource = document.getElementById('classResource');
const classBio = document.getElementById('classBio');
const barbarianButton = document.getElementById('barbarianButton');
const crusaderButton = document.getElementById('crusaderButton');
const demonHunterButton = document.getElementById('demonHunterButton');
const monkButton = document.getElementById('monkButton');
const necromancerButton = document.getElementById('necromancerButton');
const witchDoctorButton = document.getElementById('witchDoctorButton');
const wizardButton = document.getElementById('wizardButton');
const charAvatar = document.getElementById('charAvatar');
let topPic = './assets/barTopGear.png';
let midPic = './assets/barMidGear.png';
let botPic = './assets/barBotGear.png';

barbarianButton.addEventListener('click', newPageData);
crusaderButton.addEventListener('click', newPageData);
demonHunterButton.addEventListener('click', newPageData);
monkButton.addEventListener('click', newPageData);
necromancerButton.addEventListener('click', newPageData);
witchDoctorButton.addEventListener('click', newPageData);
wizardButton.addEventListener('click', newPageData);
document.addEventListener('scroll', scrollDisplay);

skillsRefresh(skillsURLBegin + 'barbarian' + skillsURLEnd);

//testing
function scrollDisplay(){
    let scrollPosit = window.scrollY/body.offsetHeight;
    if (scrollPosit < 0.25){
        charAvatar.src = topPic;
    }
    else if (scrollPosit < 0.55){
        charAvatar.src = midPic;
    }
    else {
        charAvatar.src = botPic;
    }
}
// document.body.scrollTop = 1000;
// document.documentElement.scrollLeft = document.body.scrollLeft = 500;
//testing

function newPageData(e){
    switch (e.target.id) {
        case 'barbarianButton':
            skillsRefresh(skillsURLBegin + 'barbarian' + skillsURLEnd, '#c11d02');
            classIcon.src = "./assets/barbarianIcon.jpg";
            classResource.src = "./assets/Barbarian-Fury-Resource.gif";
            body.style.background = 'var(--barBack)';
            className.innerText = 'The Barbarian\'s Active Skills';
            className.style.backgroundColor = '#c11d02';
            classBio.innerText = 'The barbarian is able to whirlwind through crowds, cleave through swarms, leap across crags, crush opponents upon landing, and grapple-snap enemies into melee range. The resource used by the barbarian is fury, which is generated through attacking enemies, getting attacked by enemies, and using certain abilities. Fury is used for the barbarian\'s strongest abilities and degenerates over time.';
            charAvatar.src = './assets/barTopGear.png';
            topPic = './assets/barTopGear.png';
            midPic = './assets/barMidGear.png';
            botPic = './assets/barBotGear.png';
            break;
        case 'crusaderButton':
            skillsRefresh(skillsURLBegin + 'crusader' + skillsURLEnd, '#7F470C');
            classIcon.src = "./assets/crusaderIcon.jpg";
            classResource.src = "./assets/Crusader-Wrath-Resource.gif";
            body.style.background = 'var(--cruBack)';
            className.innerText = 'The Crusader\'s Active Skills';
            className.style.backgroundColor = '#7F470C';
            classBio.innerText = 'The crusader has a variety of combat skills at its disposal based on physical prowess, and typically wields a shield and an associated weapon (typically a flail). The crusader is able to ride a horse and strike enemies, shield bash enemies, summon a blessed hammer that circles around the crusader, leap into the air and come crashing down on enemies, have lightning strike foes from the sky, taunt enemies, hurl shields and hammers at enemies, and many more. The resource used by the crusader is wrath, which is generated through attacking enemies, getting attacked by enemies, and using certain abilities.';
            charAvatar.src = './assets/cruTopGear.png';
            topPic = './assets/cruTopGear.png';
            midPic = './assets/cruMidGear.png';
            botPic = './assets/cruBotGear.png';
            break;
        case 'demonHunterButton':
            skillsRefresh(skillsURLBegin + 'demon-hunter' + skillsURLEnd, '#411562');
            classIcon.src = "./assets/demonHunterIcon.jpg";
            classResource.src = "./assets/demon-hunter-Hatred_discipline.gif";
            body.style.background = 'var(--dhBack)';
            className.innerText = 'The Demon Hunter\'s Active Skills';
            className.style.backgroundColor = '#411562';
            classBio.innerText = 'Demon hunters use bows and crossbows as their main weapons and can also throw small bombs and knives at enemies. The demon hunter is fueled by both discipline and hatred: Hatred is a fast regenerating resource that is used for attacks, while discipline is a slow regenerating resource used for defensive abilities involving acrobatics or shadows.';
            charAvatar.src = './assets/dhTopGear.png';
            topPic = './assets/dhTopGear.png';
            midPic = './assets/dhMidGear.png';
            botPic = './assets/dhBotGear.png';
            break;
        case 'monkButton':
            skillsRefresh(skillsURLBegin + 'monk' + skillsURLEnd, '#707bc9');
            classIcon.src = "./assets/monkIcon.jpg";
            classResource.src = "./assets/Monk-Spirit-Resource.gif";
            body.style.background = 'var(--monkBack)';
            className.innerText = 'The Monk\'s Active Skills';
            className.style.backgroundColor = '#707bc9';
            classBio.innerText = 'The Monk is a melee attacker, using martial arts to cripple foes, resist damage, deflect projectiles, attack with blinding speed, and land explosive killing blows. Monk gameplay combines the melee elements of Diablo II\'s assassin class with the holy warrior role of the paladin. Blizzard has stated that the monk is not related in any way to the monk class from the Sierra Entertainment–made Diablo: Hellfire expansion. The monk is fueled by spirit, which has defensive purposes and is slowly generated through attacking, though it does not degenerate.';
            charAvatar.src = './assets/monkTopGear.png';
            topPic = './assets/monkTopGear.png';
            midPic = './assets/monkMidGear.png';
            botPic = './assets/monkBotGear.png';
            break;
        case 'necromancerButton':
            skillsRefresh(skillsURLBegin + 'necromancer' + skillsURLEnd, '#c51818');
            classIcon.src = "./assets/necromancerIcon.jpg";
            classResource.src = "./assets/Necromancer-Essence-Resource.gif";
            body.style.background = 'var(--necBack)';
            className.innerText = 'The Necromancer\'s Active Skills';
            className.style.backgroundColor = '#c51818';
            classBio.innerText = 'The Necromancer is a death-themed spellcaster, available as downloadable content for Reaper of Souls. Described as a "reimagining" of the previous incarnation seen in Diablo II, the necromancer specializes in controlling the dead, be it by summoning minions, reviving dead enemies temporarily or using their corpses as a medium to their magical powers, while using blood magic to power their offensive and defensive abilities. The resource used by the necromancer is essence, which is generated through attacking enemies with their primary skills.';
            charAvatar.src = './assets/necTopGear.png';
            topPic = './assets/necTopGear.png';
            midPic = './assets/necMidGear.png';
            botPic = './assets/necBotGear.png';
            break;
        case 'witchDoctorButton':
            skillsRefresh(skillsURLBegin + 'witch-doctor' + skillsURLEnd, '#38133E');
            classIcon.src = "./assets/witchDoctorIcon.jpg";
            classResource.src = "./assets/Witch-Doctor-Mana-Resource.gif";
            body.style.background = 'var(--wdBack)';
            className.innerText = 'The Witch Doctor\'s Active Skills';
            className.style.backgroundColor = '#38133E';
            classBio.innerText = 'The Witch Doctor is a new character reminiscent of the Diablo II necromancer but with skills more traditionally associated with shamanism and voodoo culture. The witch doctor has the ability to summon monsters, cast curses, harvest souls, and hurl poisons and explosives at their enemies. To power spells the Witch Doctor uses Mana, a vast pool of mental power which regenerates slowly.';
            charAvatar.src = './assets/wdTopGear.png';
            topPic = './assets/wdTopGear.png';
            midPic = './assets/wdMidGear.png';
            botPic = './assets/wdBotGear.png';
            break;
        case 'wizardButton':
            skillsRefresh(skillsURLBegin + 'wizard' + skillsURLEnd, '#B0932F');
            classIcon.src = "./assets/wizardIcon.jpg";
            classResource.src = "./assets/wizard-arcane-power.gif";
            body.style.background = 'var(--wizBack)';
            className.innerText = 'The Wizard\'s Active Skills';
            className.style.backgroundColor = '#B0932F';
            classBio.innerText = 'The Wizard is a version of the sorceress from Diablo II or the sorcerer from Diablo. The Wizard\'s abilities range from shooting lightning, fire and ice at their enemies to slowing time and teleporting past enemies and through walls. Wizards fuel their spells with arcane power, which is a shallow but fast-regenerating power source.';
            charAvatar.src = './assets/wizTopGear.png';
            topPic = './assets/wizTopGear.png';
            midPic = './assets/wizMidGear.png';
            botPic = './assets/wizBotGear.png';
            break;
        default:
            break;
    }
}

function skillsRefresh(url, color){
    fetch(url)
        .then(function(result){
            return result.json();
        })
        .then(function(json) {
            showSkillDescrips(json.skills.active, color);
        })
}

function showSkillDescrips(skills, skillsColor){
    while(skillsBucket.firstChild){
        skillsBucket.removeChild(skillsBucket.firstChild);
    }

    for (let i = 0; i < skills.length; i++){
        let heading = document.createElement('h2');
        let div = document.createElement('div');
        let para = document.createElement('p');
        let icon = document.createElement('img');

        heading.className = 'skillsHeading';
        heading.innerText = skills[i].name;
        icon.className = 'skillPic';
        icon.src = iconBase + skills[i].icon + '.png';
        icon.style.borderRadius = '5px';
        div.className = 'skillsDiv';
        div.style.backgroundColor = skillsColor;
        para.className = 'skillDesc';    

        div.appendChild(heading);
        para.appendChild(icon);
        para.innerHTML += skills[i].description;
        div.appendChild(para);
        skillsBucket.appendChild(div);
    }
}



const story = [
  {
    storyText: 'Earth is gone. Years ago, but Xenonox 3 isn\'t half bad. After the war I decided to retire on this quaint dustball to start a life as a Tridag farmer, no more adventures for this old space cowboy. And everything was going just dandy, that is until today. Right off the horizon there appeared column of smoke. "What could that be?" I should grab my binoculars from my bag.',
    instructions: 'Instructions: Write a function called grabBinoculars that receives a items array, and returns the index of the string "binoculars"',
    example: 'grabBinoculars(["cloth", "spacegum", "binoculars"]) => 2',
    test: {
      args: [["cloth", "binoculars", "spaceGum", "laserRifle"]],
      expected: 1,
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result == 'pass') {
            passed = true;
          } else if (result !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `"Wow a crashed B198 fighter, haven't seen one of those in ages. It could have some valuable salvage. There's Sand Rats out there though, I should grab my rifle out of the garage."`,
    instructions: `Write a function grabLongRifle that accepts an array of objects and returns the index of the object whose "type" has the value "weapon" AND the "item" property has the value "long rifle"`,
    example: `
    grabLongRifle([ 
      { 
        type: 'toy', 
        item: 'long rifle' 
      },
      {
         type: 'clothing', 
         item: 'medal of bavery' 
      },
      { 
        type: 'weapon', 
        item: 'long rifle' 
      } 
      ]) => 2;
    `,
    test: {
      args: [[{ type: 'container', item: 'fuel can' }, { type: 'weapon', item: 'long rifle' }, { type: 'clothing', item: 'medal of bavery' }, { type: 'toy', item: 'long rifle' }, { type: 'weapon', item: 'short rifle' }, { type: 'tool', item: 'hammer' }]],
      expected: 1,
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result == 'pass') {
            return true;
          }
          if (result !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `I finally arrived at the crash site, it's a smoldering crater strewn with debris. But the main fuselage is still intact, inside there are usually palladium circuits, I should try and get this door open. As I got to the door I heard a noise. "Hello?! is somebody out there? The door is stuck" a voice from inside the craft echoed. "yeah hey hold on, let me give it a whirl" A firm tug on the fuselage door, it buckled slightly. "Ok I think I can force it open but I need your help, push from yourside on the count of three."`,
    instructions: `write a function onThree that accepts an array of strings, loops through that array and returns the index of the string 'three'`,
    example: `onThree(['ready', 'set', 'one', 'two', 'three', 'go']) => 4`,
    test: {
      args: [['ok', 'get', 'ready', 'set', 'one', 'two', 'three', 'go']],
      expected: 6,
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result == 'pass') return true;
          if (result !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `The door swung open as we forced in unison. 
    The light poured in and highlighted a baby faced young man, in a pilot jumpsuit. 
    "Bless the stars! I would have died in this heap. Zep Branigan is the name, lieutenant of the 6th Rebel brigade."   
      "You're a lucky one Zep, Pleasure to meet you, Dayton Stardust" The young pilot's eyes widened. 
      "The Dayton Stardust?! Admiral Dayton Stardust?" Zeps hand shot to a salute.
      "That was a long time ago, ain't my war anymore" 
       "Sir, I thank you dearly for helping me, but I am on a mission of galactic importance. 
       I have with me the attack plans for ambush on the central rebel base on Vitas.
       The entire rebellion hinges on the delivery of these plans" Zep brandished a Holopad from his jumpsuit pocket.
       "Listen, I ain't gettin' tied back into this old fight, but I  got a ship back on my farm, I could maybe get you to the next sector, if you let me grab some scrap"
       "Absoultely Admiral!" 
       "Please don't call me that"
       After grabing some palladium parts, we set off back to the farm.
       "I have a ship in my garage"
       "Admiral .... I Think we have company" Zep pointed to the skyline, two Federation Crown fighters dotted the horizon.
       "We best get this ol' beast started then"
       `,
    instructions: `Write a function intiateLaunch that accepts four boolean parameters primed, landingGearExtended, coreActivate, shieldsEngaged that returns "Launching" if primed, coreActivate, and shieldsEngaged are true but landingGearExtended is false. If these conditions are not met, it should return 'Engine failure'`,
    example: `initiateLaunch(true, false, true, true) => `,
    test: {
      args: [true, true, false, true],
      expected: 'Engine failure',
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result == 'pass') {
            passed = true;
          } else if (result !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `The ship shuttered and then perciptiously rose into the air. The comms crackled to life: 
    "This is an offical Order From the Federation of the United Planets, Ground your ship imediately or we will fire. We have intel that your a harboring an Enemy of the Galaxy"
    The Federation ships assumed a two point attack position behind their ship.
    "Zep, I'm not grounding for no Imperialists, can you shoot?"
    "Is the Spacepope Catholic?! Of course I can, charge the lasers!"
    Zep leapt into the gunner cockpit.
    `,
    instructions: 'write a function laserCharger that stores inside of it a variable chargeLevel intially set to zero. laserCharger should return a function that each time it is called increments chargeLevel by 20, and then returns the current chargeLevel',
    example: 'var lasers = laserCharger(); lasers() => 20; lasers() => 40',
    test: {
      args: [],
      expected: 40,
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          var lasers = eval(`(${code})`)(...input);
          if (lasers === 'pass') return true;
          lasers();
          result = lasers() === 40;
          if (!result) {
            message = 'error';
            passed = false;
          } else {
            return true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `Zep brought down the first fighter in seconds, while I pulled the ship latterally, the second came down quickly after.
    "Mighty fine shooting zep, that was a piece of cake, ok on the way to... "
    "Uh Admiral, we have a few more"
    17 ships blipped on the radar.
    "An entire squadron? Zep those plans of yours must be valuable. We need to double the  reactor output."`,
    instructions: 'Write a function doubleEnginePower that accepts an array numbers and returns a new array. Each element in the array should be doubled if the doubled values is less than or equal to 100. If the doubled value would be greater than 100 keep the value the same.',
    example: 'doubleEnginePower([12, 52, 40]) => [24, 52, 80]',
    test: {
      args: [[50, 51, 99]],
      expected: JSON.stringify([100, 51, 99]),
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result === 'pass') return true;
          if (JSON.stringify(result) !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `The ship rocketed forward, but not fast enough. The squadron was right on their tail.
    "Zep I need you to do something, go down to the engine compartment"
    "On it Admiral" Zep leapt down into the engine bay
    "we need to double the power output from all engines that are currently stable, don't touch the other ones or well... we're spacedust"
    `,
    instructions: `Instructions: write a function onlyDoubleStable that recieves an array of objects. It should return the array with the level value of each object doubled if the state is 'stable'`,
    example: `onlyDoubleStable([{ state: 'stable', level: 75 }, { state: 'unstable', level: 90 }]) =>
    [{ state: 'stable', level: 150 }, { state: 'unstable', level: 90 }]
    `,
    test: {
      args: [[{ state: 'unstable', level: 25 }, { state: 'stable', level: 25 }, { state: 'unstable', level: 25 }]],
      expected: JSON.stringify([{ state: 'unstable', level: 25 }, { state: 'stable', level: 50 }, { state: 'unstable', level: 25 }]),
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result === 'pass') return true;
          if (JSON.stringify(result) !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      }
    },
  },
  {
    storyText: `The ship surged forward, outpacing the squadron. But then alert system blared:
    "WARNING PHOTON TORPEDO LOCK DETECTED! WARNING PHOTON TORPEDO LOCK DETECTED!" 
    They were sunk, with all power going to their engines, they had nothign to divert to their shields.
    The only way out of this was to shake the projectile.
    "ok Bertha, let's see how limber you still are"
    `,
    instructions: `Instructions: write a function shakeTorpedo that accepts two strings, height and side. if the input is  'top', 'left ', the function should invert the directions and return the concated string 'bottom right'`,
    example: `shakeTorpedo('bottom', 'left') => 'top right'`,
    test: {
      args: ['bottom', 'right'],
      expected: 'top left',
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result === 'pass') return true;
          if (result !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      }
    },
  },
  {
    storyText: `The ship pulled a hairpin turn right at the last second and boosted orthagonally, escaping the torpedo and the squadron.
    "Admiral that was incredible, I can't believe I'm copilot with the Admiral Stardust, did you really win the Zephry System Battle outmatched 30 to 1?"
    "That was a long time ago, and please stop calling me admiral, Dayton is just fine."
    "Alright Dayton, we need to get this to the Rebel base on Vitas in the Rigel 5 sector" 
    "Let's locate it"
    `,
    instructions: 'Instructions: Write a function named getCoords that accepts an array of objects, each object will contain a property sectorName, which will be a string, and a sectors property which will be an array of objects . find the object within the sectors array of Rigel and then find the fifth object in that array (index 4). lastly return the value of the property "Vitas" which will be a string containing the coordinates to the rebel base',
    example: `(if we were looking for Rigel 1 Vitas getCoords([{sectorName: "Mingus", sectors:[{...}{...}]},{sectorName: 'Rigel', sectors: [{Vitas: "x1, x2, z3" }]}]) => "x1, y2, z3"`,
    test: {
      args: [[{ sectorName: 'Rigel', sectors: [{}, {}, {}, {}, { Vitas: "x0, y0, z0" }] }]],
      expected: "x0, y0, z0",
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result === 'pass') return true;
          if (result !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {

          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `"I've got the coordinates, off we go." They were traveling swiftly at full speed when suddenly the left side of the ship let out a groan and the alarm systems activated.
    "WARNING GRAVITATIONAL DISTURBANCE WARNING GRAVITATIONAL DISTURBANCE"
    "Admira... I mean Dayton, does that mean what I think it means?"
    They were caught in the gravitational pull of a black hole, directly along the event horizon, There was no hope of escape.
    "Listen Zep, I don't think the ship is making it out this, but you still can"
    "Admiral no we can figure this out!"
    "Theres no time." I pushed Zep into the escape pod and bolted the launch door.
    "I can get you to Vitas, if I aim the launch right. I thought I was out of this rebel business, but here I am again. Zep, don't give up on the fight like I did."
    "I won't Admiral" 
    `,
    instructions: `write a function prepareEscapePod() that returns a function. 
    This returned function should keep track of how many times it is called. 
    It needs to be called four seperate times with the correct strings in the correct order. 
    The first time it is called it should be passed the string 'prepare'., 
    The second time with the string 'unlock'., 
    The third time with the string 'aim' 
    and the fourth time with the string 'launch'. 
    If the wrong strings are passed or they are passed in the wrong order, the function should return 'FAILED' and start the count and sequence over again.
    If the commands are put in the correct order, the 4th call should return 'LAUNCHED'`,
    example: `var command = prepareEscapePod(); command('prepare');  command('unlock');   command('aim');   command('launch') => 'LAUNCHED'`,
    test: {
      args: [],
      expected: "LAUNCHED",
      testFunc: function (code, input, expected) {
        var passed, result, message, last;
        try {
          result = eval(`(${code})`)();
          if (result == 'pass') {
            return true;
          }
          result('prepare');
          result('unlock');
          result('aim');
          last = result('launch');
          if (last !== expected) {
            message = `launch did not work`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
];

var editor = ace.edit("editor");
var inputs = [];
var storyIndex = 0;
var $error = $('#error');
var $story = $('#storyBox');
var $progress = $('#progressBar');
var $instruct = $('#instructionBox');
var $example = $('#exampleBox');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/javascript');

function clearCode() {
  editor.setValue('');
}
function getCode() {
  return editor.getValue();
}
function currentPoint() {
  return story[storyIndex];
}
function updateStory() {
  $story.text('');
  $story.append(currentPoint().storyText);
}
function updateExample() {
  $example.text('');
  $example.append('ex:  ' + currentPoint().example);
}
function updateInstructions() {
  $instruct.text('');
  $instruct.text(currentPoint().instructions);
}
function endStory() {
  alert('You finished Stardust!!');
  $instruct.text('');
  $error.text('');
  editor.setValue('');
  editor.setValue(JSON.stringify(inputs.join('\n')));
  $instruct.text('The ship slowly sank into the black hole. To be continued...');
}
function startStory() {
  updateStory();
  updateInstructions();
  updateExample();
}
function clearError() {
  $error.text('');
}
function updateError(error) {
  $error.fadeOut().text('');
  $error.append(error).fadeIn();
}
function testInput() {
  var code = getCode();
  var input = clone(currentPoint().test.args);
  var expected = currentPoint().test.expected;
  return currentPoint().test.testFunc(code, input, expected);
}
function saveInput() {
  inputs.push(getCode());
}
function updateProgress() {
  $progress.css('width', `${Math.ceil(((storyIndex + 1) / story.length) * 100)}%`);
}
function next() {
  alert('Congrats! you passed');
  var funcs = [clearError, updateStory, updateInstructions, updateExample, clearCode, updateProgress];
  saveInput();
  storyIndex += 1;
  if (storyIndex >= story.length) {
    return endStory();
  }
  funcs.forEach(func => func(storyIndex));
}

function clone(obj) {
  const newObj = new obj.constructor();
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'object') {
      newObj[key] = obj[key];
    } else {
      newObj[key] = clone(obj[key]);
    }
  }
  return newObj;
}
function submitCode() {
  if (testInput(storyIndex)) {
    return next();
  }
}
$(() => {
  $('#submitBtn').click(submitCode);
  $('#clearBtn').click(clearCode);
  startStory();
});

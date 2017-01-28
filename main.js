const story = [
  {
    storyText: 'Earth is gone. Years ago, but Rigel 3 isn\'t half bad. After the war I decided to retire on this quaint dustball to start a life as a Tridag farmer, no more adventures for this old space cowboy. And everything was going just dandy, that is until today. Right off the horizon there appeared to be collumn of smoke. "What could that be?" I should grab my binoculars from my bag.',
    instructions: 'Instructions: Write a function called grabBinoculars that recieves a items array, and returns the index of the string "binoculars"',
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `"wow a crashed B198 fighter, thats an alliance ship, hmm it could have some valuable salvage. Theres Sand Rats out there though, I should grab my rifle out of the garage"`,
    instructions: `write a function grabLongRifle that accepts and array of objects and returns the object with the type property of 'weapon' and the item property of "long rifle"`,
    example: `
    grabLongRifle([ 
      { 
        type: 'toy', 
        item: 'long rifle' 
      }
      { 
        type: 'weapon', 
        item: 'long rifle' 
      }, 
      {
         type: 'clothing', 
         item: 'medal of bavery' 
      }
      ]) => { type: 'weapon', item: 'long rifle' };
    `,
    test: {
      args: [[{ type: 'container', item: 'fuel can' }, { type: 'weapon', item: 'long rifle' }, { type: 'clothing', item: 'medal of bavery' }, { type: 'toy', item: 'long rifle' }, { type: 'weapon', item: 'short rifle' }, { type: 'tool', item: 'hammer' }]],
      expected: JSON.stringify({ type: 'weapon', item: 'long rifle' }),
      testFunc: function (code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result == 'pass') {
            passed = true;
          } else if (JSON.stringify(result) !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          } else {
            passed = true;
          }
        } catch (e) {
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
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
    instructions: `write a function onThree that accepts and array of strings, loops through that array and returns the index of the string 'three'`,
    example: `onThree(['ready', 'set', 'one', 'two', 'three', 'go']) => 4`,
    test: {
      args: [['ok', 'get', 'ready', 'set', 'one', 'two', 'three', 'go']],
      expected: 6,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: `The door swung open as we forced in unison. The poured in and highlit the face a baby faced young man, in a rebel pilot jumpsuit. "Bless the stars! I would have died in this heap. Zep Branigan's the name, lieutenant of the 6th Rebel brigade. And sir, I thank you dearly for helping me, but I am on a mission of galactic importance. I have with me the attack plans for ambush on the central rebel base on Vitas." `,
    instructions: `write a function intiateLaunch that accepts four boolean parameters primed, landingGearExtended, coreActivate, shieldsEngaged that returns true if primed, coreActivate, and shieldsEngaged are true but landingGearExtended is false`,
    example: ``,
    test: {
      args: [true, true, false, true],
      expected: false,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'write a function laserCharger that stores inside of it a variable chargeLevel intially set to zero. laserCharger should return a function that each time it is called increments chargeLevel by 20, and then returns the current chargeLevel',
    example: 'var lasers = laserCharger(); <br>lasers() => 20 <br> lasers() => 40',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      }
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      }
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
          if (!passed) {
            updateError(message);
          }
        }
        return passed;
      },
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
          console.log('in catch');
          console.log(e.message);
          message = e.message;
          passed = false;
        } finally {
          console.log('in finally');
          console.log('passed: ', passed);
          console.log('result', result);
          console.log('expected', expected);
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

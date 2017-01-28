const story = [
  {
    storyText: 'Earth is gone. Years ago, but Rigel 3 isn\'t half bad. After the war I decided to retire on this quaint dustball to start a life as a tridag farmer, no more adventures for this old space cowboy. And everything was going just great, that is until today. Right off the horizon there appeared to collumn of smoke. "what could that be?" I should grab my binoculars from my bag.',
    instructions: 'Instructions: Write a function called grabBinoculars that recieves a items array, and returns the index of the string "binoculars"',
    example: 'grabBinoculars(["cloth", "spacegum", "binoculars"]) => 2',
    test: {
      args: [["cloth", "binoculars", "spaceGum", "laserRifle"]],
      expected: 1,
      testFunc: function test(code, input, expected) {
        var passed, result, message;
        try {
          result = eval(`(${code})`)(...input);
          if (result !== expected) {
            message = `returned: ${result}, expected: ${expected}`;
            passed = false;
          }
        } catch (e) {
          message = e.message;
          passed = false;
        } finally {
          if (!passed) {
            updateError(message);
          }
          return passed;
        }
      },
    },
  {
    storyText: "'wow a crashed B198 fighter, thats an alliance ship, hmm it could have some valuable salvage. Theres Sand Rats out there though, I should grab my rifle out of the garage' ",
    instructions: 'write a function grabLongRifle that accepts and array of objects and returns the object with the ',
    example: `
    grabLongRifle([ 
      { 
        item: 'toy', 
        type: 'long rifle' 
      }
      { 
        item: 'weapon', 
        type: 'long rifle' 
      }, 
      {
         item: 'clothing', 
         type: 'medal of bavery' 
      }
      ]) => { item: 'weapon', type: 'long rifle' };
    `,
    test: {
      args: [{ item: 'container', type: 'fuel can' }, { item: 'weapon', type: 'long rifle' }, { item: 'clothing', type: 'medal of bavery' }, { item: 'toy', type: 'long rifle' }, { item: 'weapon', type: 'short rifle' }, { item: 'tool', type: 'hammer' }],
      expected: 12,
      func: 
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
    },
  },
  {
    storyText: "Earth is gone. The war took care of that. Pitting brother against brother in the blood rusted sands of the 405. I sat on the cold ground that had recently been victim to the rain. The stars grew brighter as the night turned colder. I felt utterly alone. On the bright side, I had just found my spapceship along the rubble. I planned to take it to space. I have to gather more materials for the trip ahead, but I'm almost there. An old, beaten down bag that I've had for years drapes along my shoulders. I figured I could carry 60 pounds or so before it became too much. So, I headed home to gather my supplies. Once there I began to work out the kinks. I dealt with gas first.",
    instructions: 'Instructions: Write a function called accumWeight that receives an array of weight values and returns the total weight.',
    example: 'accumWeight([6, 2, 4]) => 12',
    test: {
      args: [],
      expected: 12,
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
function updateError(error) {
  $error.fadeOut().text('');
  $error.append(error).fadeIn();
}
function testInput() {
  var code = getCode();
  var input = clone(currentPoint().test.args);
  var expected = currentPoint().test.expected;
  return testFunc(code, input, expected);
}
function saveInput() {
  inputs.push(getCode());
}
function updateProgress() {
  $progress.css('width', `${Math.ceil(((storyIndex + 1) / story.length) * 100)}%`);
}
function next() {
  var funcs = [updateStory, updateInstructions, updateExample, clearCode, updateProgress];
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

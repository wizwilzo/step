// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!', 'amber is bad'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
//   console.log(greetingContainer.innerText);
  greetingContainer.innerText = greeting;
}

function compareTwoSongs() {
    var map = {}
    map = {"Virtual Riot All We Know remix" : 1445491, "Fireflies by Owl City" : 411_000_000, "When Can I See You Again by Owl City" : 60_000_000, "Darude Sandstorm" : 211_000_000, "The Spectre by Alan Walker" : 924_000_000, "Shelter by Porter Robinson" : 64_000_000};
    const options = ["Virtual Riot All We Know remix", "Fireflies by Owl City", "When Can I See You Again by Owl City", "Darude Sandstorm", "The Spectre by Alan Walker", "Shelter by Porter Robinson"]
    const r1 = options[Math.floor(Math.random() * options.length)];
    const r2 = options[Math.floor(Math.random() * options.length)];
    while (r2 == r1) {
        r2 = options[Math.floor(Math.random() * options.length)];
    }
    const musicContainer = document.getElementById('music-comparison-container');
    musicContainer.innerText = "Which song has more views on YouTube? " + r1 + " or " + r2 + "?";



    // var answer = ""
    // if (map.get(r1) > map.get(r2)) {
    //     answer = r1;
    // }
    // else {
    //     answer = r2;
    // }

    const hoverContainer = document.getElementById('music-hover-container');
    hoverContainer.innerHTML = "<style>#answer:hover {color:blue} #answer{color:white}</style><p>hover over me for the answer</p><p id=\"answer\">test 1</p>";
    

}
import { eeeSem } from "./eeeSemesterDetails.js";
// console.log(eeeSem);

let appDiv = document.getElementById("app");

eeeSem.forEach(function (sem) {
    appDiv.innerHTML += createSemDiv(sem);
});

// Lastly, add calculate btn to app div
appDiv.innerHTML += `<button id="calculate-btn" class="btn btn-primary" hidden>Calculate</button>`;

let calcBtn = document.getElementById("calculate-btn");



// Functions used
function createSemDiv(sem) {
    let createSubsArr = function (subs) {
        let code = '';
        subs.forEach((sub) => (code += createSubDiv(sub, sem.name)));
        return code
    }
    return `<div id="${sem.name}" class="sem-div" hidden>
        <h2>${sem.name}</h2>
        <h4>Theory</h4>
        <div class="row g-2"> ${createSubsArr(sem.theory)} </div>
        <h4 class="mt-2">Practicals</h4>
        <div class="row g-2 mb-2"> ${createSubsArr(sem.practicals)} </div>
    </div>`;;
}

function createSubDiv(sub, semName) {
    return `
    <div class="col-md-6">
    <div id="${sub.code}" class="card h-100 p-3">
        <div class="row h-100">
          <div class="col">
            <div class="row">
              <div class="col-auto">
                <p class="text-muted" style="margin-top: 0; margin-bottom: 0;">
                  ${sub.code}
                </p>
              </div>
              <div class="col">
                <p class="text-muted text-end" style="margin-top: 0; margin-bottom: 0;">
                  Credits: ${sub.credits}
                </p>
              </div>
            </div>
            
            <h5 class="mb-0">${sub.name}</h5>
          </div>
          <div class="col-auto align-self-center">
            <select id="${sub.code}" class="form-select grade-select ${semName}" name="${sub.name}"
            data-credits="${sub.credits}">
              <option value="10">O</option>
              <option value="9">A+</option>
              <option value="8">A</option>
              <option value="7">B+</option>
              <option value="6">B</option>
              <option value="0">U/RA</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    `;
}
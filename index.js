import { eeeSem } from "./eeeSemesterDetails.js";
console.log(eeeSem);

let semSelect = document.querySelector("#semester-selector");
semSelect.addEventListener('input', selectSem);

let calcBtn = document.getElementById("calculate-btn");
calcBtn.addEventListener('click', calcBtnOnClick);

let SelectedSemesterValue;

function selectSem(e) {
    SelectedSemesterValue = e.target.value
    console.log(SelectedSemesterValue);

    let semDivsArr = document.querySelectorAll(".sem-div");
    for (let div of semDivsArr) {
        div.hidden = true;
    }

    let semDiv = document.getElementById(SelectedSemesterValue);
    console.log(semDiv);
    semDiv.hidden = false;

    // btn - visible
    calcBtn.hidden = false;
}

function calcBtnOnClick(e) {
    console.log("Clicked !");

    // gpa calculation
    let semSubs = document.getElementsByClassName(SelectedSemesterValue);
    // console.log(semSubs);

    let totalPointsGained = 0;
    let totalCredits = 0;
    let passFlag = true;

    for (const sub of semSubs) {
        totalPointsGained += sub.value * sub.dataset.credits;
        if (sub.value != 0) {
            totalCredits +=  Number(sub.dataset.credits);
        } else {
            passFlag = false;
        }
    }
    console.log("T.P. = " + totalPointsGained);
    console.log("T.C. = " + totalCredits);
    let gpaCalculated = totalPointsGained/totalCredits;
    console.log("GPA = " + gpaCalculated);
    console.log(passFlag ? "Passed" : "Failed");
    
    let result_div = document.getElementById("result");
    result_div.hidden = false;
    let gpa_span = document.getElementById("result-gpa");
    gpa_span.textContent = gpaCalculated.toFixed(3);

    // credits, total credits
    let result_credits_gained = document.getElementById("result-credits-gained");
    result_credits_gained.textContent = totalPointsGained;

    let result_total_credits = document.getElementById("result-total-credits");
    result_total_credits.textContent = totalCredits;

    // scroll to result_div
    result_div.scrollIntoView();
}

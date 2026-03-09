const splash = document.getElementById("splash");
const onboarding = document.getElementById("onboarding");
const onboarding2 = document.getElementById("onboarding2");
const welcome = document.getElementById("welcome");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

const signup = document.getElementById("signup");
// login screen may not exist yet; guard any usage
const login = document.getElementById("login");

const createAccount = document.getElementById("createAccount");
const signIn = document.getElementById("signIn");

const goLogin = document.getElementById("goLogin");
// optional link/button used later; if it isn't in the DOM avoid errors
const goSignup = document.getElementById("goSignup");

const backSignup = document.getElementById("backSignup");
const backLogin = document.getElementById("backLogin");

const permission = document.getElementById("permission");


const continueGuest = document.getElementById("continueGuest");


const profile = document.getElementById("profile");
const allowLocation = document.getElementById("allowLocation");
const skipLocation = document.getElementById("skipLocation");

const backProfile = document.getElementById("backProfile");

/* PROFILE SELECTION */

const profileCards = document.querySelectorAll(".profile-option");
const continueBtn = document.getElementById("continueProfile");

/*Preferences Icons*/

const continueProfile = document.getElementById("continueProfile");
const priorities = document.getElementById("priorities");

/* PRIORITIES SELECTION */

const priorityCards = document.querySelectorAll(".priority-option");
const priorityCounter = document.getElementById("priorityCount");
const continuePriorities = document.getElementById("findRoutes");

const backPriorities = document.getElementById("backPriorities");



/* PREFERENCE SLIDERS */

const slidersContainer = document.getElementById("slidersContainer");
const preferenceSliders = document.getElementById("preferenceSliders");
const backSliders = document.getElementById("backSliders");

const priorityNames = {
"Fastest":"Total Travel Time",
"Cheapest":"Lower Cost",
"Less Crowded":"Low Crowd Level",
"Comfortable":"Comfort Level",
"Short Wait":"Short Waiting Time",
"Less Walking":"Less Walking"
};

const priorityIcons = {
"Fastest":"fastest.png",
"Cheapest":"cheapest.png",
"Less Crowded":"crowded.png",
"Comfortable":"comfort.png",
"Short Wait":"wait.png",
"Less Walking":"walk.png"
};

/* SLIDERS -> ADVANCED FILTERS */

const savePreferences = document.getElementById("savePreferences");
const advancedFilters = document.getElementById("advancedFilters");
const backAdvanced = document.getElementById("backAdvanced");

const skipProfile = document.getElementById("skipProfile");

/* ADVANCED FILTERS -> DEFAULT PRIORITY */

const applyFilters = document.querySelector("#advancedFilters .btn-primary");
const defaultPriority = document.getElementById("defaultPriority");

const backDefault = document.getElementById("backDefault");


const editPriority = document.getElementById("editPriority");

//continue to app button (from default priority)
const continueApp = document.getElementById("continueApp");



const homePage = document.getElementById("homePage");

const continueAppBottom = document.getElementById("continueAppBottom");


//collapsible and routes
const routeOptions = document.getElementById("routeOptions");
const findRouteBtn = document.querySelector(".find-route-btn");
const backHome = document.getElementById("backHome");



const toggleAdjust = document.getElementById("toggleAdjust");
const adjustContent = document.getElementById("adjustContent");
const adjustIcon = document.getElementById("adjustIcon");










//----------------------------------------------------------
/* SPLASH */

splash.addEventListener("click", function(){

splash.classList.add("active");

setTimeout(()=>{
splash.style.display="none";
onboarding.classList.add("show");
},800);

});


/* onboarding 1 → onboarding 2 */

next1.addEventListener("click", function(){

onboarding.classList.remove("show");
onboarding2.classList.add("show");

});


/* onboarding 2 → welcome */

next2.addEventListener("click", function(){

onboarding2.classList.remove("show");
welcome.classList.add("show");

});


/* welcome → signup */

createAccount.addEventListener("click",function(){

welcome.classList.remove("show");
signup.classList.add("show");

});


/* welcome → login */

if (signIn) {
    signIn.addEventListener("click", function(){
        welcome.classList.remove("show");
        if (login) login.classList.add("show");
    });
}


/* welcome -> permission (guest) */

if(continueGuest){
    continueGuest.addEventListener("click",function(){

        /* clear stored name */
        localStorage.removeItem("ezrouteUser");

        welcome.classList.remove("show");
        permission.classList.add("show");

    });
}

/* signup → login */

goLogin.addEventListener("click",function(){

signup.classList.remove("show");
login.classList.add("show");

});


/* login → signup */

if (goSignup) {
    goSignup.addEventListener("click", function(){
        if (login) login.classList.remove("show");
        signup.classList.add("show");
    });
}


/* signup → welcome */

backSignup.addEventListener("click", function(){

signup.classList.remove("show");
welcome.classList.add("show");

});


/* login → welcome */

backLogin.addEventListener("click", function(){

login.classList.remove("show");
welcome.classList.add("show");

});



/* login -> permission */

document.querySelector("#login .btn-primary").addEventListener("click", function(){

login.classList.remove("show");
permission.classList.add("show");

});

/* signup -> permission */

document.querySelector("#signup .btn-primary").addEventListener("click", function(){

const fullName = document.getElementById("signupName").value;

if(fullName){

const firstName = fullName.split(" ")[0];

localStorage.setItem("ezrouteUser", firstName);

}

signup.classList.remove("show");
permission.classList.add("show");

});

/* permission -> profile */

if(allowLocation){
allowLocation.addEventListener("click",function(){

permission.classList.remove("show");
profile.classList.add("show");

});
}

if(skipLocation){
skipLocation.addEventListener("click",function(){

permission.classList.remove("show");
profile.classList.add("show");

});
}


if(backProfile){
backProfile.addEventListener("click",function(){

profile.classList.remove("show");
permission.classList.add("show");

});
}
continueBtn.disabled = true;
continueBtn.style.opacity = "0.5";

profileCards.forEach(card => {

card.addEventListener("click", () => {

card.classList.toggle("active");

const selected = document.querySelectorAll(".profile-option.active");

if(selected.length > 0){
continueBtn.disabled = false;
continueBtn.style.opacity = "1";
}
else{
continueBtn.disabled = true;
continueBtn.style.opacity = "0.5";
}

});

});

/*preferences icons*/
if(continueProfile){
continueProfile.addEventListener("click",function(){

profile.classList.remove("show");
priorities.classList.add("show");

});
}


continuePriorities.disabled = true;
continuePriorities.style.opacity = "0.5";

//Priority Card Interaction (Same Logic as Profile)

priorityCards.forEach(card => {

card.addEventListener("click", () => {

card.classList.toggle("active");

const selected = document.querySelectorAll(".priority-option.active");

priorityCounter.textContent = selected.length;

if(selected.length > 0){
continuePriorities.disabled = false;
continuePriorities.style.opacity = "1";
}
else{
continuePriorities.disabled = true;
continuePriorities.style.opacity = "0.5";
}

});

});


//back buttoons (priorities -> profile)

if(backPriorities){
backPriorities.addEventListener("click",function(){

priorities.classList.remove("show");
profile.classList.add("show");

});
}


//continue button (priorities -> preference sliders)

if(continuePriorities){
continuePriorities.addEventListener("click",function(){

priorities.classList.remove("show");

if(preferenceSliders){
preferenceSliders.classList.add("show");
}

});
}


/* priorities → sliders */

    if(continuePriorities){
    continuePriorities.addEventListener("click",function(){

    const selected = document.querySelectorAll(".priority-option.active");

    slidersContainer.innerHTML = "";

    selected.forEach(card => {

    const key = card.querySelector("h3").textContent;
    const label = priorityNames[key];
    const icon = priorityIcons[key];

    const slider = document.createElement("div");
    slider.className = "slider-item";

    slider.innerHTML = `

    <div class="slider-label">

    <div class="slider-left">

    <img src="${icon}" class="slider-icon">

    <span>${label}</span>

    </div>

    <span class="slider-value">5/10</span>

    </div>

    <input type="range" min="0" max="10" value="5" class="slider-input">

    `;

    slidersContainer.appendChild(slider);

    });

    priorities.classList.remove("show");
    preferenceSliders.classList.add("show");

    });
    }


    /* slider live value */

    document.addEventListener("input",function(e){

    if(e.target.classList.contains("slider-input")){

    const value = e.target.value;
    const label = e.target.parentElement.querySelector(".slider-value");

    label.textContent = value + "/10";

    }

    });


    if(backSliders){
    backSliders.addEventListener("click",function(){

    preferenceSliders.classList.remove("show");
    priorities.classList.add("show");

    });
    }

    /* SLIDERS -> ADVANCED FILTERS */
    if(savePreferences){
savePreferences.addEventListener("click",function(){

preferenceSliders.classList.remove("show");
advancedFilters.classList.add("show");

});
}

/* BACK BUTTON */

if(backAdvanced){
backAdvanced.addEventListener("click",function(){

advancedFilters.classList.remove("show");
preferenceSliders.classList.add("show");

});
}

/* SLIDER VALUES */

const transferSlider = document.getElementById("transferSlider");
const transferValue = document.getElementById("transferValue");

const walkingSlider = document.getElementById("walkingSlider");
const walkingValue = document.getElementById("walkingValue");

if(transferSlider){
transferSlider.addEventListener("input",function(){
transferValue.textContent = this.value;
});
}

if(walkingSlider){
walkingSlider.addEventListener("input",function(){
walkingValue.textContent = this.value;
});
}

/* PROFILE -> PRIORITIES (Skip) */

if(skipProfile){
skipProfile.addEventListener("click",function(){

profile.classList.remove("show");
priorities.classList.add("show");

});
}



if(applyFilters){
applyFilters.addEventListener("click",function(){

advancedFilters.classList.remove("show");
defaultPriority.classList.add("show");

generateDefaultPriority();

});
}



function generateDefaultPriority(){

const tagsContainer = document.getElementById("priorityTags");
const weightsContainer = document.getElementById("weightsList");

tagsContainer.innerHTML = "";
weightsContainer.innerHTML = "";

const selected = document.querySelectorAll(".priority-option.active");

selected.forEach(card =>{

let name = card.querySelector("h3").textContent;
const icon = priorityIcons[name];

const tag = document.createElement("div");

tag.className = "priority-tag";

tag.innerHTML = `<img src="${icon}"> ${name}`;

tagsContainer.appendChild(tag);

});

/* weights */

const sliders = document.querySelectorAll(".slider-item");

sliders.forEach(slider=>{

const label = slider.querySelector(".slider-left span").textContent;

const value = slider.querySelector(".slider-input").value;

const percent = value * 10;

const row = document.createElement("div");

row.className="weight-row";

row.innerHTML = `
<span>${label}</span>
<span class="weight-value">${percent}%</span>
`;

weightsContainer.appendChild(row);

});

}





if(backDefault){
backDefault.addEventListener("click",function(){

defaultPriority.classList.remove("show");
advancedFilters.classList.add("show");

});
}


/* DEFAULT PRIORITY -> CHOOSE PRIORITIES (Edit) */

if(editPriority){
editPriority.addEventListener("click",function(){

defaultPriority.classList.remove("show");
priorities.classList.add("show");

});
}


if(continueApp){
continueApp.addEventListener("click",function(){

defaultPriority.classList.remove("show");
homePage.classList.add("show");

generateHomePriorities();
loadUserName();   // ← ADD THIS
});
}


//home page


function generateHomePriorities(){

const container = document.getElementById("homePriorities");
container.innerHTML="";

const selected = document.querySelectorAll(".priority-option.active");

selected.forEach(card=>{

const name = card.querySelector("h3").textContent;
const icon = priorityIcons[name];

const tag = document.createElement("div");
tag.className="priority-tag";

tag.innerHTML = `<img src="${icon}"> ${name}`;

container.appendChild(tag);

});

}

if(continueAppBottom){
continueAppBottom.addEventListener("click",function(){

defaultPriority.classList.remove("show");
homePage.classList.add("show");

generateHomePriorities();
loadUserName();   // ← ADD THIS
});
}

function loadUserName(){

const savedName = localStorage.getItem("ezrouteUser");

if(savedName){
document.getElementById("homeUserName").textContent =
savedName + "! 👋";
}else{
document.getElementById("homeUserName").textContent =
"Guest! 👋";
}

}




//routes and collapsible


//B. Show Selected Priorities


if(findRouteBtn){
findRouteBtn.addEventListener("click",function(){

homePage.classList.remove("show");
routeOptions.classList.add("show");

generateRoutePriorities();
generateRouteSliders();
rankRoutes();

});
}

if(backHome){
backHome.addEventListener("click",function(){

routeOptions.classList.remove("show");
homePage.classList.add("show");

});
}

//-----




function generateRoutePriorities(){

const container = document.getElementById("routePriorities");
const routeCount = document.getElementById("routeCount");
container.innerHTML = "";

const selected = document.querySelectorAll(".priority-option.active");

let names = [];

selected.forEach(card => {

let name = card.querySelector("h3").textContent;

/* convert names to short UI labels */

if(name === "Fastest") name = "Time";
if(name === "Cheapest") name = "Cost";
if(name === "Less Crowded") name = "Crowd";
if(name === "Comfortable") name = "Comfort";
if(name === "Short Wait") name = "Wait";
if(name === "Less Walking") name = "Walking";

names.push(name);

});



/* update count */

routeCount.textContent = names.length;


/* join priorities using + */

container.textContent = names.join(" + ");

}



//C. Generate Sliders in Collapsible

function generateRouteSliders(){

const container = document.getElementById("routeSliders");
container.innerHTML = "";

/* get sliders from preference sliders screen */

const originalSliders = document.querySelectorAll("#slidersContainer .slider-item");

originalSliders.forEach(slider => {

/* clone the entire slider */

const clone = slider.cloneNode(true);

/* update slider live value */

const input = clone.querySelector(".slider-input");
const label = clone.querySelector(".slider-value");

input.addEventListener("input",function(){
label.textContent = this.value + "/10";
rankRoutes();
});

/* append */

container.appendChild(clone);

});

}


//D. Collapsible Toggle


if(toggleAdjust){
toggleAdjust.addEventListener("click",function(){

if(adjustContent.style.display === "none"){
adjustContent.style.display = "block";
adjustIcon.textContent = "▲";
}
else{
adjustContent.style.display = "none";
adjustIcon.textContent = "▼";
}

});
}


/* ============================= 





/* ============================= */
/* ROUTE SELECTION + NAVIGATION */
/* ============================= */

const tripNavigation = document.getElementById("tripNavigation");
const backToRoutes = document.getElementById("backToRoutes");

let navMap = null; // Store map instance globally

/* HANDLE ROUTE BUTTON CLICK */

document.addEventListener("click", function(e){

const btn = e.target.closest(".select-route-btn");
if(!btn) return;






/* SELECT ROUTE */

if(!btn.classList.contains("start-route")){

document.querySelectorAll(".select-route-btn").forEach(b=>{
b.classList.remove("start-route");
b.textContent = "Select Route";
});

btn.classList.add("start-route");
btn.textContent = "Start This Route";

return;

}




/* START ROUTE */


routeOptions.classList.remove("show");
tripNavigation.classList.add("show");



/* ================= */
/* BACK TO ROUTES   */
/* ================= */
if(backToRoutes){
    backToRoutes.addEventListener("click", function(){
        tripNavigation.classList.remove("show");
        routeOptions.classList.add("show");
    });
}








/* SIMULATED STEP PROGRESS */

setTimeout(()=>{

const activeStep=document.querySelector(".step-icon.active");

if(activeStep){

activeStep.classList.remove("active");
activeStep.classList.add("completed");
activeStep.innerHTML="✓";

}

},8000);

});


//end trip button
const endTripBtn = document.querySelector(".action-btn.danger");

if(endTripBtn){
endTripBtn.addEventListener("click",function(){

tripNavigation.classList.remove("show");
tripComplete.classList.add("show");

/* populate summary */

if(selectedRoute){

document.getElementById("summaryRoute").textContent = selectedRoute.name;
document.getElementById("summaryDuration").textContent = selectedRoute.time + " mins";
let selectedRoute = null;

}

});
}
const crowdSlider = document.getElementById("crowdSlider");
const crowdValue = document.getElementById("crowdValue");

if(crowdSlider){
crowdSlider.addEventListener("input",function(){

let value = this.value;

let label="Moderate";

if(value<=3) label="Low";
if(value>=7) label="High";

crowdValue.textContent=value+"/10 - "+label;

});
}







/*OPTIONSSSSSSSSSSSSSSSSSSSSSSSS*/


const routeDatabase = [

{ name:"MRT-3 + Bus", transport:"train.png", type:"Transit", time:42, wait:"5 min", cost:"₱45", crowd:"Medium", scores:{time:9,cost:8,comfort:5,crowd:5}},
{ name:"Bus Direct", transport:"bus.png", type:"Bus", time:58, wait:"2 min", cost:"₱35", crowd:"High", scores:{time:6,cost:9,comfort:4,crowd:3}},
{ name:"Grab Ride", transport:"car.png", type:"Private", time:50, wait:"3 min", cost:"₱180", crowd:"Low", scores:{time:7,cost:2,comfort:9,crowd:9}},
{ name:"Jeep + MRT", transport:"jeepney.png", type:"Transit", time:55, wait:"6 min", cost:"₱40", crowd:"High", scores:{time:7,cost:7,comfort:3,crowd:3}},
{ name:"Bus + Walk", transport:"walk.png", type:"Transit", time:60, wait:"4 min", cost:"₱30", crowd:"Medium", scores:{time:6,cost:9,comfort:3,crowd:5}},

{ name:"MRT-3 + Jeep", transport:"train.png", type:"Transit", time:48, wait:"4 min", cost:"₱38", crowd:"Medium", scores:{time:8,cost:7,comfort:5,crowd:5}},
{ name:"Express Bus", transport:"bus.png", type:"Bus", time:52, wait:"5 min", cost:"₱50", crowd:"Medium", scores:{time:7,cost:7,comfort:5,crowd:6}},
{ name:"Grab Share", transport:"car.png", type:"Private", time:55, wait:"4 min", cost:"₱120", crowd:"Low", scores:{time:7,cost:3,comfort:8,crowd:9}},
{ name:"Jeep Only", transport:"jeepney.png", type:"Transit", time:70, wait:"6 min", cost:"₱25", crowd:"High", scores:{time:4,cost:10,comfort:2,crowd:2}},
{ name:"Bus + MRT", transport:"bus.png", type:"Transit", time:50, wait:"3 min", cost:"₱40", crowd:"Medium", scores:{time:8,cost:8,comfort:5,crowd:5}},

{ name:"MRT Express", transport:"train.png", type:"Transit", time:38, wait:"6 min", cost:"₱55", crowd:"Medium", scores:{time:10,cost:6,comfort:6,crowd:5}},
{ name:"Luxury Grab", transport:"car.png", type:"Private", time:45, wait:"2 min", cost:"₱220", crowd:"Low", scores:{time:8,cost:1,comfort:10,crowd:10}},
{ name:"Bus Rapid", transport:"bus.png", type:"Bus", time:54, wait:"4 min", cost:"₱42", crowd:"Medium", scores:{time:7,cost:7,comfort:5,crowd:6}},
{ name:"Jeep + Walk", transport:"jeepney.png", type:"Transit", time:65, wait:"5 min", cost:"₱28", crowd:"High", scores:{time:5,cost:9,comfort:2,crowd:3}},
{ name:"Walk + MRT", transport:"walk.png", type:"Transit", time:47, wait:"4 min", cost:"₱40", crowd:"Medium", scores:{time:8,cost:8,comfort:6,crowd:5}},

{ name:"Bus Premium", transport:"bus.png", type:"Bus", time:53, wait:"3 min", cost:"₱60", crowd:"Low", scores:{time:7,cost:6,comfort:7,crowd:8}},
{ name:"MRT + Bus Express", transport:"train.png", type:"Transit", time:41, wait:"4 min", cost:"₱48", crowd:"Medium", scores:{time:9,cost:7,comfort:6,crowd:5}},
{ name:"Grab Saver", transport:"car.png", type:"Private", time:52, wait:"5 min", cost:"₱95", crowd:"Low", scores:{time:7,cost:4,comfort:8,crowd:9}},
{ name:"Jeep + Bus", transport:"jeepney.png", type:"Transit", time:63, wait:"5 min", cost:"₱32", crowd:"High", scores:{time:5,cost:8,comfort:3,crowd:3}},
{ name:"Bus + Train Combo", transport:"bus.png", type:"Transit", time:46, wait:"4 min", cost:"₱45", crowd:"Medium", scores:{time:8,cost:7,comfort:6,crowd:5}}

];


function generateExplanation(route){

let reasons = [];

/* time reasoning */
if(route.scores.time >= 8){
reasons.push("faster travel time");
}

/* cost reasoning */
if(route.scores.cost >= 8){
reasons.push("lower cost");
}

/* comfort reasoning */
if(route.scores.comfort >= 8){
reasons.push("more comfortable ride");
}

/* crowd reasoning */
if(route.scores.crowd >= 8){
reasons.push("less crowded transport");
}

/* fallback if nothing matched */
if(reasons.length === 0){
return "Balanced option considering time, cost, and comfort.";
}

/* build sentence */

let sentence = reasons.join(" and ");

return "Best option for " + sentence + " based on your priorities.";

}



function getSliderWeights(){

const sliders = document.querySelectorAll("#routeSliders .slider-input");

let weights = {
time:5,
cost:5,
comfort:5,
crowd:5
};

sliders.forEach(slider=>{

const label = slider.parentElement
.querySelector(".slider-left span")
.textContent;

const value = Number(slider.value);

if(label.includes("Time")) weights.time = value;
if(label.includes("Cost")) weights.cost = value;
if(label.includes("Comfort")) weights.comfort = value;
if(label.includes("Crowd")) weights.crowd = value;

});

return weights;

}
function rankRoutes(){

const weights = getSliderWeights();

routeDatabase.forEach(route => {

route.score =
(route.scores.time * weights.time) +
(route.scores.cost * weights.cost) +
(route.scores.comfort * weights.comfort) +
(route.scores.crowd * weights.crowd);

});

routeDatabase.sort((a,b)=>b.score-a.score);

renderRoutes();

}




function renderRoutes(){

const container = document.querySelector(".routes-container");
container.innerHTML = "";

routeDatabase.slice(0,3).forEach((route,index)=>{
const explanation = generateExplanation(route);
const recommended = index===0 ? "recommended":"";

container.innerHTML += `
<div class="route-card ${recommended}">

${index===0 ? '<div class="recommended-badge">✨ RECOMMENDED</div>' : ""}

<div class="route-header">
<div>
<div class="route-name">${route.name}</div>
<div class="route-type">
<img src="${route.transport}" class="route-transport">
${route.type}
</div>
</div>

<div class="route-time">
<div class="time-value">${route.time}</div>
<div class="time-label">minutes</div>
</div>
</div>

<div class="route-details-grid">

<div class="detail-item">
<img src="wait.png" class="detail-icon">
<div class="detail-value">${route.wait}</div>
<div class="detail-label">WAIT</div>
</div>

<div class="detail-item">
<img src="cheapest.png" class="detail-icon">
<div class="detail-value">${route.cost}</div>
<div class="detail-label">COST</div>
</div>

<div class="detail-item">
<img src="crowded.png" class="detail-icon">
<div class="detail-value">${route.crowd}</div>
<div class="detail-label">CROWD</div>
</div>

</div>

${index===0 ? `
<div class="route-explanation">

<div class="explanation-title">
💡 Why this route?
</div>

<div class="explanation-text">
${explanation}
</div>

</div>
` : ""}

<button class="select-route-btn">
${index===0 ? "Start This Route" : "Select Route"}
</button>

</div>
`;

});
}
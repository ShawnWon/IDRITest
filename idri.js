
var result=[];
var risk="";

function init()
{
  result=[];
  document.getElementById("agebox").value="";
  var symptoms = document.getElementsByName("symptoms");
  for(var i = 0; i < symptoms.length; i++) {
    symptoms[i].checked=false;
  }

  var diets = document.getElementsByName("diets");
  for(var i = 0; i < diets.length; i++) {
     diets[i].checked = false;
  }
  // hide all the things
  document.getElementById("pgBasicInfo").style.display = "none";
  document.getElementById("pgSymptons").style.display = "none";
  document.getElementById("pgDiet").style.display = "none";
  document.getElementById("pgResults").style.display = "none";

  document.getElementById("basicinfoWarning").style.display = "none";
  document.getElementById("basicinfoMessage").style.display = "none";
  document.getElementById("symptoninfoMessage").style.display = "none";
  document.getElementById("symptoninfoWarning").style.display = "none";
  document.getElementById("symptoninfoSevere").style.display = "none";
  document.getElementById("dietInfo1").style.display = "none";
  document.getElementById("dietInfo2").style.display = "none";
  document.getElementById("dietInfo3").style.display = "none";
  document.getElementById("dietInfo4").style.display = "none";
  document.getElementById("dietInfo5").style.display = "none";
  document.getElementById("dietInfo6").style.display = "none";

  document.getElementById("gotoResultButton").style.display = "none";
  document.getElementById("basicNextButton").style.display = "none";
  document.getElementById("symptomNextButton").style.display = "none";

  document.getElementById("ageIncorrect").style.display == "none";
  document.getElementById("pregIncorrect").style.display == "none"
}



function checkBasicInfo() {
  document.getElementById("basicinfoWarning").style.display = "none";
  document.getElementById("basicinfoMessage").style.display = "none";
  document.getElementById("pregIncorrect").style.display = "none";
  document.getElementById("ageIncorrect").style.display = "none";
  document.getElementById("genderIncorrect").style.display = "none";
  var risk = false;


  var age = document.getElementById("agebox").value;
  if(age=="")   document.getElementById("ageIncorrect").style.display = "block";
  if (document.getElementById("ageIncorrect").style.display == "block")
    return false;

  var gender = document.getElementsByName("gender");
  var selectedgender = "";
  var ageNum = parseInt(age);
  if (ageNum >3 && ageNum < 16) risk=true;

  for(var i = 0; i < gender.length; i++) {
    if(gender[i].checked)
     selectedgender = gender[i].value;
  }
  if(selectedgender == "") {
      document.getElementById("genderIncorrect").style.display = "block";
      return false;
  }

  if(selectedgender == "Female"){
    var preg = document.getElementsByName("pregnant");
    var pregstatus = "";

    for(var i = 0; i < preg.length; i++) {
      if(preg[i].checked)
       pregstatus = preg[i].value;
    }
    if(pregstatus == "") {
      document.getElementById("pregIncorrect").style.display = "block";
      return false;
    }

    if(pregstatus == "Yes"||(age>12 && age<45)) risk= true;

  }

  if(risk == true){
    document.getElementById("basicinfoWarning").style.display = "block";
  }
  else {
    document.getElementById("basicinfoMessage").style.display = "block";
  }
  document.getElementById("basicNextButton").style.display = "block";

}

function displayFemaleOption(){
  document.getElementById("femaleOptions").style.display = "block";
}

function hideFemaleOption(){
  document.getElementById("femaleOptions").style.display = "none";
}

function validateAgeInput(){
  var age = document.getElementById("agebox").value;
  if(isNaN(age)){
    document.getElementById("ageIncorrect").style.display = "block";
  }
  else{
    ageNum = parseInt(age);
    if(ageNum>0 && ageNum<150){
      document.getElementById("ageIncorrect").style.display = "none";
    }
    else{
        document.getElementById("ageIncorrect").style.display = "block";
    }

  }
}

function gotoSymtons(){
  document.getElementById("pgBasicInfo").style.display = "none";
  document.getElementById("pgSymptons").style.display = "block";
  if(document.getElementById("basicinfoWarning").style.display == "block")
    result.push(document.getElementById("basicinfoWarning").innerHTML);
  else if(document.getElementById("basicinfoMessage").style.display == "block")
    result.push(document.getElementById("basicinfoMessage").innerHTML);
}

function checkSymptoms(){
  document.getElementById("symptoninfoMessage").style.display = "none";
  document.getElementById("symptoninfoWarning").style.display = "none";
  document.getElementById("symptoninfoSevere").style.display = "none";
  risk = "";


  var symptoms = document.getElementsByName("symptoms");
  var selectedsymtoms = [];
  for(var i = 0; i < symptoms.length; i++) {
    if(symptoms[i].checked)
     selectedsymtoms.push(symptoms[i].value);
  }


  if(selectedsymtoms.length <3){
    risk = "healthy";
  }
  else if(selectedsymtoms.length <5){
    risk = "warning";
  }
  else{
    risk = "severe";
  }

  if(risk == "healthy"){
    document.getElementById("symptoninfoMessage").style.display = "block";
  }
  else if (risk == "warning"){
    document.getElementById("symptoninfoWarning").style.display = "block";
  }
  else if(risk=="severe"){
    document.getElementById("symptoninfoSevere").style.display = "block";
  }
  document.getElementById("symptomNextButton").style.display = "block";
}

function checkDiet(){
  document.getElementById("dietInfo1").style.display = "none";
  document.getElementById("dietInfo2").style.display = "none";
  document.getElementById("dietInfo3").style.display = "none";
  document.getElementById("dietInfo4").style.display = "none";
  document.getElementById("dietInfo5").style.display = "none";
  document.getElementById("dietInfo6").style.display = "none";

  document.getElementById("gotoResultButton").style.display = "block";

  var diets = document.getElementsByName("diets");
  var selecteddiets = [];
  for(var i = 0; i < diets.length; i++) {
    if(diets[i].checked)
     selecteddiets.push(diets[i].value);
  }


  if(selecteddiets.includes("4"))
    document.getElementById("dietInfo1").style.display = "block";
  if(!selecteddiets.includes("1")||!selecteddiets.includes("2"))
    document.getElementById("dietInfo2").style.display = "block";
  if(!selecteddiets.includes("3"))
    document.getElementById("dietInfo3").style.display = "block";
  if((selecteddiets.includes("1")||selecteddiets.includes("2"))&&selecteddiets.includes("3"))
    document.getElementById("dietInfo4").style.display = "block";
  if((selecteddiets.includes("1")||selecteddiets.includes("2"))&&!selecteddiets.includes("3"))
    document.getElementById("dietInfo5").style.display = "block";
  if(selecteddiets.includes("3") && selecteddiets.length == 1)
    document.getElementById("dietInfo6").style.display = "block";
}

function gotoDiet(){
  document.getElementById("pgSymptons").style.display = "none";
  document.getElementById("pgDiet").style.display = "block";

  if(risk == "healthy"){
    result.push(document.getElementById("symptoninfoMessage").innerHTML);
  }
  else if (risk == "warning"){
    result.push(document.getElementById("symptoninfoWarning").innerHTML);
  }
  else if(risk=="severe"){
    result.push(document.getElementById("symptoninfoSevere").innerHTML);
  }
}

function gotoResults(){
  document.getElementById("pgDiet").style.display = "none";
  document.getElementById("gotoResultButton").style.display = "none";
  document.getElementById("pgResults").style.display = "block";

  if(document.getElementById("dietInfo6").style.display == "block")
    result.push(document.getElementById("dietInfo6").innerHTML);
  if(document.getElementById("dietInfo5").style.display == "block")
    result.push(document.getElementById("dietInfo5").innerHTML);
  if(document.getElementById("dietInfo4").style.display == "block")
    result.push(document.getElementById("dietInfo4").innerHTML);
  if(document.getElementById("dietInfo3").style.display == "block")
    result.push(document.getElementById("dietInfo3").innerHTML);
  if(document.getElementById("dietInfo2").style.display == "block")
    result.push(document.getElementById("dietInfo2").innerHTML);
  if(document.getElementById("dietInfo1").style.display == "block")
    result.push(document.getElementById("dietInfo1").innerHTML);

  document.getElementById("ResultSummary").innerHTML= result.join("");
}

function resetForm()
{
  init();
  document.getElementById("pgMainMenu").style.display = "block";
}

function startAnalysis()
{
  document.getElementById("pgMainMenu").style.display = "none";
  document.getElementById("pgBasicInfo").style.display = "block";
  //loadQuiz();
  //nextQuestion();
}

//function for getting a random activity upon clicking
function randomActivityGenerator(){
    axios.request({
        method:"GET",
        url:"http://www.boredapi.com/api/activity/"
    }).then(activityFound).catch(activityFail);
}

function activityFound (response){
    console.log(response);
    document.getElementById("randomActivity").innerText=response.data.activity; //choosing a random activity in the array
}

function activityFail (error){
    console.log(error);
    document.getElementById("randomActivity").innerText="failed to get activity";
}
//creating an event listener for clicking the "get random activity" button
document.getElementById("randomActivityButton").addEventListener('click', randomActivityGenerator);


//function for activity based on number of participants

function recommendedActivity(){
    axios.request({
        method : "GET",
        url:"https://www.boredapi.com/api/activity?participants=:participants",
        data:{
            participants:document.getElementById("participantNumber").value
        }
    }).then(recommendedSuccess).catch(recommendedFail);
}

function recommendedSuccess(response){
    console.log(response);
    document.getElementById("recommendedActivity").innerText = response.data.value;
}

function recommendedFail (error){
    console.log(error);
}

document.getElementById("recommendedActivityButton").addEventListener('click', recommendedActivity);

//I couldn't figure out how to link the option to the response
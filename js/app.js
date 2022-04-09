function randomActivityGenerator(){
    axios.request({
        method:"GET",
        url:"http://www.boredapi.com/api/activity/"
    }).then(activityFound).catch(activityFail);
}

function activityFound (response){
    console.log(response);
    document.getElementById("randomActivity").innerText=response.data.activity;
}

function activityFail (error){
    console.log(error);
    document.getElementById("randomActivity").innerText="failed to get activity";
}

document.getElementById("randomActivityButton").addEventListener('click', randomActivityGenerator);
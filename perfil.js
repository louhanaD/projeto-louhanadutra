var userData = JSON.parse(localStorage.getItem('userData'));

console.log(userData);

function loadUserData() {
    $('#bordaAvatar h3').text(userData.first_name + ' ' + userData.last_name);
    var initials = userData.first_name.charAt(0) +  userData.last_name.charAt(0);
    $("bordaAvatar").text(initials);
    $(".email").text(userData.email);
    $(".age").text(userData.age + 'anos');
}

function init() {
    loadUserData();
}

init();
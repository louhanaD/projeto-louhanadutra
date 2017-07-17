var user = JSON.parse(localStorage.getItem('userData'));

function loadUserData() {
    var nameWrapper = $('.user-info h2');
    var avatar = $('.user-info .avatar');
    var listWrapper = $('.user-info ul');

    nameWrapper.html(user.first_name + ' ' + user.last_name);
}

function init() {
    loadUserData();
}

init();
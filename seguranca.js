
  var userData = localStorage.getItem('userData');
  		//transforma em um objeto de novo
  userData = JSON.parse(userData);

  if(userData == "" || userData == undefined){
  	window.location = 'social.network.html';
  }
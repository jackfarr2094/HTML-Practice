function getInfo () {
let request = new XMLHttpRequest();
request.open ("GET", "https://gist.githubusercontent.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc/raw/39b06a32e4a58fc1fe63c7478a97edccd21138f1/superheroes.json");
	set.response.String;
request.onload = function() {
	responseString = request.response;
	}
request.send();
consolelog(responseString);
}
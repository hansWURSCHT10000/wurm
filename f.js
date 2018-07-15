console.log('works');

var x = new XMLHttpRequest();
x.open('POST', '/banking/?page=transfer2');
x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
x.send('account=8030098&amount=1000&intended_use=&receiver=');

console.log(x.resonse)

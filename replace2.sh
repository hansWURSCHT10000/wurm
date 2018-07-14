#!/bin/bash
sed -e '1i<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="' |
sed -e "\$a\">" |
sed \
-e s'/"/\\u0022/g' \
-e s'/§/\\u00A7/g' \
-e s'/&/\\u0026/g' \
-e s'/ß/\\u00df/g' \
-e s'/´/\\u00b4/g' \
-e s'/</\\u003c/g' \
-e s'/>/\\u003e/g' \
-e s'/°/\\u00b0/g' |\
tr -d '\n'

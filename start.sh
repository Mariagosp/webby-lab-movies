#!/bin/sh

echo "window.env = {" > /usr/share/nginx/html/env.js
echo "  API_URL: \"${API_URL}\"" >> /usr/share/nginx/html/env.js
echo "};" >> /usr/share/nginx/html/env.js

nginx -g "daemon off;"

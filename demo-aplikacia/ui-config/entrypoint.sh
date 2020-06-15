#!/bin/sh

export SPRING_API_URL 
envsubst '$SPRING_API_URL' < /usr/share/nginx/html/index.html > /usr/share/nginx/html/index.substituted.html
cat /usr/share/nginx/html/index.substituted.html
rm /usr/share/nginx/html/index.html
mv /usr/share/nginx/html/index.substituted.html /usr/share/nginx/html/index.html
exec "$@"

nginx -g "daemon off;"
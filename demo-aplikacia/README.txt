Spustenie aplikacia

1. Rozzipovanie docker image-ov mvsr-ui.zip, mvsr-demo-spring.zip, mvsr-postgres.zip
2. Load image-ov 
    docker load -i mvsr-ui.tar
    docker load -i mvsr-demo-spring.tar
    docker load -i mvsr-postgres.tar
3. V docker compose treba nastavit env premenne podla adresy servera, kde sa aplikacia spusti SPRING_API_URL, DB_HOST
4. Spustenie aplikacie "docker-compose up -d"
5. GUI aplikacie je na porte http://host:80, Swagger API je dostupny http://host:9080/swagger-ui.html

V adresari ui-config je subor entrypoint.sh treba musi nastavit prava "chmod +x entrypoint.sh".

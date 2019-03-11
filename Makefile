### Helpful commands to build and run our services

build:
	docker-compose build

run:
	docker-compose up -d

down:
	docker-compose down

log-frontend:
	docker-compose logs -f frontend

log-backend:
	docker-compose logs -f flask-backend

log-activity:
	docker-compose logs -f activity-server

pip-install: # usage: `make pip-install package=<package>`
	docker exec -it $$(docker ps -q -f "ancestor=datateam_flask-backend") sh -c "cd /var/backend && pip install $(package) && pip freeze > requirements.txt"

pip-uninstall: # usage: `make pip-uninstall package=<package>`
	docker exec -it $$(docker ps -q -f "ancestor=datateam_flask-backend") sh -c "cd /var/backend && pip uninstall -y $(package) && pip freeze > requirements.txt"

mongo-cli:
	docker exec -it $$(docker ps -q -f "ancestor=mongo") sh -c "mongo"

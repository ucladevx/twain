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

pip-install: # usage: `make pip-install package=<package>`
	docker exec -it $$(docker ps -q -f "ancestor=datateam_flask-backend") sh -c "cd /var/backend && pip install $(package) && pip freeze > requirements.txt"

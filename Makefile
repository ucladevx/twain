### Helpful commands to build and run our services

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

log-frontend:
	docker-compose logs -f frontend

log-backend:
	docker-compose logs -f flask-backend

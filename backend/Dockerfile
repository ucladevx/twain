FROM ubuntu:16.04

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

# We copy just the requirements.txt first to leverage Docker cache
RUN mkdir /var/backend
COPY ./requirements.txt /var/backend/requirements.txt

WORKDIR /var/backend
RUN pip install -r requirements.txt

WORKDIR /var/backend

ENV FLASK_APP=app
ENV FLASK_DEBUG=1
ENTRYPOINT ["flask"]
CMD ["run", "--host", "0.0.0.0"]

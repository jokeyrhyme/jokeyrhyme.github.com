FROM ruby:2.3-alpine

RUN ["apk", "--update", "add", "g++", "gcc", "libffi-dev", "make", "ruby-dev", "zlib-dev"]

RUN mkdir /app
WORKDIR /app

COPY ./ /app/

RUN ["bundle", "install"]

EXPOSE 4000

ENTRYPOINT ["jekyll", "serve", "--watch"]

[![Build Status](https://travis-ci.org/garystafford/fav-color-ngweb.svg?branch=master)](https://travis-ci.org/garystafford/fav-color-ngweb)

# Favorite Color Front-end Web Application

_Work in Progress_

## Introduction

An Angular 1.5 front-end web application, which makes API calls to the [Favorite Color Service](https://github.com/garystafford/fav-color-service) Spring Boot RESTful microservice, backed by MongoDB. Part of an upcoming article on CI/CD with Spring Boot, HashiCorp product-line, and AWS.

## Quick Start

To clone, build, test, and run this application locally, requires the [Favorite Color Service](https://github.com/garystafford/fav-color-service) is first running locally, on `http://localhost:8091`.

```bash
git clone https://github.com/garystafford/fav-color-ngweb.git
cd fav-color-ngweb
npm install -g bower gulp-cli
npm install
bower install
npm start
```

The application will start on `http://localhost:3000`.

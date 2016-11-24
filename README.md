[![Build Status](https://travis-ci.org/garystafford/fav-color-ngweb.svg?branch=master)](https://travis-ci.org/garystafford/fav-color-ngweb)

# Favorite Color Web Application

## Introduction

An simple Angular 1.5 / Bootstrap SPA, which makes API calls to the [Favorite Color Service](https://github.com/garystafford/fav-color-service) Spring Boot RESTful microservice, backed by MongoDB.

## Quick Start

This project requires the [Favorite Color Service](https://github.com/garystafford/fav-color-service) is first running locally, on `http://localhost:8091`. To clone, build, test, and run this application locally:

```bash
git clone https://github.com/garystafford/fav-color-ngweb.git
cd fav-color-ngweb
npm install -g bower gulp-cli
npm install
bower install
npm start
```

The application will start on `http://localhost:3000`.

## Results

![Web UI](WebUI.png)

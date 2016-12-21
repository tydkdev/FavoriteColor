[![Build Status](https://travis-ci.org/garystafford/fav-color-ngweb.svg?branch=master)](https://travis-ci.org/garystafford/fav-color-ngweb)

# Favorite Color Web Application

## Introduction

Part of a three-tier architecture, provisioned and deployed to AWS, using HashiCorp Packer and Terraform. Favorite Color Web Application is a simple Angular 1.6 / Bootstrap 4 SPA, which makes API calls to the [Favorite Color Service](https://github.com/garystafford/fav-color-service) Spring Boot RESTful microservice, backed by MongoDB. Node is used for local development and testing. Node is not required for Production. I recommend that the client-side application be run on Apache web server.

## Quick Start

The Favorite Color Web Application requires that the [Favorite Color Service](https://github.com/garystafford/fav-color-service) is running, first, locally, on `http://localhost:8091`. It also required MongoDB is running.

Once MongoDB and the Favorite Color Service running separately, to clone, build, test, and run the Favorite Color Web Application, locally:

```bash
git clone https://github.com/garystafford/fav-color-ngweb.git
cd fav-color-ngweb
npm install -g bower gulp-cli
npm install
bower install
npm start
```

The application should start successfully on `http://localhost:3000`, and attempt to open it in your default web browser.

## Results

![Web UI](WebUI.png)

## Environment Configuration

Informational only, the project uses [gulp-ng-config](https://github.com/ajwhite/gulp-ng-config) `options.environment` [option](https://github.com/ajwhite/gulp-ng-config#optionsenvironment) for specifying environment specific configuration. The master configuration, `configFile.json`, is located in the root of the project.

**Local**<br>
If you modify the master configuration, `configFile.json`, to recreate local development environment configuration file (`local`):

```bash
gulp client.config
```

This will create the `configFile.js` in the `client/dev` directory.

**Production**<br>
If you modify the master configuration, `configFile.json`, to recreate the AWS Production configuration file (`production`):

```bash
gulp client.config:dist
```

This will create the `configFile.js` in the `client/dist` directory.

## Build Production Distribution

To create the build artifacts for deployment to Production on AWS, use one Gulp command: `client.build:dist`. This command aggregates several other commands together:

```bash
gulp client.build:dist
```

## Run with Node in Production

To run the application using Node instead of Apache as the web server, use the following commands

```bash
NODE_ENV=production npm install
bower install --production --config.directory=bower_components
PORT=3004 node server.js
```

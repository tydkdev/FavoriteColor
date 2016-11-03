#!/bin/sh

# Deploys ZIP build artifact to GitHub (acts as pseudo binary repository)
# (3) environment variables in .travis.yml file used here - two are encypted
# travis encrypt GH_TOKEN=<your_token_hash> --add
# travis encrypt COMMIT_AUTHOR_EMAIL=<your_email_here> --add
# export GH_COLOR_ARTIFACT_REPO=github.com/<your_repo_path>.git

#set -x

zip -r client/dist-0.2.${TRAVIS_BUILD_NUMBER}.zip client/dist/

cd client

git init
git config user.name "travis-ci"
git config user.email "${COMMIT_AUTHOR_EMAIL}"

git add dist.zip
git commit -m "Deploy Travis CI Build #${TRAVIS_BUILD_NUMBER} artifacts to GitHub"
git push --force --quiet "https://${GH_TOKEN}@${GH_COLOR_ARTIFACT_REPO}" master:ngweb

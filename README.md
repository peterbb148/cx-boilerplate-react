# Carlsberg Digital React Boilerplate 🚀 edition by Peter Birkholm-Buch

This repo is forked from https://github.com/carlsberggbs/cx-boilerplate-react !!!

Al changes from there by me.

## Badges

Develop: ![alt text](https://img.shields.io/github/workflow/status/peterbb148/cx-boilerplate-react/Build/develop)
Master: ![alt text](https://img.shields.io/github/workflow/status/peterbb148/cx-boilerplate-react/Build/master)

## Initialization
This repo was configured using [yarn](https://yarnpkg.com), so you should use it to avoid conflicts.
Install it globally using 

```console
npm install yarn -g
```

## Building
After this you should be good to go with the usual steps
```console
yarn
yarn build
```

## Running
After this you should be good to go with the usual steps
```console
yarn
yarn start
```

## GitHub Actions

This repo is automatically built and deployed using GitHub Actions.

## Deployment

Should end up here: [Boilerplate](https://s3-cx-boilerplate-react-github-actions.s3-eu-west-1.amazonaws.com/index.html)

## Docker

If for some strange reason you would want to run this inside a container GitHub Actions automatically builds an image and stores it in the GitHub Container Registry on every PR to master.

### GitHub Actions

To download the image you must first login to (Docker Container Registry)[https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages] and then do:

```
docker pull peterbb148/cx-boilerplate-react
docker run -it -p 8080:80 peterbb148/cx-boilerplate-react
```
Which will start a container based on the image and attach to the running container to show console logs.

### Create Image Locally

```
docker build . --tag cx-boilerplate-react:latest
```
To push the image to Docker Hub run this:
```
docker tag cx-boilerplate-react:latest peterbb148/cx-boilerplate-react:latest
docker push peterbb148/cx-boilerplate-react:latest
```
To launch a container based on the image run this:
```
docker pull peterbb148/cx-boilerplate-react:latest
docker run --rm -d -p 80:80 peterbb148/cx-boilerplate-react:latest
```
Pushing to Amazon ECR
```
docker tag cx-boilerplate-react:latest 295277847209.dkr.ecr.eu-west-1.amazonaws.com/cx-boilerplate-react:latest
docker push 295277847209.dkr.ecr.eu-west-1.amazonaws.com/cx-boilerplate-react:latest
```

# site-reliability-challenge

This repository contains the configuration files for the project to depploy a simple hello-world web service (for this project, I deployed to a local instance of minikube and used a javascript application)

## STEPS:

### 1.INSTALL A LOCAL INSTANCE OF MINIKUBE

**Prerequisites**

a. Ensure you have enough resources on your system for the installation

b. Ensure you have docker running on your system. For instructions on how to install docker see [LINK](https://docs.docker.com/engine/install/)

**Intall instructions**

For detailed instuction on how to install minikube please refer to the [LINK](https://minikube.sigs.k8s.io/docs/start/)

### 2.DEPLOY A SAMPLE JS APPLICATION WITH 3 REPLICAS

a. Create a sample javascript application (See uploaded files)

b. Dockerize the application (See the Dockerfile), build the docker image and run on you local system.

  i. docker build . -t yourusername/node-web-app
  
  ii. docker run -p 49160:8080 -d yourusername/node-web-app

c. Upload to an image registry (dockerhub)

  i. docker push yourusername/node-web-app

d. Deploy to minikube (create and apply a deployment and service manifests)

  i. kubectl apply -f deployment.yml
  
  ii. kubectl apply -f service.yml

e. Access/Test the service, run "minikube service --url name of service" on your terminal to retrieve the URL then access the URL from a web browser

### **3. (Optional) AUTOMATE THE PROCESS USING GITHUB ACTIONS**

a. Create a new repository on github (you can use an existing repository as well)

b. Install git on you local host

c. Push your deployment files and manifests to the repository

d. Create a workflow

e. Make changes to trigger automatic build

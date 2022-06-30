This repository contains the configuration files for the project to create a small k8s cluster and deploy GitOps tooling (for this project, I deployed to a local instance of minikube).

# **STEPS:**

## **Prerequisites:**

        i. Install a WSL (Ubuntu) on your laptop. From a command line with root privileges, run  "wsl --install -d Ubuntu" or select another distribution

        ii. Install Docker. For instructions on how to install docker, see [LINK] (https://docs.docker.com/engine/install/)

        iii. Install and start minikube. Follow the instructions on the [LINK] (https://minikube.sigs.k8s.io/docs/start/)

        iv. Download and Install nodejs. See [LINK] (https://nodejs.org/en/download/)

        v. Download and Install Visual Studio Code. See [LINK] (https://code.visualstudio.com/download)

# **DEPLOY A SAMPLE APPLICATION**

a. Create a sample javascript application (See uploaded files).

b. Dockerize the application (See the Dockerfile), build the docker image and run on you local system.

    i. docker build . -t emmyforlife/node-web-app

    ii. docker run -p 49160:8080 -d emmyforlife/node-web-app

c. Upload to an image registry (dockerhub)

    i. docker push emmyforlife/node-web-app

d. Deploy to minikube (create and apply a deployment and service manifests for the sample application)

    i. kubectl apply -f deployment.yml

    ii. kubectl apply -f service.yml

e. Access/Test the service, run "minikube service --url name of service" on your terminal to retrieve the URL then access the URL from a web browser

# **AUTOMATE THE DEPLOYMENT PROCESS USING GITHUB ACTIONS**

a. Create a new repository on github (you can use an existing repository as well)

b. Install git on you local host

c. Push your deployment files and manifests to the repository

d. Create a workflow

e. Make changes to trigger an automatic build

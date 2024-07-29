pipeline{
  agent any
  stages{
    stage("checkout"){
      steps{
        checkout scm
      }
    }
    stage("test"){
      steps{
        sh 'npm install'
        sh 'npm test'
      }
    }
    stage("build"){
      steps{
        sh 'npm run build'
      }
    }
    stage("build image"){
      steps{
        sh 'docker build -t my-node-app:latest .'
      }
    }
    stage("Docker Push"){
      steps{
        withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
          sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
          sh 'docker tag my-node-app:latest bhyaziz/my-node-app:latest'
          sh 'docker push bhyaziz/my-node-app:latest'
          sh 'docker logout'
        }
      }
    }
  }
}

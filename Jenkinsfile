pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        script {
          docker.build('rajat/project3-node:latest')
        }
      }
    }

    stage('Run Docker Container') {
      steps {
        script {
          sh 'docker run -d -p 9095:3000 rajat/project3-node:latest'
        }
      }
    }
  }
}


pipeline {
  agent any

  stages {
    stage('Clone Code') {
      steps {
        git branch: 'main', url: 'https://github.com/rajatpatra-devops/project-2-node-nginx-compose.git'
      }
    }

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
          sh 'docker run -d -p 9095:3000 rajat/project3-node:latest || true'
        }
      }
    }
  }
}


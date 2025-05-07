pipeline {
    agent any

    environment {
       DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building Docker Images...'
                sh 'docker compose build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // No testing yet
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'docker compose up -d'
            }
        }
    }

}
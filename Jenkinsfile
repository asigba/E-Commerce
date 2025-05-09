pipeline {
    agent {
        docker {
            image 'docker:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    environment {
       DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Install Docker') {
            steps{
                echo 'Checking Docker installation...'
                sh 'docker-compose --version'
            }
        }

        stage('Build Database') {
            parallel {
                stage('Build PostgreSQL for User Service') {
                    steps {
                        echo 'Building PostgreSQL for User Service...'
                        sh 'docker-compose build postgres_user'
                    }
                }
                stage('Build PostgreSQL for Product Service') {
                    steps {
                        echo 'Building PostgreSQL for Product Service...'
                        sh 'docker-compose build postgres_product'
                    }
                }
            }
        }
        stage('Build Backend Services') {
            parallel {
                stage('Build User Service Backend') {
                    steps {
                        echo 'Building the User Service Backend...'
                        sh 'docker-compose build user-service'
                    }
                }
                stage('Build Product Service Backend') {
                    steps {
                        echo 'Building the Product Service Backend...'
                        sh 'docker-compose build product-service'
                    }
                }
                stage('Build Order Service Backend') {
                    steps {
                        echo 'Building the Order Service Backend...'
                        sh 'docker-compose build order-service'
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                echo 'Building Docker Images...'
                sh 'docker-compose build frontend'
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
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            echo 'Cleaning up Docker resources...'
            sh 'docker-compose down'
        }
    }

}
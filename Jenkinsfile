pipeline {
    agent any
    stages{
        stage('Clone') {
            steps {
                print "clone docker"
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [ [ 
                    credentialsId: 'Thanakrit', 
                    url: 'https://github.com/ThanakritKhn/csi403lab.git'
            ] ]
            ])
            print "Clone Success"
            }
        }
        stage('Build') {
            steps {
                print "build docker"
        }
        }
        stage('Deploy Image') {
            steps {
                print "deploy image"
            }
        }
        stage('Testing') {
            steps {
                print "testing"
            }
        }
    }
}
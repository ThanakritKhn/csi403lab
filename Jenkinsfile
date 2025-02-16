pipeline {
    agent any
    stages {  
        stage('Check Out') { 
            steps {
                print 'Check Out'
                checkout([
                $class: 'GitSCM', 
                branches: [[name: '*/main']], 
                userRemoteConfigs: [ [ 
                credentialsId: 'admin', 
                url: "https://github.com/ThanakritKhn/csi403lab.git"
                ] ]
                ])
            }
        }
        stage('Build') { 
            steps {
                print 'Building and Deploying'
            }
        }
        stage('test') {
            steps {
                print 'Testing'
            }
        }
    }
}
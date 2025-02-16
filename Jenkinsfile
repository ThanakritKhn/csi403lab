pipeline {
    agent any
    stages {  
        steps{
            print 'Check Out'
            checkout([
$class: 'GitSCM', 
branches: [[name: '*/branchname1'], [name: '*/branchname2’], …[name: '*/branchnameX']], 
userRemoteConfigs: [ [ 
 credentialsId: 'id-from-github-credential-config', 
 url: 'git project url’ 
] ]
])
        }
        stage('git') { 
            steps {
                print 'git push'
            }
        }
        stage('Build') { 
            steps {
                print 'Building'
            }
        }
        stage('Deploy') {
            steps {
                print 'Deploying' 
            }
        }
        stage('test') {
            steps {
                print 'Testing'
            }
        }
    }
}

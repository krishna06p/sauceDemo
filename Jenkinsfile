pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    environment {
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}/.browsers"
    }
    stages{
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Install Playwright browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }
        stage('run tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'SauceDemo Playwright Report'
            ])
        }
    }
}

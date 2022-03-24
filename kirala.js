jobs:
- job: npmRunTest
  pool:
    vmImage: 'Ubuntu 16.04'
    vmImage: ubuntu-latest
    demands: npm

  timeoutInMinutes: 360

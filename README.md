# Steps to run the project

## 1. Initializing React Environment

  I. run the following command in terminal at respective directory, to install all required dependencies
     for the application to run on your machine

  ### `npm install`

  Make sure to have 'npm' installed beforehand, to check the node.js version type below command in terminal
  
  ### `node -v`
  
  To check the npm version type below command in terminal
  
   ### `npm -v`

## 2. Install REDUX DEV TOOLS

  I. install the redux dev tools extension (for google chrome) from the extension store or below link:
  
  ### https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

## 3. Install JSON_SERVER

  I. Run the below command in terminal to install the json-server for hosting the data required by the application to fetch
  
  ### `npm install -g json-server`
  
  or use the link below for more details
  
  ### https://www.npmjs.com/package/json-server
  
## 4. Initializing the JSON-SERVER

  I. navigate to (project_folder)>>data in your terminal

  II. run below command to set the json-server running, as data is being fetched from the JSON
      file "db.json" on port number 8000.

  ### `json-server db.json --port 8000`

## 5. Start the application

  I. Open another terminal in (project_folder) and run below command to start the application
     in default browser (Chrome Preferably for REDUX DEV TOOLS)

  ### `npm start`

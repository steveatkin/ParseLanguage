To get started with using the ParseLanguage API services you need to fork this project
and change the credentials to your own credentials.

Once you have this project up and running with the SDK for Node.js™ you can call the APIs directly or access them from IBM API Management.

The ParseLanguage API services contains the following contents:

*   routes

    This directory contains the end point routes for the services.

*   bin/www

    This is the Express startup script for the services.

*   manifest.yml

    This file contains the deployment information for the services to be deployed on Bluemix.

*   app.js

    This file establishes the routes to the services and connections to the Bluemix services.

*   package.json

    This file contains all the Node depedencies.


This application demonstrates how to create backend services deployed on Bluemix that can then be called from IBM API Management and published into in a Bluemix catalog.  

1. [Install the cf command-line tool](${doc-url}/#starters/BuildingWeb.html#install_cf).

2. Create a new SDK for Node.js™ based application in the Bluemix dashboard and select
a name and route for the application. The name and route that you select
will be used to access the application's APIs.

3. If you wish to build and deploy this application from your own system, then fork and pull this
repository to your local system.

4. If you are going to build and deploy directly from your system, then connect to Bluemix:

		cf api ${api-url}

5. If you are going to build and deploy directly from your system, then log into Bluemix:

		cf login -u ${username}
		cf target -o ${org} -s ${space}

6. If you want to build the application in IBM DevOps Services, then add a Stage from the "Build & Deploy" tab with a Build job type using the simple builder.

7. If you want to deploy the application from IBM DevOps services, then add a Stage from the "Build & Deploy" tab wih a Deploy job type. Fill in the fields for your Bluemix organization, space, and application name.

8. Access your app: [http://${route}](http://${route})

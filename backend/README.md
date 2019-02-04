# How to run a local instance of the backend Flask app

1. First, make sure you have the latest version of the repo and have Python 3 installed.  

2. Navigate into the backend folder.  

3. Begin a virtual environment, the process for doing so is as follows (***skip if you already have virtualenv installed***).
    1. We are using Python 3, so run the following command to install the ```virtualenv``` package: 
        ```python pip3 install virtualenv```
    2. Now that you have the virtualenv package setup, run the following command to set up your virtualenv:  
        ```python virtualenv -p python3 /path/to/virtual/environment``` e.g. ```python virtualenv -p python3 env``` <- will set up environment in ```python env``` folder of *current* directory.  
          
        *Note: don't set up your virtual environment in the same directory as the project, as it will store it in the directory and push the environment when you push back to git.*
    3. After your environment is set up, run the following command to enter the environment:  
        ```python source /path/to/virtual/environment/bin/activate``` e.g. ```python source env/bin/activate``` <- from previous example  
4. Now that you are inside your virtual environment, run the following command (inside the backend folder) to install all of the dependencies needed to run the server (***skip if the repository has been unchanged since your last repetition of this step***): 
    ```python pip3 install -r requirements.txt```
5. After installing all dependencies, you are ready to run the server on a local port. Navigate into the ```app``` directory and execute the ```flask run``` command to run the server. You should now have a running instance of the backend on ```localhost:5000```!
      
6. If step 5 does not work, run the  ``` export FLASK_APP = app.py``` command inside the app directory to set the path of the flask app and redo step 5.

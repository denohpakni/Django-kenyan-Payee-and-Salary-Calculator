# Launching Django Project on Heroku

## Requirments before starting
1. a free Heroku account.
2. [git]([https://git-scm.com/](https://git-scm.com/)). a free and open source distributed version control system
3. The latest version of [Python]([https://www.python.org/](https://www.python.org/)) installed in your computer.
4. Download and install the [Heroku Command Line Interface (CLI)](https://cli-assets.heroku.com/heroku-x64.exe).
5. An integrated development environment(IDE) eg. [VSCode]([https://code.visualstudio.com/](https://code.visualstudio.com/))


## Open git and/or cmd from git and then login to [Heroku](http://heroku.com/home)

	heroku login

> Assuming you've got your django project ready and **are in the main folder with the <code>manage.py</code> file**

## Activate/create your virtual environment

	virtualenv yourvirtualenvironmentname
	cd ...yourvirtualenvironmentname
	Scripts/activate.bat
	cd .. back to your root directory

****Make all the necessary pip installments, including django itself****

The neccessary ones are;
1. gunicorn 
2. whitenoise
3. django


## Create a requirements file

	pip freeze > requirements.txt
## Create a "Procfile" with no extension and with the following info:
- web: gunicorn projectname.wsgi --log-file -

## ***[optional]* ** Create a runtime.txt file. This will tell Heroku which version of python we are using. It contains;

- python-3.6.2

## Create a ".gitignore" file. These are the things we don't want pushed to Heroku. It contains;

	yourVirtualEnvironmentName/
	__pycache__/
	*.sqlite3
## Change the Django Project Settings
In the <code>settings.py</code> file, change the "ALLOWED_HOSTS" to 
	
	 = ['projectname.herokuapp.com']
> You can add the localhost '127.0.0.1' to the list of 'ALLOWED_HOSTS' for your local development.

### Configure static files with white noise
***Whitenoise allows your web app to serve its own static files, making it a self-contained unit that can be deployed anywhere without relying on nginx, Amazon S3 or any other external service. (Especially useful on Heroku, OpenShift and other PaaS providers.)***
>pip install whitenoise

#### Make sure **staticfiles** is configured correctly.

	STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
#### Enable WhiteNoise

Edit your  `settings.py`  file and add WhiteNoise to the  `MIDDLEWARE`  list. The WhiteNoise middleware should be placed directly after the Django SecurityMiddleware (if you are using it) and before all other middleware:

	MIDDLEWARE = [
	  'django.middleware.security.SecurityMiddleware',
	  'whitenoise.middleware.WhiteNoiseMiddleware',
	  # ...
	]

That’s it – WhiteNoise will now serve your static files.

### Collect you staticfiles

	python manage.py collectstatic


## Create a Heroku app using the CLI

	heroku create appname
### Go to the Heroku website & view created app
> Go to the new app's settings and add your python buildpack
## Make Git changes
	git status

### Make sure you're in the correct git for your app.

	heroku git:remote -a YourProjectName
#### Confirm you're in the correct git for your app.
 ***It Should show your Heroku app address***

	git remote -v 
### Add your files to your Heroku git

		git add .
		git status
### Make your first Commit

	$ git commit -m "-"
### Push to the master

	$ git push heroku master


If you make any changes to you site on your local development, you have to **Add, Commit, & PUSH to the Heroku master**

If you don't want to delete the entire application (perhaps you want to keep your add-ons and other configuration the same)
Deploy your new code, forcing the update by using the -f flag:

	$ git push heroku master -f

### Adding to your GitHub repository
In the Command prompt, add the URL for the remote repository where your local repository will be pushed.

	$ git add .
	$ git commit -m "some Comment"

Sets the new remote

	$ git remote -v
Verifies the new remote URL

Push the changes in your local repository to GitHub.

	$ git push origin master
Pushes the changes in your local repository up to the remote repository you specified as the origin


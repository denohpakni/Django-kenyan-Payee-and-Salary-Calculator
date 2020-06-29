# My Custom Django 2 Cheat Sheet

Its good practice to be working with a virtual environment

	pip install virtualenv

## Create a virtual environment

    virtualenv myvenv
    cd myvenv
    Scripts\activate.bat

### How to leave/exit/deactivate a Python virtualenv
Usually, activating a virtual environment gives you a shell function named:

    $ deactivate  

### Install django
	pip install django
### Creating a new project 
    django-admin startproject projectname 

### Add an app to a project 
    python3 manage.py startapp appname
### Starting the server 
	python3 manage.py runserver 

### Creating migrations 
    python3 manage.py makemigrations 

### Migrate the database 
    python3 manage.py migrate 

### clear the database completely
	python manage.py flush

### Creating a Super User for the admin panel 
    python3 manage.py createsuperuser 

### Collecting static files into one folder 
    python3 manage.py collectstatic 

### Checking your installed django version
 * Open cmd

     > >` python `
     > >` import django`
     > > `django.__version__`

###  generate a new requirements.txt or to update an existing one, use from within your virtual environment:
    pip freeze > requirements.txt

[The reference site](https://www.freecodecamp.org/news/improve-your-django-project-with-these-best-practices-47fd60a7bff3/)

For your convenience, make sure to execute this command in a folder that is being tracked by your Git repository. This allows other instances of the code to have access to the requirements.txt file as well.

### Installing packages from a requirements.txt file
	pip install -r requirements.txt

## Django Admin customizer

1. [django-admin-interface](https://pypi.org/project/django-admin-interface/)

2. [django-adminlte3](https://pypi.org/project/django-adminlte3/)

   

## Show database items on template
How to Retrieve All Objects of a Database Table in Django. [Link](http://www.learningaboutelectronics.com/Articles/How-to-retrieve-all-objects-of-a-database-table-in-Django.php)  so that we can render it within a template file.

## Clear a faulty/problematic database
This will happen when creating models and when you migrate the data, sme errors occur.
You can clear the migrations manually and delete the corrupt db.

#### Do the following;

>>> Deleted all the migration records except `__init__.py` file.

>> Also Deleted the db.sqlite3 file.

> And Then, run following commands

	    python manage.py makemigrations
	
	    python manage.py migrate

### How to delete a non-empty directory in Terminal?

    rm -rf folderTODelete

# [About GitHub and Git](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html)
After starting a django project;
Initialize a git repository

	git init

> to uninitialize run `rm -rf .git`

## Configure Git
To start using Git from your computer, you’ll need to enter your credentials (user name and email) to identify you as the author of your work. The user name and email should match the ones you’re using on GitLab.

In your shell, add your user name:

	git config --global user.name "your_username"

And your email address:

	git config --global user.email "your_email_address@example.com"

To check the configuration, run:

	git config --global --list

The --global option tells Git to always use this information for anything you do on your system. If you omit --global or use --local, the configuration will be applied only to the current repository.

## Basic Git commands
Initialize a local directory for Git version control
	git init
	
#### Add your files to your github repository

		git add .
		git status

### View your remote repositories
	git remote -v

### Add a remote repository from cmd line
A new repo from scratch:

	git init
	git commit -m "first commit"
    git remote add origin git@github.com:alexpchin/<reponame>.git
    git push -u origin master
    
You’ll use this source name every time you push changes to GitLab.com, so use something easy to remember and type.

### Create a branch
To create a new branch, to work from without affecting the master branch, type the following (spaces won’t be recognized in the branch name, so you will need to use a hyphen or underscore):

	git checkout -b <name-of-branch>

To delete remote branch

	$ git push --delete <remote_name> <branch_name>
	$ git branch -d <branch_name>

**Note that in most cases the remote name is origin.**

To Delete a Local Branch in your computer

    $ git branch -d branch_name
    $ git branch -D branch_name

Work on an existing branch
To switch to an existing branch, so you can work on it:

	git checkout <name-of-branch>

### Make your first Commit

	$ git commit -m "-"
### Push to the master

	$ git push origin master

### How to pull my project from github?

	$ git pull origin master

### create a local git repo Branch

	$ git checkout -b <branch name>

### Push branch to remote
	$ git push <REMOTE_NAME> <BRANCH_NAME>
	$ git push origin stage1

### Set local dev to an exisitng git repo
	$ git remote add <remote> <url>


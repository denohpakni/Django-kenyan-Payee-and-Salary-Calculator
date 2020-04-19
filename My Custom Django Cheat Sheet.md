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

     > > python 
     > >
     > > import django
     > >
     > > django.__version__

###  generate a new requirements.txt or to update an existing one, use from within your virtual environment:
    pip freeze > requirements.txt

[The reference site](https://www.freecodecamp.org/news/improve-your-django-project-with-these-best-practices-47fd60a7bff3/)

For your convenience, make sure to execute this command in a folder that is being tracked by your Git repository. This allows other instances of the code to have access to the requirements.txt file as well.

### Installing packages from a requirements.txt file
	pip install -r requirements.txt

## Django Admin customizer

1. [django-admin-interface](https://pypi.org/project/django-admin-interface/)

2. [django-sb-admin](https://pypi.org/project/django-sb-admin/)

   

## Show database items on template
How to Retrieve All Objects of a Database Table in Django. [Link](http://www.learningaboutelectronics.com/Articles/How-to-retrieve-all-objects-of-a-database-table-in-Django.php)  so that we can render it within a template file.

## Clear a faulty/problematic database
This will happen when creating models and when you migrate the data, sme errors occur.
You can clear the migrations manually and delete the corrupt db.

#### Do the following;

>>> Deleted all the migration records except __init__.py file.

>> Also Deleted the db.sqlite3 file.

> And Then, run following commands

	    python manage.py makemigrations

	    python manage.py migrate
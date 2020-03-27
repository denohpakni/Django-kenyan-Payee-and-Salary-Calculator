from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'index.html')

def result_page(request):
    return render(request,'result.html')
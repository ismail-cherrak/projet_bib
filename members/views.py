from django.shortcuts import render , redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate , login , logout



def signIN(request):
  if request.method == 'POST':
     username = request.POST['username']
     passw = request.POST['password']
     user = authenticate(username=username, password=passw)
     if user is not None :
        login(request , user)
        return render(request , 'homeTamp.html')
  

  return render(request , 'loginPage.html')

# Create your views here.

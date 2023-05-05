from django.shortcuts import render , redirect
#from django.contrib.auth.models import User
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth import get_user_model
from .models import books
User = get_user_model()

def add(request):
 if request.method == "POST":
         
    name = request.POST['name']
    auth = request.POST['auth']
    imag = request.FILES['imag']
    book = books(title=name , author = auth ,image=imag)
    book.save()
    return  render(request , 'testAdd.html')

    
 return render(request , 'testAdd.html')


def signIN(request):
 if request.method == "POST":
    
    
    mail = request.POST['email']
    passw = request.POST['pass']
    user = authenticate(request,username=mail, password=passw)
    if user is not None :
        login(request , user)
        return    redirect( 'main')
    else:
    
     return render(request , 'testLOG.html')    
 else: 
  
  return render(request , 'testLOG.html')
 
 
def singnUP(request):
   if request.method == 'POST':
     username = request.POST['username']
      
     mail = request.POST['mail']
     
     passw= request.POST['pass'];

     user = User(username= username , email=mail , password=passw )   
     user.save()
     return redirect( 'signIN')
   
   return render(request , 'HTML/testUP.html')
def main(request):
   book_list = books.objects.all()
   return render(request , 'testMain.html',{'book_list':book_list})

# Create your views here.

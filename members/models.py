from django.db import models
from django.contrib.auth.models import AbstractUser


class userBDD (models.Model):
    userName = models.CharField(max_length=100,default='any')
    books = models.CharField(max_length=100,default='any')
class books (models.Model):
    title = models.CharField(max_length=100,default='any')
    author = models.CharField(max_length=100,default='any')
    image =models.ImageField(null=True ,blank=True,upload_to="images/")
    available = models.BooleanField(default=False)

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)   
    
    
    

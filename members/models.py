from django.db import models


class userBDD (models.Model):
    userName = models.CharField(max_length=100,default='any')
    books = models.CharField(max_length=100,default='any')
    
    
    

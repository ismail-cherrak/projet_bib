from django.contrib import admin
from .models import userBDD
from .models import books
from .models import CustomUser
admin.site.register(userBDD)
admin.site.register(books)
admin.site.register(CustomUser)

# Register your models here.

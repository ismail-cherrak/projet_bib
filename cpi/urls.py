
from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls import   include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('members/',include('members.urls')),
    path('',views.home)
]

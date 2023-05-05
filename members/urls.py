

from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
   
    path('signIN/',views.signIN,name="signIN"), 
        path('main/',views.main,name="main"),
                path('signUP/',views.singnUP),
                path('add/',views.add),



    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


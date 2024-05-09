from django.urls import path
from . import views

urlpatterns=[
    path("getuser",views.getuser,name="getuser"),
    path("loginuser",views.putuser,name="login"),
    path("getprod",views.getproduct,name="purchase"),
    path("orderitem",views.putorder,name="order"),
    path("getorders",views.getorder,name="OrderList"),
    path("getpro",views.getpro,name="getpro"),
]
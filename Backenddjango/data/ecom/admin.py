from django.contrib import admin
from .models import *
# Register your models here.

class signupadmin(admin.ModelAdmin):
    list_display=("id","name","emailid","phone","passwd")
class itemadmin(admin.ModelAdmin):
    list_display=("pid","name","processor","ram","storagecap","battery","price","description")
class ordersadmin(admin.ModelAdmin):
    list_display=("oid","pid","id")

admin.site.register(signup,signupadmin)
admin.site.register(item,itemadmin)
admin.site.register(orders,ordersadmin)

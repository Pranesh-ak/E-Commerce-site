from django.db import models
from django.db import models


class signup(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=50)
    emailid = models.EmailField()
    phone=models.BigIntegerField()
    passwd=models.CharField(max_length=100)

class item(models.Model):
    pid = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    processor=models.CharField(max_length=100)
    ram=models.IntegerField()
    storagecap=models.IntegerField()
    battery=models.IntegerField()
    price=models.IntegerField()
    description=models.CharField(max_length=100)

class orders(models.Model):
    oid = models.AutoField(primary_key=True,unique=True)
    pid = models.ForeignKey(item,on_delete=models.CASCADE)
    id=models.ForeignKey(signup,on_delete=models.CASCADE)


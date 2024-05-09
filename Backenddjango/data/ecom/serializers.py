from dataclasses import field
from rest_framework import serializers
from ecom.models import *

class signupSerializers(serializers.ModelSerializer):
    class Meta:
        model = signup
        fields=("id","name","emailid","phone","passwd")
class itemserializers(serializers.ModelSerializer):
    class Meta:
        model = item
        fields=("pid","name","processor","ram","storagecap","battery","price","description")


class ordersserializers(serializers.ModelSerializer):
    class Meta:
        model = orders
        fields=("oid","pid","id")

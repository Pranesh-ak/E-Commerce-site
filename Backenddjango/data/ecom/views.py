from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

@csrf_exempt
def getuser(request):
    print(request.method)
    if request.method=='GET':
        data=JSONParser().parse(request)['body']
        username=data['username']
        password=data['password']
        creds=signup.objects.filter(emailid=username,passwd=password)
        if creds:
            returnobj=signupSerializers(creds[0])
            return JsonResponse(returnobj.data)
        else:
            return JsonResponse({"alert":"NO USER FOUND"})

@csrf_exempt
def putuser(request):
     if request.method=='POST':
        print(request.method)
        data=JSONParser().parse(request)['body']
        print(data)
        username=data['username']
        password=data['password']
        obj=signup.objects.filter(name=username,passwd=password)
        if obj:
            creds=signupSerializers(obj[0])
            return JsonResponse(creds.data,safe=False)
        else:
            return JsonResponse({"alert":"No match"})


@csrf_exempt
def getallprod(request):
    if request.method=='GET':
        obj=item.objects.all()
        obj_serializer= itemserializers(obj, many=True)
        return JsonResponse(obj_serializer.data,safe=False)

@csrf_exempt 
def getproduct(request):
    if request.method=='GET':
        data=JSONParser().parse(request)['body']
        pname=data['name']
        specs=item.objects.filter(name=pname)
        if specs:
            returnobj=itemserializers(specs[0])
            return JsonResponse(returnobj.data)
        else:
            return JsonResponse({"SERACH RESULT NOT FOUND"})

@csrf_exempt
def getuser(request):
    print(request.method)
    if request.method=='POST':
        data=JSONParser().parse(request)['body']
        print(data)
        obj=signup.objects.create(name=data["username"],emailid=data["emailid"],phone=data["phone"],passwd=data["passwd"])
        obj.save()
        return JsonResponse({"alert":"Account Creation Successful"})
    return({"alert":"USER NOT ADDED"})

@csrf_exempt
def getpro(request):
    if request.method=='GET':
        data=item.objects.all()
        ser=itemserializers(data=data,many=True)
        return JsonResponse(ser.data,safe=False)

@csrf_exempt
def putorder(request):
    if request.method=='POST':
        data=JSONParser().parse(request)['body']
        getobj=ordersserializers(data=data)
        getobj.save()
        return JsonResponse({"alert":"PRODUCT ORDERED"})
    
def getorder(request):
    if request.method=='GET':
        data=JSONParser().parse(request)['body']
        id=data['id']
        specs=item.objects.filter(id=id)
        if specs:
            returnobj=itemserializers(specs[0])
            return JsonResponse(returnobj.data)
        else:
            return JsonResponse({"No Orders Found"})
        

        
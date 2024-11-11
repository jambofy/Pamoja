from django.db import models
from datetime import datetime

class Business:
    def __init__(self, id, name, type, currency="USD", fiscal_year_end=None):
        self.id = id
        self.name = name
        self.type = type
        self.currency = currency
        self.fiscal_year_end = fiscal_year_end or datetime.now().year

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.type,
            'currency': self.currency,
            'fiscal_year_end': self.fiscal_year_end
        }

class Transaction:
    def __init__(self, id, business_id, date, type, amount, category, description, status="pending"):
        self.id = id
        self.business_id = business_id
        self.date = date
        self.type = type  # income, expense, transfer
        self.amount = amount
        self.category = category
        self.description = description
        self.status = status  # pending, completed, void

    def to_dict(self):
        return {
            'id': self.id,
            'business_id': self.business_id,
            'date': self.date,
            'type': self.type,
            'amount': self.amount,
            'category': self.category,
            'description': self.description,
            'status': self.status
        }

class Account:
    def __init__(self, id, business_id, name, type, balance=0):
        self.id = id
        self.business_id = business_id
        self.name = name
        self.type = type  # asset, liability, equity, revenue, expense
        self.balance = balance

    def to_dict(self):
        return {
            'id': self.id,
            'business_id': self.business_id,
            'name': self.name,
            'type': self.type,
            'balance': self.balance
        }

#SOCIAL MEDIA MODULE MODELS
class SocialMediaAccount(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    platform = models.CharField(max_length=50)  # e.g., 'Facebook', 'Twitter'
    username = models.CharField(max_length=100)
    connected_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.platform} - {self.username}"

class Content(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    image = models.ImageField(upload_to='content_images', blank=True)
    video = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=1)
    updated_at = models.DateTimeField(auto_now=1)

    def __str__(self):
        return self.title

class Website(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=1)
    updated_at = models.DateTimeField(auto_now=1)

    def __str__(self):
        return self.name

#CRM MODULE MODELS
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=255)

class Lead(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=255)
    status = models.CharField(max_length=255)

class Opportunity(models.Model):
    name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    stage = models.CharField(max_length=255)
    close_date = models.DateField()

class CRMContact(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    address = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class SalesPipeline(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=1)
    updated_at = models.DateTimeField(auto_now=1)

    def __str__(self):
        return self.name

class CRMLead(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    address = models.TextField(blank=True)
    sales_pipeline = models.ForeignKey(SalesPipeline, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=1)
    updated_at = models.DateTimeField(auto_now=1)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
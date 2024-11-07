from django.db import models

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
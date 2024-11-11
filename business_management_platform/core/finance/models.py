from django.db import models

class Business(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    currency = models.CharField(max_length=3, default='USD')
    fiscal_year = models.IntegerField()

    def __str__(self):
        return self.name

class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ('income', 'Income'),
        ('expense', 'Expense'),
        ('transfer', 'Transfer'),
    ]
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('void', 'Void'),
    ]

    business = models.ForeignKey(Business, on_delete=models.CASCADE)
    date = models.DateTimeField()
    type = models.CharField(max_length=10, choices=TRANSACTION_TYPES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50)
    description = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f"{self.type} - {self.amount} - {self.date}"
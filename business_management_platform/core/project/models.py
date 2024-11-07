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
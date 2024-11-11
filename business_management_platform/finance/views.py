from rest_framework import viewsets
from .models import Business, Transaction
from .serializers import BusinessSerializer, TransactionSerializer

class BusinessViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer

    def get_queryset(self):
        queryset = Transaction.objects.all()
        business_id = self.request.query_params.get('business_id', None)
        if business_id is not None:
            queryset = queryset.filter(business_id=business_id)
        return queryset
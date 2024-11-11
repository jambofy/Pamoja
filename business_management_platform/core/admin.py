from django.contrib import admin
from .models import (
    SocialMediaAccount,
    Content,
    Website,
    Contact,
    Lead,
    Opportunity,
    CRMContact,
    SalesPipeline,
    CRMLead

)


admin.site.register(SocialMediaAccount)
admin.site.register(Content)
admin.site.register(Website)
admin.site.register(Contact)
admin.site.register(Lead)
admin.site.register(Opportunity)
admin.site.register(CRMContact)
admin.site.register(SalesPipeline)
admin.site.register(CRMLead)




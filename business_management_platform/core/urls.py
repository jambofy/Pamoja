from django.urls import path
from . import views
from .views import home, RegisterView, LoginView, dashboard
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BusinessViewSet, TransactionViewSet

router = DefaultRouter()
router.register(r'businesses', BusinessViewSet)
router.register(r'transactions', TransactionViewSet, basename='transaction')

urlpatterns = [
    path('', include(router.urls)),
    path('', home, name='home'),
    path('contact/', views.contact_us, name='contact_us'),
    path('newsletter/', views.newsletter_signup, name='newsletter_signup'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('dashboard/', dashboard, name='dashboard'),
    path('social-media-accounts/', views.social_media_accounts, name='social_media_accounts'),
    path('content-creation/', views.content_creation, name='content_creation'),
    path('website-management/', views.website_management, name='website_management'),
    path('crm/', views.crm, name='crm'),
    path('analytics/', views.analytics, name='analytics'),

    path('dashboard-overview/', views.dashboard_overview, name='dashboard_overview'),
    path('account-management/', views.account_management, name='account_management'),
    path('', views.account_overview, name='account_overview'),
    path('connect/', views.connect_account, name='connect_account'),
    path('disconnect/<int:account_id>/', views.disconnect_account, name='disconnect_account'),
    path('post-scheduling/', views.post_scheduling, name='post_scheduling'),
    path('create-content/', views.create_content, name='content_creation'),
    path('analytics-insights/', views.analytics_insights, name='analytics_insights'),
]



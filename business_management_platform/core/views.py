from django.views.generic import ListView, CreateView, View
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login as auth_login
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy
from .forms import LoginForm
from django.http import HttpResponse
#from django.contrib.auth.decorators import login_required
from .models import SocialMediaAccount
from .forms import SocialMediaAccountForm

def home(request):
    return render(request, 'core/home.html')

def contact_us(request):
    return render(request, 'core/contact_us.html')

def newsletter_signup(request):
    # Your view logic here
    return HttpResponse("Newsletter Signup Page")

###Authentication Views
class RegisterView(CreateView):
    form_class = UserCreationForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('login')  # Redirect to the login page after successful registration

class LoginView(View):
    def get(self, request):
        form = LoginForm()
        return render(request, 'registration/login.html', {'form': form})

    def post(self, request):
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                auth_login(request, user)
                return redirect('dashboard')  # Redirect to the dashboard page after successful login
            else:
                form.add_error(None, 'Invalid username or password')
        return render(request, 'registration/login.html', {'form': form})


###3App dashboard Views
def dashboard(request):
    return render(request, 'core/dashboard.html')  # Make sure you have a dashboard template in the 'store' folder

def social_media_accounts(request):
    # Your view logic here
    return render(request, 'social_media_accounts/social_media_accounts.html')  # Replace with the actual template

def content_creation(request):
    # Your logic for handling content creation
    return render(request, 'social_media_accounts/content_creation.html')  # Replace with your actual template
def website_management(request):
    # Add logic for website management
    return render(request, 'website/website_management.html')

def crm(request):
    # Add logic for CRM
    return render(request, 'crm/crm.html')

def analytics(request):
    # Add logic for analytics
    return render(request, 'core/analytics.html')

######Social Media Module Views

def dashboard_overview(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return render(request, 'partials/dashboard_overview.html')
    return render(request, 'social_media_accounts/dashboard_overview.html')


def account_overview(request):
    accounts = SocialMediaAccount.objects.filter(user=request.user)
    return render(request, 'social_media_accounts/account_overview.html', {'social_media_accounts': accounts})

def connect_account(request):
    if request.method == 'POST':
        form = SocialMediaAccountForm(request.POST)
        if form.is_valid():
            account = form.save(commit=False)
            account.user = request.user
            account.save()
            return redirect('account_overview')
    else:
        form = SocialMediaAccountForm()
    return render(request, 'social_media_accounts/connect_account.html', {'form': form})


def disconnect_account(request, account_id):
    account = SocialMediaAccount.objects.get(id=account_id, user=request.user)
    if account:
        account.delete()
    return redirect('account_overview')

def account_management(request):
    return render(request, 'social_media_accounts/account_management.html')

def post_scheduling(request):
    return render(request, 'social_media_accounts/post_scheduling.html')

def create_content(request):
    return render(request, 'social_media_accounts/create_content.html')

def analytics_insights(request):
    return render(request, 'social_media_accounts/analytics_insights.html')


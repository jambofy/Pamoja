import requests

def get_facebook_access_token(app_id, app_secret):
    # Get access token from Facebook
    url = f'https://graph.facebook.com/oauth/access_token?client_id={app_id}&client_secret={app_secret}&grant_type=client_credentials'
    response = requests.get(url)
    access_token = response.json()['access_token']
    return access_token

def post_to_facebook(page_id, access_token, content):
    # Post content to Facebook page
    url = f'https://graph.facebook.com/{page_id}/feed'
    headers = {'Authorization': f'Bearer {access_token}'}
    data = {'message': content}
    response = requests.post(url, headers=headers, data=data)
    return response.json()
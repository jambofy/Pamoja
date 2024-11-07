import requests

def get_twitter_access_token(api_key, api_secret):
    # Get access token from Twitter
    url = 'https://api.twitter.com/oauth2/token'
    headers = {'Authorization': f'Basic {api_key}:{api_secret}'}
    data = {'grant_type': 'client_credentials'}
    response = requests.post(url, headers=headers, data=data)
    access_token = response.json()['access_token']
    return access_token

def post_to_twitter(access_token, content):
    # Post content to Twitter
    url = 'https://api.twitter.com/2/tweets'
    headers = {'Authorization': f'Bearer {access_token}'}
    data = {'text': content}
    response = requests.post(url, headers=headers, data=data)
    return response.json()
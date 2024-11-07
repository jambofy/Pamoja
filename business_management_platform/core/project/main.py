from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
from models import Business, Transaction, Account

class AccountingHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/businesses':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            businesses = [
                {'id': '1', 'name': 'Personal Finance', 'type': 'personal'},
                {'id': '2', 'name': 'Construction LLC', 'type': 'construction'},
                {'id': '3', 'name': 'Retail Store', 'type': 'retail'}
            ]
            self.wfile.write(json.dumps(businesses).encode())
            return
        
        return SimpleHTTPRequestHandler.do_GET(self)

def run(server_class=HTTPServer, handler_class=AccountingHandler):
    server_address = ('', 3000)
    httpd = server_class(server_address, handler_class)
    print('Server running at http://localhost:3000/')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
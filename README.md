## Mail-sender

**Requirements:**

1. node.js > 12 (+ npm)
2. MongoDB
3. Redis
4. pm2 installed globally
     
**Run in dev mode:**

- Install requirements
- Run `$ npm install`
- Copy `ecosystem.example.config.js` to `ecosystem.config.js` and edit them
- Add your Google credentials to `google-credentials.json` (added credentials from test gmail account)
- Create collection `mail-sender`
- Start app: `$ npm run start`

**API Requests:**

- **Send mail:**
	 
	 	 POST /api/1.0/mail
	 	 Host: localhost:8080
	 	 Content-Type: application/json
     
	 	 {
	 	    "destination": "user@example.com",
	 	    "subject": "subject",
	 	    "text": "text"
	 	 }



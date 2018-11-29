# Alexa Skill with Express
A sample Alexa skill using Express Framework

## Getting Started
```sh
git clone https://github.com/shradha001/alexa-nodejs.git
cd alexa-nodejs
```
### Prerequisites
Node, [ngrok(optional, for development purpose)](https://ngrok.com/)

### Installing
```sh
#Install dependencies
npm install

#start server
#make sure your server runs on https. You can use ngrok for generating the https url.
npm start
```

###Steps to create Alexa Skill
* Go to [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask).
* Sign In with your Amazon Account or create a new one.
* Once logged, you will be redirected to 'Your Skills' section.
* Tap on Create Skill and provide the skill name and the default language. Next choose the model as 'Custom'/
* Next you need to choose a template, tap on 'Start from scratch' and click 'Choose'.
* Now you will be headed to you skill dashboard.
* You can change the invocation name by default it is the skill name.
* Create two intents named 'GreetIntent' and 'ByeIntent'. Adding utterances such as 'hi', 'hello', etc to 'GreetIntent' and 'bye', 'see you', 'catch you later' to 'ByeIntent'.
* Tap on 'Save Model' and then 'Build Model'.
* Next tap on 'Endpoint'. Check the radio button for 'HTTPS'. Put the URL, '<YOUR_HTTPS_SERVER_URL>/alexa/webhook' in the 'Default Region' text box and below choose the option based on how you generated the secured URL. Finally tap on 'Save Endpoints'.

### Testing the Alexa Skill
* On your Alexa Skill dashboard, tap on 'Test'.
* Allow the Micorphone access.
* Next, turn on the toggle switch named 'Test is enabled for this skill'.
* To invoke the skill, just type/speak your skill name.
* You can use 'hello', 'help', 'bye' utterances for testing.


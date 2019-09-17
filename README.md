## feathersjs-experiments [link](https://feathersjs.com/)

This is my repository for experiments related to feathersjs framework. I have broken everything into different branches, so that each project is kept seperate.


## Installation and running the code 


```
npm i typescript ts-node -g
npm init --yes

# Also initialize a TS configuration file that uses modern JavaScript
tsc --init --target es2018

# Install
npm install @feathersjs/feathers --save
npm install @feathersjs/socketio @feathersjs/express --save

# Install cli 
npm install @feathersjs/cli -g
```


## Create user
```
curl 'http://localhost:3030/users/' \
  -H 'Content-Type: application/json' \
  --data-binary '{ "email": "hello@feathersjs.com", "password": "supersecret" }'

```

## Get token 

```
curl 'http://localhost:3030/authentication/' \
  -H 'Content-Type: application/json' \
  --data-binary '{ "strategy": "local", "email": "hello@feathersjs.com", "password": "supersecret" }'


```


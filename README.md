# Friends app

Register your friends in a web storage (localstorage api)

## Tecnologies

The tecnologies are next:

- html
- css (bootswatch (litera theme))
- javascript (native (without frameworks))

## Running

First clone the app:

```sh
mkdir ~/repo
cd ~/repo
git clone https://github.com/AlphaTechnolog/html-js-bootswatch-friendsapp friendsapp
cd friendsapp
firefox index.html # or google-chrome, or opera, etc.
```

### Alternatives

I recommend the next web servers

- Apache (install with xampp (or lampp for linux) or configure it!)
- [Gampp](https://github.com/AlphaTechnolog/Gampp)
- Serve (npm install -g serve)

### Alternatives - Manuals

I will only teach you how to configure it with serve and gampp:

- **gampp**: To configure with gampp see the next commands:

```sh
cd /servers
sudo ln -s $HOME/repo/friendsapp $PWD
sudo chmod -R 777 ./friendsapp
cd
gampp start
# ...
```

Now go to [http://localhost:8000](http://localhost:8000)

- **serve**: See the next commands sequence:

```sh
npm install -g serve
cd ~/repo/friendsapp
PORT=8000
serve -l $PORT . # or directly: serve -l 8000 .
```

# Enjoy

I hope you like it!

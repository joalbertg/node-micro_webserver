# mini-Webserver with hbs

### Installs

Without packages
```shell
docker-compose run app yarn add express hbs
docker-compose run app yarn add --dev webpack webpack-cli webpack-dev-server nodemon
```

With `package.json`
```shell
docker-compose run app yarn
```

### Structure

> run `tree -I "node_modules"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── hbs
│   │   └── helpers.js
│   ├── public
│   │   ├── about-old.html
│   │   ├── assets
│   │   │   ├── css
│   │   │   │   ├── bootstrap.min.css
│   │   │   │   ├── bootstrap.min.css.map
│   │   │   │   └── style.css
│   │   │   ├── imgs
│   │   │   │   └── me.jpg
│   │   │   └── js
│   │   │       ├── bootstrap.min.js
│   │   │       └── bootstrap.min.js.map
│   │   └── index-old.html
│   ├── server.js
│   └── views
│       ├── about.hbs
│       ├── home.hbs
│       └── partials
│           ├── footer.hbs
│           ├── head.hbs
│           └── navbar.hbs
└── yarn.lock

9 directories, 20 files
```

### Start

> run `docker-compose up`


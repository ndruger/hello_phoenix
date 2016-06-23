
[![Build Status](https://secure.travis-ci.org/ndruger/hello_phoenix.png?branch=master)](http://travis-ci.org/ndruger/hello_phoenix)


# Prerequirement

- node
- phoenix
- elixir(version is [.exenv-version](.exenv-version))
- bowser(`npm install -g bower`)

# Install/Update Packages

- `bower install`
- `mix deps.get`

# HelloPhoenix

`mix phoenix.server`

Now you can visit `localhost:3000` from your browser.

## Test

### Server Side

`mix test`

### JS Side

`karma start`

## Test with Coverage

`mix test --cover`

## Lint

### Server Side

`mix credo`

### JS Side

`npm run lint`

## How to add npm modules

```bash
npm insatall [module] --save
npm shrinkwrap --dev
vi webpack.config.js # add vendor
```

## Dializer

<pre>
tmp$ git clone git@github.com:jeremyjh/dialyxir.git
tmp$ cd dialyxir
dialyxir$ mix archive.build
dialyxir$ mix archive.install

this_repo$ mix dialyzer.plt
this_repo$ mix compile
this_repo$ mix dialyzer
</pre>

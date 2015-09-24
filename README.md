# Prerequirement

- node
- phoenix
- elixir
- bowser(`npm install -g bower`)

# Install/Update Packages

- `bower install`
- `mix deps.get`

# HelloPhoenix

`mix phoenix.server`

Now you can visit `localhost:4000` from your browser.

## Test

### Server Side

`mix test`

### JS Side

`karma start`

## Test with Coverage

`mix test --cover`

## Lint

`gulp lint`

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

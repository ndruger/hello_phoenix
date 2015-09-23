use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :hello_phoenix, HelloPhoenix.Endpoint,
  [
    http: [port: 3000],
    debug_errors: true,
    code_reloader: true,
    cache_static_lookup: false,
    watchers: [node: ["node_modules/webpack/bin/webpack.js", "--watch"]]
  ]
#  watchers: [node: ["node_modules/brunch/bin/brunch", "watch"]]

config :hello_phoenix, HelloPhoenix.Backend,
  [
    neko2: "test"
  ]

config :backend,
  [
    host: "http://localhost",
    key: System.get_env("MAILGUN_API_KEY")
  ]

# Watch static and templates for browser reloading.
config :hello_phoenix, HelloPhoenix.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, [format: "[$level] $message\n"]

import_config "dev.secret.exs"

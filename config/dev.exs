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
    watchers: [node: ["node_modules/webpack/bin/webpack.js", "--watch"]],
  ]

# Watch static and templates for browser reloading.
config :hello_phoenix, HelloPhoenix.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$},
    ]
  ]

import_config "dev.secret.exs"

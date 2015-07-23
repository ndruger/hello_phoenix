use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :hello_phoenix, HelloPhoenix.Endpoint,
  http: [port: 4001],
  server: false

config :backend,
  host: "http://localhost",
  key: System.get_env("MAILGUN_API_KEY")

# Print only warnings and errors during test
config :logger, level: :warn

import_config "test.secret.exs"

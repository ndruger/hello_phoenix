# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

config :phoenix, :filter_parameters,
  ["password"]

# Configures the endpoint
config :hello_phoenix, HelloPhoenix.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "Qh89ZDKYQxUAQ1iwTIjHpzum6yaEKf+a0dNfP6NtXi6fl706rAh+DO2JqHrvZZ5u",
  render_errors: [default_format: "html"],
  pubsub: [name: HelloPhoenix.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :utc_log, true
config :logger, :truncate, 1024 * 10

config :logger, :console,
  format: "$date $time $metadata[$level] $message\n",
  metadata: [:request_id, :user_id]
  
# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

use Mix.Config

config :hello_phoenix, HelloPhoenix.Endpoint,
  http: [port: 3000],
  url: [host: "localhost", port: 3000],
  cache_static_manifest: "priv/static/manifest.json",
  server: true

config :logger,
  level:               :info, # ignore :debug
  handle_sasl_reports: true,
  handle_otp_reports:  true,
  backends:            [{LoggerFileBackend, :file_log}],
  file_log: [
    path:     "log/phoenix.log",
    format:   "$date $time $metadata[$level] $message\n",
    metadata: [:request_id, :user_id],
  ]

import_config "prod.secret.exs"

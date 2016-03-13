defmodule HelloPhoenix.Endpoint do
  use Phoenix.Endpoint, otp_app: :hello_phoenix

  socket "/socket", HelloPhoenix.UserSocket

  # Serve at "/" the static files from "priv/static" directory.
  #
  # You should set gzip to true if you are running phoenix.digest
  # when deploying your static files in production.
  plug Plug.Static,
    at: "/", from: :hello_phoenix, gzip: false,
    only: ~w(assets css images js favicon.ico robots.txt)

  plug Plug.Static,
    at: "/locales", from: "web/static/locales"

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug :clear_metadata
  plug Plug.RequestId
  plug HelloPhoenix.Plug.Logger

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Poison

  plug Plug.MethodOverride
  plug Plug.Head

  plug Plug.Session,
    store: :cookie,
    key: "_hello_phoenix_key",
    signing_salt: "o3cvE4zQ"

  plug HelloPhoenix.Plug.UserLogger

  plug HelloPhoenix.Router

  defp clear_metadata(conn, _params) do
    HelloPhoenix.Plug.UserLogger.clear_metadata
    conn
  end
end

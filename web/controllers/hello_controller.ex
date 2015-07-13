defmodule HelloPhoenix.HelloController do
  use HelloPhoenix.Web, :controller
  require Logger

  def index(conn, _params) do
    headers = ["User-Agent": "My App"]
    response = HTTPotion.get Application.get_env(:backend, :host) <> "/~snow/", [headers: headers]
    %HTTPotion.Response{status_code: 200, body: body} = response
    IO.puts(body)
    IO.puts(HelloPhoenix.Endpoint.config(:neko))
    
    Logger.debug "nekoneko"

    render conn, "index.html"
  end

  def show(conn, %{"messenger" => messenger}) do
    render conn, "show.html", messenger: messenger
  end

end

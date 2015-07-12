defmodule HelloPhoenix.HelloController do
  use HelloPhoenix.Web, :controller

  def index(conn, _params) do
    headers = ["User-Agent": "My App"]
    response = HTTPotion.get "localhost/~snow/", [headers: headers]
    %HTTPotion.Response{status_code: 200, body: body} = response
    IO.puts(body)

    render conn, "index.html"
  end

  def show(conn, %{"messenger" => messenger}) do
    render conn, "show.html", messenger: messenger
  end

end

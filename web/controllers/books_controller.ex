defmodule HelloPhoenix.BooksController do
  use HelloPhoenix.Web, :controller
  require Logger

  def index(conn, _params) do
    json conn, [%{id: "neko"}, %{id: "neko2"}]
  end

end

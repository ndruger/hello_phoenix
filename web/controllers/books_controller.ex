defmodule HelloPhoenix.BooksController do
  use HelloPhoenix.Web, :controller
  require Logger

  plug :log_message, "before action"
  plug :action
  plug :log_message, "after action"

  def index(conn, _params) do
    Logger.debug("index action")
    json conn, [%{id: "neko"}, %{id: "neko2"}]
  end

  defp log_message(conn, msg) do
    Logger.debug("log_message: " <> msg)
    conn
  end

end

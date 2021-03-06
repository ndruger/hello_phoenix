defmodule HelloPhoenix.SessionController do
  use HelloPhoenix.Web, :controller
  require Logger

  def index(conn, _params) do
    render conn, "index.html"
  end

  def create(conn, %{"login" => %{"email" => email, "password" => _}}) do
    # dummy login
    user_id = email
    
    conn
    |> HelloPhoenix.Plugug.UserLogger.put_session(user_id)
    |> redirect(to: "/")
  end
end

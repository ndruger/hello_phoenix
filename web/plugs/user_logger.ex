defmodule HelloPhoenix.Plug.UserLogger do
  import Plug.Conn
  require Logger

  def init(default), do: default

  def call(conn, _default) do
    conn = fetch_session(conn)
    user_id = Plug.Conn.get_session(conn, :user_id)
    set_metadata(user_id)
    conn
  end

  def clear_metadata do
    set_metadata(nil)
  end

  def put_session(conn, id) do
    set_metadata(id)
    conn
    |> put_session(:user_id, id)
  end

  defp set_metadata(id) do
    Logger.metadata(user_id: id)
  end
end

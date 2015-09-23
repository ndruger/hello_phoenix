defmodule HelloPhoenix.Plugs.LogUserId do
  import Plug.Conn
  require Logger

  def init(default), do: default

  def call(conn, _default) do
    user_id = Plug.Conn.get_session(conn, :user_id)
    Logger.metadata(user_id: user_id)
    # IO.puts(user_id)
    conn
  end
end

defmodule HelloPhoenix.Plug.Logger do
  import Plug.Conn
  require Logger

  def init(default), do: default

  def call(conn, _default) do
    Logger.log(
      :info,
      inspect([
        "HelloPhoenix.Plug.Logger",
        conn.method,
        conn.request_path,
        IO.inspect(Enum.filter(conn.req_headers, fn({name, _}) -> Enum.any?(["user-agent", "x-forwarded-for"], &(&1 == name)) end))
      ])
    )
    conn
  end
end
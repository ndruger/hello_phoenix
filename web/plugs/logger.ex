defmodule HelloPhoenix.Plug.Logger do
  import Plug.Conn
  require Logger

  def init(default), do: default

  def call(conn, _default) do
    Logger.info(fn ->
      [conn.method, ?\s, conn.request_path]
    end)

    before_time = :os.timestamp()
    conn
    |> register_before_send(fn conn ->
      req_header_m = Enum.into(conn.req_headers, %{})
      resp_header_m = Enum.into(conn.resp_headers, %{})

      resp_body = if String.contains?(resp_header_m["content-type"] || "", "json") do
        to_string(conn.resp_body)
      else
        ""
      end

      diff = :timer.now_diff(:os.timestamp(), before_time) |> div(1000) # to ms
      Logger.info(inspect([
          "HelloPhoenix.Plug.Logger:response",
          conn.method,
          conn.request_path,
          diff,
          req_header_m["user-agent"],
          req_header_m["x-forwarded-for"],
          resp_body,
      ]))
      conn
    end)
  end
end

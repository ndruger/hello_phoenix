defmodule HelloPhoenix.Worker.ResouceMonitor do
  require Logger

  def start_link(params) do
    state = Keyword.merge([
      max_processes: 10000,
      interval:      1000 * 60 * 10,
    ], params)
    {:ok, spawn_link(fn -> loop(state) end)}
  end

  defp loop(state) do
    count = length(Process.list)
    Logger.info("HelloPhoenix.Worker.ResouceMonitor: process count=#{count}")
    if count > state[:max_processes] do
      Logger.error("HelloPhoenix.Worker.ResouceMonitor: process count is over limit. count=#{count}")
    end
    :timer.sleep(state[:interval])
    loop(state)
  end

end
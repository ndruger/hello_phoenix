defmodule HelloPhoenix.Mixfile do
  use Mix.Project

  def project do
    [
       app: :hello_phoenix,
       version: "0.0.1",
       elixir: "~> 1.0",
       elixirc_paths: elixirc_paths(Mix.env),
       compilers: [:phoenix] ++ Mix.compilers,
       build_embedded: Mix.env == :prod,
       start_permanent: Mix.env == :prod,
       test_coverage: [tool: Coverex.Task],
       deps: deps,
       dialyzer: [
          plt_file: ".local.plt",
          plt_add_apps: [
            "_build/dev/lib/phoenix/ebin",
            "_build/dev/lib/phoenix_html/ebin",
            "_build/dev/lib/phoenix_live_reload/ebin",
            "_build/dev/lib/cowboy/ebin",
            "_build/dev/lib/ibrowse/ebin",
            "_build/dev/lib/httpotion/ebin",
            "_build/dev/lib/plug/ebin",
          ]
       ],
        # dialyzer: [flags: ["-Wunmatched_returns", "-Werror_handling", "-Wrace_conditions", "-Wunderspecs"],
#       dialyzer: [flags: ["-Wunmatched_returns", "-Werror_handling", "-Wrace_conditions", "-Wunderspecs", "-Wno_behaviours"]]
    ]
  end

  # Configuration for the OTP application
  #
  # Type `mix help compile.app` for more information
  def application do
    [mod: {HelloPhoenix, []},
     applications: [:phoenix, :phoenix_html, :cowboy, :logger, :httpotion]]
  end

  # Specifies which paths to compile per environment
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [
      {:phoenix, "~> 1.1.1"},
      {:phoenix_html, "~> 2.3.0"},
      {:phoenix_live_reload, "~> 1.0.1", only: :dev},
      {:cowboy, "~> 1.0"},
      {:ibrowse, github: "cmullaparthi/ibrowse", tag: "v4.1.1"},
      {:coverex, "~> 1.4.1", only: :dev},
      {:httpotion, "~> 2.1.0"}
    ]
  end
end

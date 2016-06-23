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
    ]
  end

  # Configuration for the OTP application
  #
  # Type `mix help compile.app` for more information
  def application do
    [
      mod: {HelloPhoenix, []},
      applications: apps_from_deps ++ [:logger],
    ]
  end

  defp apps_from_deps do
    Enum.filter(deps, fn
      {_, _}       -> true
      {_, _, opts} ->
        case opts[:only] do
          nil -> true
          env -> env |> List.wrap |> Enum.member?(:prod)
        end
    end)
    |> Enum.map(&(elem(&1, 0)))
  end

  # Specifies which paths to compile per environment
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies
  #
  # Type `mix help deps` for examples and options
  defp deps do
    [
      {:phoenix, "~> 1.1.4"},
      {:phoenix_html, "~> 2.5.0"},
      {:poison, "~> 2.0"},
      {:httpoison, "~> 0.8.0"},
      {:hackney, "~> 1.4.4"},
      {:phoenix_live_reload, "~> 1.0.3", only: :dev},
      {:cowboy, "~> 1.0.4"},
      {:ibrowse, github: "cmullaparthi/ibrowse", tag: "v4.2.2", override: true},
      # {:coverex, "~> 1.4.8", only: :dev},
      {:httpotion, "~> 2.2.2"},
      {:exrm, "~> 0.19.9"},
      {:ex_unit_notifier, "~> 0.1", only: :test},
      {:logger_file_backend , "~> 0.0.7"},
      {:folsom, "~> 0.8.3"},
      {:recon, "~> 2.2.1 "},
      {:credo, "0.3.5", only: [:dev, :test]},
      {:plug, "~> 1.1.2"},
      {:dialyze, "~> 0.2.1", only: :dev},
    ]
  end
end

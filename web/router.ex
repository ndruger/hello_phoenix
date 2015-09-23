defmodule HelloPhoenix.Router do
  use HelloPhoenix.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
  end

  pipeline :api do
    plug :fetch_session
    plug HelloPhoenix.Plugs.LogUserId
    plug :accepts, ["json"]
  end

  scope "/", HelloPhoenix do
    pipe_through :browser

    get    "/",                 PageController,    :index
 
    get    "/hello",            HelloController,   :index
    get    "/hello/:messenger", HelloController,   :show
 
    get    "/login",            SessionController, :index
    post   "/login",            SessionController, :create
    delete "/login",            SessionController, :delete

  end

  # public routes via the api
  scope "/api/v1", HelloPhoenix do
    pipe_through :api

    resources "/books", BooksController, only: [:index]
  end

  # Other scopes may use custom stacks.
  # scope "/api", HelloPhoenix do
  #   pipe_through :api
  # end
end

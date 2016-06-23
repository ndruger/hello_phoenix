defmodule HelloPhoenix.PageControllerTest do
  use HelloPhoenix.ConnCase  

  test "GET /" do
    conn = get conn(), "/"
    assert html_response(conn, 300) =~ "Welcome to Phoenix!"
  end
end

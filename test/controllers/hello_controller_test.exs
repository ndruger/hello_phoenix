defmodule HelloPhoenix.HelloControllerTest do
  use HelloPhoenix.ConnCase  

  test "GET /" do
    conn = get conn(), "/hello"
    assert html_response(conn, 200) =~ "Hello World"
  end
end

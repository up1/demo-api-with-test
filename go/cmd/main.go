package main

import (
	"demo"
	"demo/db"

	"github.com/gin-gonic/gin"
)

func main() {
	env := demo.Env{
		Db: &db.DB{},
	}
	r := gin.New()
	r.GET("/ping", demo.PingHandler(env))
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

package demo

import (
	"demo/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Env struct {
	Db db.DBInterface
}

func PingHandler(e Env) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": e.Db.Connect(),
		})
	}
}

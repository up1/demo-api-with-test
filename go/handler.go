package demo

import (
	"demo/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func PingHandler(db db.DBInterface) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": db.Connect(),
		})
	}
}

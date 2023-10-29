package demo_test

import (
	"demo"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

type MockDB struct {
}

func (d *MockDB) Connect() string {
	return "Hello World from mock"
}
func TestPingApi(t *testing.T) {
	env := demo.Env{
		Db: &MockDB{},
	}
	gin.SetMode(gin.TestMode)
	res := httptest.NewRecorder()
	c, r := gin.CreateTestContext(res)
	c.Request = httptest.NewRequest("GET", "/ping", nil)
	r.GET("/ping", demo.PingHandler(env))
	r.ServeHTTP(res, c.Request)
	if res.Body.String() != "{\"message\":\"Hello World from mock\"}" {
		t.Errorf("Test failed %v", res.Body.String())
	}
}

func BenchmarkXXX(b *testing.B) {
	// if HelloWorld() != "Hello World!" {
	// 	t.Error("Test failed")
	// }
}

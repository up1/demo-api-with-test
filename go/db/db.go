package db

type DBInterface interface {
	Connect() string
}

type DB struct {
}

func (d *DB) Connect() string {
	return "Hello World from db"
}

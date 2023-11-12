package main

import (
	"fmt"
	"log"
	"net/http"
)

func main(){
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, world! here is main2 :8082")
	})

	log.Fatal(http.ListenAndServe(":8082", nil))
}


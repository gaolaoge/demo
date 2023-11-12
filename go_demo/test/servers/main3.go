package main

import (
	"fmt"
	"log"
	"net/http"
)

func main(){
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, world! here is main3 :8083")
	})

	log.Fatal(http.ListenAndServe(":8083", nil))
}


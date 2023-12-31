

        // we know fetch takes the file and return us the promise 

        fetch("file.txt").then((response) => {      // the parameter of promise holds the value of fetch
            return response.text()   // now it has to return that value holding parameter slong with its datattype like text() or json()
        }).then((data) => {     // so the promise of fetch also return a another promise having the parameeter whihc hold the value from first promise 
            console.log(data)    //console the data
        }).catch((error) => {     // catch for error case
            console.log(error)
        });

        // same with short arrow function syntax 

        setTimeout(() => {
            fetch("file.txt")
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.log(error));
            
        }, 3000);
        




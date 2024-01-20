function loadscript(src, callback) { // here the function is not called so no need of argument
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log(`Script loaded with SRC: ${src}`);
        callback(null, src); // wherever the function is called it must be called with an argument
    }

    script.onerror = function () {
        console.log("There was an errorloading script: " + src);
        let err = new Error("Failed to load");
        callback(err, src);
    }
    document.body.appendChild(script);
} 



loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js", function callback(err, src) {
    if (err) {
        console.log("Error has Occured: " + err);
        return;
    }
    console.log("This is a callback. SRC: " + src);

    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js", function callback(err, src) {
        if (err) {
            console.log("Error has Occured: " + err);
            return;
        }
        console.log("This is a callback. SRC: " + src);
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js", function callback(err, src) {
            if (err) {
                console.log("Error has Occured: " + err);
                return;
            }
            console.log("This is a callback. SRC: " + src);
            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js", function callback(err, src) {
                if (err) {
                    console.log("Error has Occured: " + err);
                    return;
                }
                console.log("This is a callback. SRC: " + src);
                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js", function callback(err, src) {
                    if (err) {
                        console.log("Error has Occured: " + err);
                        return;
                    }
                    console.log("This is a callback. SRC: " + src);
                    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js", function callback(err, src) {
                        if (err) {
                            console.log("Error has Occured: " + err);
                            return;
                        }
                        console.log("This is a callback. SRC: " + src);

                    });
                });
            });
        });
    });
});

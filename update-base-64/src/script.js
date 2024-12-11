 
        document.getElementById("convert").addEventListener("click", function () {
            const inputFile = document.getElementById("inputfile");
            const output = document.getElementById("outputBase64");
            const container = document.getElementById("imageContainer");

            if (inputFile.files.length === 0) {
                alert("Kindly input the file");
                return;
            }

            const file = inputFile.files[0];
            const reader = new FileReader();

            reader.onload = function () {
                const stringBase64 = reader.result;
                output.value = stringBase64;

                const img = document.createElement("img");
                img.src = stringBase64;
                img.alt = "Converted Image";
                img.width = 150;
                img.height = 150;

                container.innerHTML = ""; // Clear previous images
                container.appendChild(img);
            };

            reader.onerror = function () {
                console.error("Error reading file!");
                alert("An error occurred while converting the file.");
            };

            reader.readAsDataURL(file);
        });
    
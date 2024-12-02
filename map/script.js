document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map", {
        zoomControl: false // Disable default zoom controls to reposition them
    });

    // Add CartoDB Voyager tiles
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd"
    }).addTo(map);

    let userLocationMarker = null;
    let userLocationCircle = null;
    let selectedLocationMarker = null;
    let userLatLng = null; // Store user's current latitude and longitude
    let selectedLatLng = null; // Store the clicked position for saving data

    const gpsAddIcon = L.icon({
        iconUrl: "./imgs/gpsadd.png",
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36]
    });

    const gpsSavedIcon = L.icon({
        iconUrl: "./imgs/gps-icon.png",
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36]
    });

    // Add Zoom Controls
    L.control.zoom({
        position: "bottomright"
    }).addTo(map);

    

    // Add My Location Button
    const myLocationButton = L.control({ position: "bottomright" });
    myLocationButton.onAdd = function () {
        const div = L.DomUtil.create("div", "leaflet-bar leaflet-control my-location-control");
        div.innerHTML = `<img src="./imgs/location.svg" alt="My Location" style="width: 20px; height: 20px;">`;
        div.title = "Go to My Location";

        L.DomEvent.on(div, "click", function () {
            if (userLatLng) {
                map.setView(userLatLng, 15);
            } else {
                alert("Unable to retrieve your location. Please wait...");
            }
        });

        return div;
    };
    myLocationButton.addTo(map);

    // Track User Location
    function trackUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                position => {
                    const { latitude, longitude, accuracy } = position.coords;
                    userLatLng = [latitude, longitude];

                    if (userLocationMarker) {
                        userLocationMarker.setLatLng(userLatLng);
                        userLocationCircle.setLatLng(userLatLng);
                        userLocationCircle.setRadius(accuracy);
                    } else {
                        userLocationMarker = L.marker(userLatLng, {
                            icon: L.divIcon({
                                className: "gps-marker",
                                html: '<div class="pulse"></div>',
                                iconSize: [12, 12],
                                iconAnchor: [6, 6]
                            })
                        }).addTo(map);

                        userLocationCircle = L.circle(userLatLng, {
                            radius: accuracy,
                            color: "#007bff",
                            fillColor: "#007bff",
                            fillOpacity: 0.2
                        }).addTo(map);

                        map.setView(userLatLng, 15);
                    }
                },
                () => {
                    alert("Unable to retrieve your location. Please allow location access.");
                },
                { enableHighAccuracy: true }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }
    trackUserLocation();

    // Load saved notes from LocalStorage
    const savedNotes = JSON.parse(localStorage.getItem("mapNotes")) || [];
    savedNotes.forEach((note, index) => {
        createMarker(note, index);
    });

    // Map Click to Add Marker
    map.on("click", function (e) {
        const { lat, lng } = e.latlng;
        selectedLatLng = { lat, lng };

        if (selectedLocationMarker) {
            map.removeLayer(selectedLocationMarker);
        }
        selectedLocationMarker = L.marker([lat, lng], { icon: gpsAddIcon }).addTo(map);
    });


    // Country options
    const countryLocations = {
        "Korea - Seoul": [37.5665, 126.9780],
        "China - Shanghai": [31.2304, 121.4737],
        "Japan - Tokyo": [35.6895, 139.6917],
        "Japan - Osaka": [34.6937, 135.5023],
        "USA - New York": [40.7128, -74.0060],
        "USA - California": [36.7783, -119.4179]
    };

    const countryControl = L.control({ position: "topright" });
    countryControl.onAdd = function () {
        const div = L.DomUtil.create("div", "leaflet-bar leaflet-control country-control");
        div.innerHTML = `
            <select id="country-select" class="country-select">
                <option value="">Select a location</option>
                ${Object.keys(countryLocations)
                    .map(country => `<option value="${country}">${country}</option>`)
                    .join("")}
            </select>
        `;

        div.querySelector("#country-select").addEventListener("change", function (e) {
            const selectedCountry = e.target.value;
            if (selectedCountry && countryLocations[selectedCountry]) {
                const [lat, lng] = countryLocations[selectedCountry];
                map.setView([lat, lng], 12);
            }
        });

        return div;
    };
    countryControl.addTo(map);

    // Save Button Functionality
    const saveBtn = document.getElementById("save-btn");
    saveBtn.addEventListener("click", async () => {
        const noteText = document.getElementById("note-input").value.trim();
        const fileInput = document.getElementById("file-input").files[0];
        let fileBase64 = null;
        
        if (fileInput) {
            const allowedTypes = ["image/", "video/", "audio/"]; // 허용된 파일 형식
            if (!allowedTypes.some(type => fileInput.type.startsWith(type))) {
                alert("Only image, video, or audio files are allowed!");
                return; // 저장 중단
            }
        
            try {
                fileBase64 = await fileToBase64(fileInput);
            } catch (error) {
                console.error("Error converting file to Base64:", error);
                return; // 오류 발생 시 저장 중단
            }
        }

        if (fileInput) {
            fileBase64 = await fileToBase64(fileInput);
        }

        if (selectedLatLng && (noteText || fileBase64)) {
            const newNote = {
                lat: selectedLatLng.lat,
                lng: selectedLatLng.lng,
                text: noteText,
                file: fileBase64,
                fileType: fileInput ? fileInput.type : null
            };
            savedNotes.push(newNote);
            localStorage.setItem("mapNotes", JSON.stringify(savedNotes));

            if (selectedLocationMarker) {
                selectedLocationMarker.setIcon(gpsSavedIcon);
            }

            createMarker(newNote, savedNotes.length - 1);

            document.getElementById("note-input").value = "";
            document.getElementById("file-input").value = "";
            alert("Note added and saved!");
        } else {
            alert("Please select a location on the map and write a note or attach a file.");
        }
    });

    // Function to Create Marker with Delete Button
    function createMarker(note, index) {
        const marker = L.marker([note.lat, note.lng], { icon: gpsSavedIcon }).addTo(map);

        let filePreview = "";
        if (note.file) {
            if (note.fileType.startsWith("image/")) {
                filePreview = `<img src="${note.file}" alt="Image" style="max-width: 100%; height: auto; margin-top: 10px;" onclick="openImage('${note.file}')">`;
            } else if (note.fileType.startsWith("video/")) {
                filePreview = `<video controls style="max-width: 100%; height: auto; margin-top: 10px;">
                    <source src="${note.file}" type="${note.fileType}">
                    Your browser does not support the video tag.
                </video>`;
            } else if (note.fileType.startsWith("audio/")) {
                filePreview = `<audio controls style="margin-top: 10px;">
                    <source src="${note.file}" type="${note.fileType}">
                    Your browser does not support the audio tag.
                </audio>`;
            }
        }

        const popupContent = `
            <div>
                <p>${note.text}</p>
                ${filePreview}
                <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
        `;
        marker.bindPopup(popupContent);

        marker.on("popupopen", () => {
            const deleteBtn = document.querySelector(`.delete-btn[data-index="${index}"]`);
            if (deleteBtn) {
                deleteBtn.addEventListener("click", () => {
                    map.removeLayer(marker);
                    savedNotes.splice(index, 1);
                    localStorage.setItem("mapNotes", JSON.stringify(savedNotes));
                    alert("Note deleted!");
                });
            }
        });
    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result); // 파일 데이터를 Base64로 변환
            reader.onerror = (error) => {
                alert("Failed to read file. Please try again.");
                reject(error); // 오류 발생 시 메시지 출력
            };
            reader.readAsDataURL(file); // 파일 읽기
        });
    }
    
    

    // Function to Open Image in a New Tab for Larger View
    window.openImage = function (src) {
        const win = window.open("", "_blank");
        win.document.write(`<img src="${src}" style="width:100%; height:auto;">`);
    };
});



document.addEventListener("DOMContentLoaded", function() {
    const musicData = [
            {
              "Title": "Image1",
              "When": "Mon, Mar 18, 2024",
              "Time": "5:10 PM",
              "Where": "63 5th Ave, New York, United States",
              "What": "Japanese Class, gonnichiwa"
            },
            {
              "Title": "Image6",
              "When": "Thu, Sep 22, 2022",
              "Time": "3:46 PM",
              "Where": "301 1st Ave, New York, United States",
              "What": "Waiting for a bus, I’M ALREADY LATE TO CLASS"

            },
            {
              "Title": "Image3",
              "When": "Tue, Sep 13, 2022",
              "Time": "4:25 PM",
              "Where": "301 1st Ave, New York, United States",
              "What": "Going to Parsons"
            },
            {
              "Title": "Image4",
              "When": "Sat, Sep 17, 2022",
              "Time": "9:04 PM",
              "Where": "301 1st Ave, New York, United States",
              "What": "Working on my project"
            },
            {
              "Title": "Image5",
              "When": "Tue, Sep 20, 2022",
              "Time": "10:02 PM",
              "Where": "301 1st Ave, New York, United States",
              "What": "Working projects with Seoyun"
            },
            {
              "Title": "Image2",
            "When": "Sun, Sep 11, 2022",
            "Time": "11:39 PM",
            "Where": "So ho, New York, United States",
            "What": "Went to a party with Max and Rohan"

            },              
            {
              "Title": "Image8",
              "When": "Sat, Sep 24, 2022",
              "Time": "10:06 PM",
              "Where": "Korea Town, New York, United States",
              "What": "ALCOHOLLLLL"
            },
            {
              "Title": "Image9",
              "When": "Thu, Sep 29, 2022",
              "Time": "8:38 PM",
              "Where": "Drawing CLASSSS"
            },
            {
              "Title": "Image10",
              "When": "Sat, Oct 1, 2022",
              "Time": "7:50 PM",
              "Where": "1st Ave, New York, United States",
              "What": "Waiting for the subway"
            },
            {
              "Title": "Image11",
              "When": "Wed, Oct 5, 2022",
              "Time": "1:58 PM",
              "Where": "301 1st Ave, New York, United States",
              "What": "Waiting for the elevator"
            },
            {
              "Title": "Image12",
              "When": "Fri, Oct 7, 2022",
              "Time": "4:13 PM",
              "Where": "301 1st Ave, New York, Unites States",
              "What": "Self hair cut, sucks"
            },
            {
              "Title": "Image13",
              "When": "Sun, Oct 9, 2022",
              "Time": "12:39 AM",
              "Where": "63 5th Ave, New York, United States",
              "What": "Visiting Sangmin’s house"
            },
            {
              "Title": "Image14",
              "When": "Wed, Oct 12, 2022",
              "Time": "10:41 PM",
              "Where": "301 1st Ave, New York, United States",
              "What": "Rohan Jumpinggggg"
            },
            {
              "Title": "Image15",
              "When": "Sun, Oct 30, 2022",
              "Time": "8:18 PM",
              "Where": "Brooklyn, New York, United States",
              "What": "Seoyun’s Bday!!"
            },
            {
              "Title": "Image16",
              "When": "Thu, Nov 3, 2022",
              "Time": "10:20 AM",
              "Where": "63 5th Ave, New York, United States",
              "What": "With my friends"
            },
            {
              "Title": "Image17",
              "When": "Sat, Mar 16, 2024",
              "Time": "4:49 PM",
              "Where": "220W24thSt, New York, United States",
              "What": "Just woke up"
            },
            {
              "Title": "Image18",
              "When": "Mon, Mar 4, 2024",
              "Time": "9:08 PM",
              "Where": "220W24thSt, New York, United States",
              "What": "Working on my Midterm"
            },
            {
              "Title": "Image19",
              "When": "Fri, Jan 26, 2024",
              "Time": "10:22 PM",
              "Where": "Empire State AMC, New York, United States",
              "What": "Watching Movieeeee"
            },
            {
              "Title": "Image20",
              "When": "Wed, Jan 31, 2024",
              "Time": "5:06 PM",
              "Where": "63 5th Ave, New York, United States",
              "What": "Walking to a class"
            },
            {
              "Title": "Image21",
              "When": "Wed, Mar 20, 2024",
              "Time": "4:31 PM",
              "Where": "63 5th Ave, New York, United States",
              "What": "Going to school"
            },
            {
              "Title": "Image22",
              "When": "Thu, Mar 21, 2024",
              "Time": "5:31 PM",
              "Where": "Time Square, New York, United States",
              "What": "On a subway"
            },
            {
              "Title": "Image23",
              "When": "Fri, Mar 21, 2024",
              "Time": "5:31 PM",
              "Where": "Chelsea, New York, United States",
              "What": "At Home"
            },
            {
              "Title": "Image24",
              "When": "Sat, Mar 22, 2024",
              "Time": "5:31 PM",
              "Where": "Chelsea, New York, United States",
              "What": "Chill"
            },
            {
              "Title": "Image25",
              "When": "Sat, Mar 23, 2024",
              "Time": "5:31 PM",
              "Where": "63 5th Ave, New York, United States",
              "What": "School!!"
            }
          ]
    

            const gridItems = document.querySelectorAll('.grid-item');

            musicData.forEach((data, index) => {
                const item = gridItems[index];
                const caption = document.createElement('div');
                caption.classList.add('caption');
                caption.innerHTML = `
                    <p><strong>When:</strong> ${data.When}</p>
                    <p><strong>Time:</strong> ${data.Time}</p>
                    <p><strong>Where:</strong> ${data.Where}</p>
                    <p><strong>What: </strong>${data.What}</p>
                `;
                item.appendChild(caption);
            });
            
        });
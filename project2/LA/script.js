
document.addEventListener("DOMContentLoaded", function() {
    const musicData = [
      {
        "Title": "Image66",
        "When": "Thu, Mar 14, 2024",
        "Time": "11:42 PM",
        "Where": "Westchester, Los Angeles, United States",
        "What": "Getting Panda Express"
      },
      {
        "Title": "Image67",
        "When": "Thu, Mar 14, 2024",
        "Time": "6:39 PM",
        "Where": "Beverly Hills, Los Angeles, United States",
        "What": "At the signnn"
      },
      {
        "Title": "Image68",
        "When": "Thu, Mar 14, 2024",
        "Time": "2:53 PM",
        "Where": "Beverly Hills, Los Angeles, United States",
        "What": "Eating Brunch"
      },
      {
        "Title": "Image69",
        "When": "Wed, Mar 13, 2024",
        "Time": "8:22 PM",
        "Where": "Whitley Heights, Los Angeles, United States",
        "What": "Ubering to citadel outlet"
      },
      {
        "Title": "Image70",
        "When": "Tue, Mar 12, 2024",
        "Time": "12:31 AM",
        "Where": "Bunker Hill, Los Angeles, United States",
        "What": "Late night swimming"
      },
      {
        "Title": "Image71",
        "When": "Mon, Mar 11, 2024",
        "Time": "4:04 PM",
        "Where": "Jewelry District, Los Angeles, United States",
        "What": "Eating gyukaku!!"
      },
      {
        "Title": "Image72",
        "When": "Sun Mar 10, 2024",
        "Time": "10:17 PM",
        "Where": "Bunker Hill, Los Angeles, United States",
        "What": "Ubering back to hotel"
      },
      {
        "Title": "Image73",
        "When": "Sun, Mar 10, 2024",
        "Time": "4:58 PM",
        "Where": "Westchester, Los Angeles, United States",
        "What": "Waiting for dinner"
      },
      {
        "Title": "Image78",
        "When": "Tue, Mar 12, 2024",
        "Time": "11:09 AM",
        "Where": "Bunker Hill, Los Angeles, United States",
        "What": "Going to Hoolywood!"
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
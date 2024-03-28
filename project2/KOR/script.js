
document.addEventListener("DOMContentLoaded", function() {
    const musicData = [
      {
        "Title": "Image1",
        "When": "Sun, Jun 5, 2022",
        "Time": "2:41 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Packing my baggage to Europe"
      },
      {
        "Title": "Image4",
        "When": "Tue, Jun 21, 2022",
        "Time": "5:47 PM",
        "Where": "Gangnam, Seoul, Korea",
        "What": "On a subway"
      },
      {
        "Title": "Image5",
        "When": "Wed, Jun 22, 2022",
        "Time": "6:47 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Chilling on my bed"
      },
      {
        "Title": "Image6",
        "When": "Thu, Jun 23, 2022",
        "Time": "9:50 PM",
        "Where": "Sinchon, Seoul, Korea",
        "What": "Went to a bar w. Migyu"
      },
      {
        "Title": "Image7",
        "When": "Sat, Jun 25, 2022",
        "Time": "6:40 PM",
        "Where": "Gangnam, Seoul, Korea",
        "What": "On a subway….. SOOSOOOOOOO many people"
      },
      {
        "Title": "Image8",
        "When": "Wed, Jun 29, 2022",
        "Time": "6:10 PM",
        "Where": "Gangnam, Seoul, Korea",
        "What": "On a subway, so chill today"
      },
      {
        "Title": "Image9",
        "When": "Fri, Jul 1, 2022",
        "Time": "12:18 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Eating bibimbap!!!! YUMMMMM"
      },
      {
        "Title": "Image10",
        "When": "Sat, Jul 2, 2022",
        "Time": "6:10 PM",
        "Where": "Jamsil, Seoul, Korea",
        "What": "Enjoying rides in Lotteworld!! w. Inky"
      },
      {
        "Title": "Image11",
        "When": "Mon, Jul 4, 2022",
        "Time": "5:00 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "On a subway….."
      },
      {
        "Title": "Image12",
        "When": "Tue, Jul 5, 2022",
        "Time": "5:00 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Just woke and I turned on the A.C SOOOO HOTTTTT…"
      },
      {
        "Title": "Image13",
        "When": "Sat, Jul 9, 2022",
        "Time": "2:30 PM",
        "Where": "Gizisi, Busan, Korea",
        "What": "Went to a water park with my friendssss"
      },
      {
        "Title": "Image14",
        "When": "Sat, Jul 16, 2022",
        "Time": "5:07 PM",
        "Where": "Rodeo, Seoul, Korea",
        "What": "Shopping Dayyyyyy"
      },
      {
        "Title": "Image15",
        "When": "Sun, Jul 17, 2022",
        "Time": "12:44 PM",
        "Where": "Jamsil, Seoul, Korea",
        "What": "Eating K-bbq before the Water Festival w. Migyu"
      },
      {
        "Title": "Image16",
        "When": "Mon, Jul 18, 2022",
        "Time": "6:17 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Just woke up…. It’s dinner time!"
      },
      {
        "Title": "Image17",
        "When": "Wed, Jul 20, 2022",
        "Time": "5:23 PM",
        "Where": "Hongdae, Seoul, Korea",
        "What": "Went to a mall w. Daon"
      },
      {
        "Title": "Image18",
        "When": "Fri, Jul 22, 2022",
        "Time": "12:29 PM",
        "Where": "Yongin, Gyunggido, Korea",
        "What": "Going homeeeeee"
      },
      {
        "Title": "Image19",
        "When": "Sat, Jul 23, 2022",
        "Time": "11:17 PM",
        "Where": "Guess what? Drinkssssssssssss"
      },
      {
        "Title": "Image20",
        "When": "Wed, May 18, 2022",
        "Time": "10:33 PM",
        "Where": "Jeju-si, Jeju, Korea",
        "What": "Drinks w. Mingyu and his friends"
      },
      {
        "Title": "Image21",
        "When": "Tue, May 17, 2022",
        "Time": "2:12 PM",
        "Where": "Seogwiposi, Jeju, Korea",
        "What": "Having a brunch w. Minah"
      },
      {
        "Title": "Image22",
        "When": "Wed, May 18, 2022",
        "Time": "2:34 PM",
        "Where": "Seogwiposi, Jeju, Korea",
        "What": "Going to Jeju City"
      },
      {
        "Title": "Image23",
        "When": "Thu, May 19, 2022",
        "Time": "5:24 PM",
        "Where": "Seogwiposi, Jeju, Korea",
        "What": "Drinking!!"
      },
      {
        "Title": "Image24",
        "When": "Thu, May 19, 2022",
        "Time": "4:54 PM",
        "Where": "Seogwiposi, Jeju, Korea",
        "What": "At my academy"
      },
      {
        "Title": "Image25",
        "When": "Thu, May 19, 2022",
        "Time": "8:09 PM",
        "Where": "Seogwiposi, Jeju, Korea",
        "What": "Chilling on a bed"
      },
      {
        "Title": "Image26",
        "When": "Sat, May 21, 2022",
        "Time": "12:15 PM",
        "Where": "Seogwiposi, Jeju Korea",
        "What": "Just had a graduation ceremony"
      },
      {
        "Title": "Image27",
        "When": "Sun, May 22, 2022",
        "Time": "1:00 AM",
        "Where": "Seogwiposi, Jeju, Korea",
        "What": "Doing a part-time job in a convenience store"
      },
      {
        "Title": "Image28",
        "When": "Mon, May 23, 2022",
        "Time": "4:39 PM",
        "Where": "Jejusi, Jeju, Korea",
        "What": "Watched a movie"
      },
      {
        "Title": "Image29",
        "When": "Tue, May 24, 2022",
        "Time": "12:21 PM",
        "Where": "Seogwiposi, Jeju, Korea",
        "What": "Just woke up"
      },
      {
        "Title": "Image30",
        "When": "Wed, May 25, 2022",
        "Time": "7:46 AM",
        "Where": "Chuncheon-si, Gangwon, Korea",
        "What": "Visiting my grandparents"
      },
      {
        "Title": "Image31",
        "When": "Fri, May 27, 2022",
        "Time": "11:35 PM",
        "Where": "Hongdae, Seoul, Korea",
        "What": "Drinking w. my friends"
      },
      {
        "Title": "Image32",
        "When": "Sat, May 28, 2022",
        "Time": "12:31 PM",
        "Where": "Gangnam, Seoul, Korea",
        "What": "On a subway"
      },
      {
        "Title": "Image33",
        "When": "Sun, Jul 24, 2022",
        "Time": "9:48 PM",
        "Where": "Jamsil, Seoul, Korea",
        "What": "Visited Daon’s place for a skin care."
      },
      {
        "Title": "Image34",
        "When": "Mon, Jul 25, 2022",
        "Time": "10:45 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "I was working on my portfolio all day long"
      },
      {
        "Title": "Image35",
        "When": "Sat, Jul 30, 2022",
        "Time": "6:43 AM",
        "Where": "Jamsil, Seoul, Korea",
        "What": "Went to lotteworld again for the ridessssss"
      },
      {
        "Title": "Image36",
        "When": "Sun, Jul 31, 2022",
        "Time": "Yeoido, Seoul, Korea",
        "Where": "My precious sister, RAONNNNNNN"
      },
      {
        "Title": "Image37",
        "When": "Mon, Aug 1, 2022",
        "Time": "12:54 AM",
        "Where": "Gangnam, Seoul, Korea",
        "What": "Late night drink w. Minah"
      },
      {
        "Title": "Image38",
        "When": "Tue, Aug 2, 2022",
        "Time": "6:33 PM",
        "Where": "Gangnam, Seoul, Korea",
        "What": "Screen Golf w. Mingyu"
      },
      {
        "Title": "Image39",
        "When": "Wed, Aug 3, 2022",
        "Time": "8:41 AM",
        "Where": "Yeongdeungpogo, Seoul, Korea",
        "What": "Getting a military test, I DON’T WANT TOOOOO"
      },
      {
        "Title": "Image40",
        "When": "Friday, Aug 5, 2022",
        "Time": "10:34 PM",
        "Where": "Apgujung, Seoul, Korea",
        "What": "Getting drinks with my friends as always"
      },
      {
        "Title": "Image41",
        "When": "Sat, Aug 6, 2022",
        "Time": "3:30 PM",
        "Where": "Yongin, Gyunggido, Korea",
        "What": "Going to my aunt’s house"
      },
      {
        "Title": "Image42",
        "When": "Sun, Aug 7, 2022",
        "Time": "7:55 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Getting ready for my plansssss"
      },
      {
        "Title": "Image43",
        "When": "Tue, Aug 16, 2022",
        "Time": "4:30 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Walking with Raon"
      },
      {
        "Title": "Image44",
        "When": "Wed, Aug 17, 2022",
        "Time": "Yeonnam, Seoul, Korea",
        "Where": "Celebrating my birthday w. Minah"
      },
      {
        "Title": "Image45",
        "When": "Fri, Aug 19, 2022",
        "Time": "4:55 PM",
        "Where": "Yeoido, Seoul, Korea",
        "What": "Shopping with my mom"
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
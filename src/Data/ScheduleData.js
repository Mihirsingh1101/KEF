// src/pages/SchedulePage.js (or wherever your ScheduleData is)
import React from 'react'; // Make sure to import React

// ... other imports

// ... SchedulePage component

const ScheduleData = {
  1: {
    title: "Day 1 - October 2, 2025 (Vijay Daśami)",
    events: [
      { time: "08:00 - 10:00", title: "Maha Chandi Homa (Fire Ceremony)", description: "", tag: "Village square", tagColor: "bg-yellow-500" },
      
      { time: "21:00", title: "Astronomy Night: Stargazing & Sky Talk", description: "", tag: "Fountain Area", tagColor: "bg-yellow-500" },
    ]
  },
  2: {
    title: "Day 2 - October 3, 2025",
    events: [
      { time: "11:00 – 15:00", title: "First Movie Show", description: "Bengal Files", tag: "Auditorium", tagColor: "bg-yellow-500" },
      { time: "16:00 - 17:00", title: "Talk", description: <ul className="list-none space-y-1">
            <li>Workshop on Indian Entrepreneurship by Shri Paritosh Sharma</li>
          </ul>, tag: "", tagColor: "bg-yellow-500" },
          
      { time: "17:00 - 21:00", title: "Second Movie show", description: "Bengal Files", tag: "Auditorium", tagColor: "bg-yellow-600" },
      { time: "16:00 - 17:00", title: "Talk", description: <ul className="list-none space-y-1">
            <li>Vivek Agnihotri (Director of The Bengal Files) conversation with Ajay Chaturvedi (Convenor KEF)</li>
          </ul>, tag: "", tagColor: "bg-yellow-500" },
      
    ]
  },
  3: {
    title: "Day 3 - October 4, 2025",
    events: [
      {
        time: "10:00 - 11:00",
        title: "Activities",
        description: (
          // MODIFICATION: Removed bullet points and fixed line break
          <ul className="list-none space-y-1">
            <li>Inauguration of KEF 2025 by Shri&nbsp;Anurag&nbsp;Thakur (Hon'ble&nbsp;MP)</li>
            <li>Children: Drawing (Hall A)</li>
            <li>Men: Arm Wrestling (Hall B)</li>
            <li>Common: Recitation (Garden)</li>
            <li>Blowing Balloons (Hall C)</li>
          </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      { time: "11:00 - 15:00", title: "Movie Show", description: "Watch The Bengal Files", tag: "Auditorium", tagColor: "bg-yellow-500" },
      {
        time: "11:00 - 12:00",
        title: "Activities",
        description: (
          <ul className="list-none space-y-1">
            <li>Children: Drawing (Hall A)</li>
            <li>Common: Recitation (Garden)</li>
          </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      { time: "12:00 - 13:00", title: "Activities", description: "Women: Mehendi (Hall C)", tagColor: "bg-yellow-500" },
      {
        time: "13:00 - 14:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Children: Raja, Chor, Mantri, Sipahi (Hall B)</li>
                <li>Men: Roti Making (Front of Hall A–C)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "14:00 - 15:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Women: Rangoli (Front of Halls A–C)</li>
                <li>Common: Rumal Game / Juice & Quiz (Fountain / Hall B)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "15:00 - 16:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Temple Talks (VSCS)</li>
                <li>Children: Indian Ludo (Hall B)</li>
                <li>Men: Dart (Fountain Area)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "16:00 - 17:00",
        title: "Workshop",
        description: (
            <ul className="list-none space-y-1">
                <li>Colloqia talk(AUDI),</li>
                <li>Workshop by Dr. Mala Kapadia (Hall B), </li>
                <li>Women: Needle & Thread (Hall A),</li>
                <li>Common: Antakshari/Face Paint (Hall C)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "17:00 - 18:00",
        title: "Workshop",
        description: (
            <ul className="list-none space-y-1">
                <li>Dr. Kapadia's workshop on ayurveda (Hall B)</li>
                <li>Men: Carrom (Front of Hall A–C)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "18:00 - 19:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Men: Chess (Front of Hall A–C)</li>
                <li>Common: Science Quiz (Hall B)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      { time: "19:00 - 20:00", title: "Dance performance", description: "Kautula Dance (VSCS)", tagColor: "bg-yellow-500" },
      { time: "20:30 - 21:00", title: "Village Soul Night (Star Night 3)", description: "Village Soul Night – Mohit Chauhan (VSCS)", tag: "Auditorium", tagColor: "bg-yellow-500" },
    ]
  },
  4: {
    title: "Day 4 - October 5, 2025",
    events: [
      {
        time: "10:00 - 11:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Children: Creative Writing (Hall B)</li>
                <li>Common: Puzzles (Hall C), Memory Game (Hall A)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      { time: "11:00 - 15:00", title: "Movie Show", description: "Bengal Files", tagColor: "bg-yellow-500" },
      {
        time: "11:00 - 12:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Children: Ball in the Bucket (Garden)</li>
                <li>Women: Mehendi (Hall C)</li>
                <li>Men: Creative Writing (Hall B)</li>
                <li>Common: Vyapaar (Front of Hall A–C)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "12:00 - 13:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Children: Lattu Fight (Health Center)</li>
                <li>Women: Fancy Dress (Hall B)</li>
                <li>Common: Headphone Listener (Grass Area)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "13:00 - 14:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Children: Indian Ludo (In front of Hall A–C)</li>
                <li>Women: Needle & Thread (Hall A)</li>
                <li>Chopsticks Competition</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "14:00 - 15:00",
        title: "Activities",
        description: (
            <ul className="list-none space-y-1">
                <li>Women: Golgappa Eating Competition (Village Square)</li>
                <li>Common: Many Candles, One Matchstick (Hall A)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "15:00 - 16:00",
        title: "Discussion Panel",
        description: (
            <ul className="list-none space-y-1">
                <li>Temple Talks (VSCS)</li>
                <li>Common: Chausar (Hall B)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      {
        time: "16:00 - 17:00",
        title: "Workshop",
        description: (
            <ul className="list-none space-y-1">
                <li>Shefali Vaidya Workshop (HALL B)</li>
                <li>Common: Antakshari (Hall C)</li>
            </ul>
        ),
        tagColor: "bg-yellow-500"
      },
      { time: "17:00 - 18:00", title: "Activity", description: "Common: Guess the Object (Hall A)", tagColor: "bg-yellow-500" },
      { time: "18:00 - 19:00", title: "Kalaripayattu", description: "Kalaripayattu Event in Hockey Ground.", tagColor: "bg-yellow-500" },
      { time: "19:00 – 20:00", title: "SPIC MACAY Event", description: "", tag: "Auditorium", tagColor: "bg-yellow-500" },
      { time: "20:30 - 21:00", title: "Cultural Night", description: "Japanese Dance, UDC & Himachal Folk Ensemble", tagColor: "bg-yellow-500" },
    ]
  }
};
// ... rest of the file
export default ScheduleData
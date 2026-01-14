export const fetchYouTubeData = async () => {
  // Base list of videos (The 9 videos you provided)
  const baseVideos = [
    {
      title: "LIVE: Social Science Foundation Course | Topper Tricks You Must Know!",
      videoUrl: "https://www.youtube.com/embed/HxKMK6P9aIA"
    },
    {
      title: "Unlock Kannada Grammar: ವ್ಯಾಕರಣ – ಪದ ರಚನೆ LIVE at 7 PM!",
      videoUrl: "https://www.youtube.com/embed/ADUzlPbQY60"
    },
    {
      title: "Confused by Reported Speech & Degrees of Comparison? Let’s Fix That – LIVE at 7 PM",
      videoUrl: "https://www.youtube.com/embed/dKgwFx05Cwc"
    },
    {
      title: "Don’t Skip the Fundamentals! Class 10 Math Foundation Starts HERE | 7 PM Live",
      videoUrl: "https://www.youtube.com/embed/Rjxc7N2YeMQ"
    },
    {
      title: "Master Mind Maps for Social Science! | Note-Taking Tips + Map Basics | Class 10 Foundation @ 7PM",
      videoUrl: "https://www.youtube.com/embed/8Yiey1FvdX4"
    },
    {
      title: "Class 10 Science: Chemistry Essentials with Harshitha Ma’am",
      videoUrl: "https://www.youtube.com/embed/wsQFX5KyUbM"
    },
    {
      title: "Class 10 Kannada Grammar: Must-Know Topics with Vani Ma’am",
      videoUrl: "https://www.youtube.com/embed/uWy665MxeOI"
    },
    {
      title: "Class 10 Grammar: Master Articles, Prepositions & Tags!",
      videoUrl: "https://www.youtube.com/embed/2vGD5QU72tU"
    },
    {
      title: "What is Mathematics? Karthik Sir Breaks It Down! | SSCL Karnataka",
      videoUrl: "https://www.youtube.com/embed/gvcSglM973A"
    }
  ];

  // Function to generate the full list with categories and unique IDs
  const generateData = () => {
    const categories = [
      "Foundation Course Batch (25-26)",
      "Career Guidance Batch (25-26)",
      "Headstart Batch (25-26)"
    ];

    let allVideos = [];
    let idCounter = 1;

    categories.forEach(category => {
      // For each category, add the same 9 videos
      const categoryVideos = baseVideos.map(video => ({
        ...video,
        id: idCounter++, // Ensure unique ID for React keys
        category: category
      }));
      allVideos = [...allVideos, ...categoryVideos];
    });

    return allVideos;
  };

  return generateData();
};
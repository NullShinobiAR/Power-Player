// Swaram Premium Music Player Core Logic

// 1. Tracks Dataset
const tracks = [
    {
        id: 0,
        title: "Surya Anna Gana Song",
        artist: "Tamil Gana Hits",
        album: "Gana Beats (2017)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781422402/Surya_anna_gana_song_tamil_New_2017_128k_jrtudx.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Rich Red-Orange
        lyrics: [
            { time: 0, text: "🎵 [Instrumental Street Intro] 🎵" },
            { time: 5, text: "Surya Anna... Local Gana vibes!" },
            { time: 10, text: "Vibrant drums kick in, feel the street heat!" },
            { time: 15, text: "Kuthu beat thumping, dance to the sound," },
            { time: 20, text: "Spin around, jump, and lift off the ground!" },
            { time: 26, text: "🔥 [Fast-paced Gana Chorus] 🔥" },
            { time: 32, text: "Tamil style singing, raw energy flows," },
            { time: 38, text: "Where the music takes you, nobody knows!" },
            { time: 44, text: "Swaram premium player, visualised in line," },
            { time: 50, text: "Every beat dancing, shining design!" },
            { time: 56, text: "🎵 [Melodic Gana Breakdown] 🎵" },
            { time: 64, text: "Shout it out, join the street crowd," },
            { time: 70, text: "Gana hits playing, play it proud!" }
        ]
    },
    {
        id: 1,
        title: "Tamil Remix Kuthu Song",
        artist: "DJ Kuthu Master",
        album: "Kuthu Remix Session",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416713/Tamil_Remix_Kuthu_Song_Use_to_best_experience_mgjdm9.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "⚡ [DJ Scratch & Bass Drop Intro] ⚡" },
            { time: 5, text: "Wear headphones for the ultimate experience!" },
            { time: 10, text: "Maximum bass activated..." },
            { time: 15, text: "Tamil Remix Kuthu, let the rhythm begin!" },
            { time: 20, text: "Hands up high, feel the speakers shake," },
            { time: 25, text: "This is a masterpiece Chennai beat we make!" },
            { time: 31, text: "🥁 [Heavy Kuthu Percussion Solo] 🥁" },
            { time: 38, text: "Speeding up the tempo, feel the glow," },
            { time: 44, text: "Dynamic neon visualizers flow!" },
            { time: 50, text: "Left, right, bounce, drop it down low!" },
            { time: 56, text: "🔊 [Sub-woofer Vibration Break] 🔊" },
            { time: 65, text: "Dancing till the morning light shines," },
            { time: 72, text: "DJ Kuthu Remix, crossing all lines!" }
        ]
    },
    {
        id: 2,
        title: "Yellae Lama",
        artist: "Harris Jayaraj",
        album: "7aum Arivu Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416700/Yellae-Lama_pyimqj.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Royal Violet Purple
        lyrics: [
            { time: 0, text: "✨ [Chanting Choral Harmonies] ✨" },
            { time: 4, text: "Yellae Lama... Yellae Lama..." },
            { time: 9, text: "Oru nimisham... oru nodi podhum..." },
            { time: 14, text: "Harris Jayaraj magic signature sound," },
            { time: 19, text: "Love beats blending, floating off the ground!" },
            { time: 24, text: "Yellae Lama, tell me the secret now," },
            { time: 29, text: "Rhythm and synths take a beautiful bow!" },
            { time: 35, text: "🎻 [Violin and Flute Crescendo] 🎻" },
            { time: 42, text: "Beautiful Tamil melodies singing in the breeze," },
            { time: 48, text: "Swaram web player, listening with ease," },
            { time: 54, text: "Dynamic theme morphs, matching color keys." },
            { time: 62, text: "🎵 [Guitar Solo Interlude] 🎵" },
            { time: 70, text: "Yellae Lama, feel the deep romance flow!" }
        ]
    },
    {
        id: 3,
        title: "Yumabaibesa",
        artist: "Tamil Folk Group",
        album: "Folk Rhythms",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416694/Yumabaibesa_oybbpe.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold/Yellow
        lyrics: [
            { time: 0, text: "🎵 [Folk Beat Intro] 🎵" },
            { time: 5, text: "Yumabaibesa... feel the traditional energy!" },
            { time: 10, text: "Traditional percussion thumping hard" },
            { time: 15, text: "Vibe with the rural Chennai roots!" },
            { time: 21, text: "Dance to the village beat," },
            { time: 27, text: "Clap your hands, move your feet!" },
            { time: 33, text: "🎵 [Traditional Instrumentals] 🎵" }
        ]
    },
    {
        id: 4,
        title: "Yaarukkum Nenje",
        artist: "Anirudh Ravichander",
        album: "Thangamagan (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416693/Yaarukkum_Nenje_-_Masstamilan.in_o1mnfl.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Soft Melancholy Synth Intro] 🎵" },
            { time: 4, text: "Yaarukkum Nenje... Anirudh's soulful melody" },
            { time: 9, text: "Ennodu nee irundhal... oru nimisham podhum" },
            { time: 14, text: "Listen to the guitar and ambient vocals" },
            { time: 20, text: "A sweet romance in the evening breeze," },
            { time: 26, text: "Close your eyes, find your ease," },
            { time: 32, text: "🎻 [Violin Crescendo] 🎻" }
        ]
    },
    {
        id: 5,
        title: "Yethi Yethi",
        artist: "Harris Jayaraj",
        album: "Vaaranam Aayiram (2008)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416688/Yethi_Yethi_-_MassTamilan.com_iujlju.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎸 [Heavy Electric Rock Guitar Riff] 🎸" },
            { time: 5, text: "Yethi yethi... yethi yethi... yethi yethi!" },
            { time: 10, text: "Vaaranam Aayiram rock anthem begins!" },
            { time: 15, text: "Hands up high, feel the college spirit!" },
            { time: 20, text: "Jump to the guitar shredding fast," },
            { time: 25, text: "Make these young memories last!" },
            { time: 30, text: "⚡ [High Voltage Rock Drums] ⚡" }
        ]
    },
    {
        id: 6,
        title: "Vaathi Coming",
        artist: "Anirudh Ravichander",
        album: "Master (2021)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416665/Vaathi-Coming-MassTamilan.io_nqwvg2.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "26, 188, 156", // Teal Green
        lyrics: [
            { time: 0, text: "🥁 [Massive Dappankuthu Beat Intro] 🥁" },
            { time: 6, text: "Vaathi Coming... DJ Master remix!" },
            { time: 12, text: "Listen to the signature whistles and sub bass" },
            { time: 18, text: "Vaathi coming! Bounce to the shoulder-drop!" },
            { time: 24, text: "Feel the energetic thavil roll out," },
            { time: 30, text: "This is what mass dance is all about!" },
            { time: 36, text: "🔊 [Heavy Synth & Whistle Solo] 🔊" }
        ]
    },
    {
        id: 7,
        title: "Vengamavan",
        artist: "Hiphop Tamizha",
        album: "Natpe Thunai (2019)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416647/Vengamavan-MassTamilan.org_oogxsh.mp3",
        cover: "gana_cover.png",
        accentRGB: "231, 76, 60", // Alizarin Red
        lyrics: [
            { time: 0, text: "🔥 [Fast Hip Hop Tamil Intro] 🔥" },
            { time: 5, text: "Vengamavan... Hiphop Tamizha energy!" },
            { time: 10, text: "Never back down, push the limits!" },
            { time: 15, text: "Fight till the end, roar like a tiger!" },
            { time: 21, text: "Massive bass synth pumping through," },
            { time: 26, text: "This energetic track is made for you!" },
            { time: 31, text: "🎤 [Fast Tamil Rap Verse] 🎤" }
        ]
    },
    {
        id: 8,
        title: "Vikram Title Track",
        artist: "Anirudh Ravichander",
        album: "Vikram (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416636/Vikram-Title-Track-MassTamilan.so_iqmulf.mp3",
        cover: "yellae_cover.png",
        accentRGB: "44, 62, 80", // Midnight Blue/Slate
        lyrics: [
            { time: 0, text: "🦅 [Eagle Scream & Orchestral Action Intro] 🦅" },
            { time: 6, text: "Vikram... Vikram... Vikram!" },
            { time: 12, text: "Once a king, always a king!" },
            { time: 18, text: "Heavy synth action, metal guitar drop!" },
            { time: 24, text: "Action beat pounding deep in the night," },
            { time: 30, text: "Swaram premium player, visualising bright!" },
            { time: 36, text: "💥 [Cinematic Drop & Metal Guitars] 💥" }
        ]
    },
    {
        id: 9,
        title: "Yamma Yamma",
        artist: "S. P. Balasubrahmanyam",
        album: "7aum Arivu (2011)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416630/Yamma_Yamma_-_MassTamilan.com_uulvnh.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "🎵 [Melancholy Melody Intro] 🎵" },
            { time: 5, text: "Yamma Yamma... SPB's legendary vocals" },
            { time: 12, text: "Kadhal tholvi... feel the deep sorrow" },
            { time: 18, text: "Beautiful violin backing, listening to the flow" }
        ]
    },
    {
        id: 10,
        title: "Uyerin-Uyere",
        artist: "KK, Suchitra",
        album: "Kaakha Kaakha (2003)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416619/Uyerin-Uyere_mpbxru.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Melodic Synth Intro] 🎵" },
            { time: 6, text: "Uyirin Uyire... Uyirin Uyire..." },
            { time: 12, text: "Harris Jayaraj romance masterpiece" },
            { time: 18, text: "Listening to the beautiful chord progressions" }
        ]
    },
    {
        id: 11,
        title: "Vaadi Pulla Vaadi",
        artist: "Hiphop Tamizha",
        album: "Meesaya Murukku (2017)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416607/Vaadi_Pulla_Vaadi_PenduJatt.Com.Se_jqabgx.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Fast Hip Hop Beats] 🎵" },
            { time: 5, text: "Vaadi pulla vaadi... Hiphop Tamizha hits!" },
            { time: 11, text: "Chennai love vibes and heavy synth drums" },
            { time: 17, text: "Sing along to the catchy hook!" }
        ]
    },
    {
        id: 12,
        title: "Vethayala-Pottendi",
        artist: "Tamil Folk Group",
        album: "Traditional Folk Beats",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416606/Vethayala-Pottendi_she0da.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold/Yellow
        lyrics: [
            { time: 0, text: "🎵 [Traditional Nadaswaram Intro] 🎵" },
            { time: 5, text: "Vethayala pottendi... folk vibes!" },
            { time: 12, text: "Village percussion thumping rhythmically" },
            { time: 18, text: "Feel the local Tamil culture and energy" }
        ]
    },
    {
        id: 13,
        title: "Verappa",
        artist: "Tamil Street Beats",
        album: "Local Street Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416566/Verappa-MassTamilan.dev_znjisn.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🎵 [Street Percussion Intro] 🎵" },
            { time: 6, text: "Verappa... local street gana beat!" },
            { time: 12, text: "Fast tempo, street energy thumping" },
            { time: 18, text: "Vibe to the raw local rhythm!" }
        ]
    },
    {
        id: 14,
        title: "Thirunelveli Alvada",
        artist: "Tamil Kuthu Group",
        album: "Kuthu Celebration",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416558/Thirunelveli_Alvada_-_MassTamilan.com_1_n0thnn.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🥁 [Thavil & Whistle Celebrate Intro] 🥁" },
            { time: 5, text: "Thirunelveli Alvada... iconic dance kuthu!" },
            { time: 11, text: "Chennai marriage dance beat style" },
            { time: 17, text: "Bounce to the drums!" }
        ]
    },
    {
        id: 15,
        title: "Vandha Edam",
        artist: "Anirudh Ravichander",
        album: "Jawan (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416554/Vandha-Edam-MassTamilan.dev_fn5znm.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🔥 [Heavy Cinematic Beat Drop] 🔥" },
            { time: 6, text: "Vandha edam... mass dance rhythm!" },
            { time: 12, text: "Anirudh's high voltage club beats" },
            { time: 18, text: "Feel the sub bass pumping!" }
        ]
    },
    {
        id: 16,
        title: "Ragile Ragile",
        artist: "Tamil Beats Group",
        album: "Cinematic Energetic Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416544/Ragile_Ragile_dw08xs.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Upbeat Synth Intro] 🎵" },
            { time: 5, text: "Ragile Ragile... modern energetic beat!" },
            { time: 11, text: "Feel the electric synth waves flowing" },
            { time: 17, text: "High tempo melody!" }
        ]
    },
    {
        id: 17,
        title: "Vaaren Vaaren Seemaraja",
        artist: "D. Imman",
        album: "Seemaraja (2018)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416542/Vaaren-Vaaren-Seemaraja-MassTamilan.com_c3jsle.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold/Yellow
        lyrics: [
            { time: 0, text: "🎵 [Folk Trumpet Fanfare] 🎵" },
            { time: 6, text: "Vaaren vaaren Seemaraja... folk kuthu!" },
            { time: 12, text: "D. Imman's majestic village orchestrations" },
            { time: 18, text: "Local festival celebration beat!" }
        ]
    },
    {
        id: 18,
        title: "Vaada Thambi",
        artist: "D. Imman, Anirudh",
        album: "Etharkkum Thunindhavan (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416538/Vaada-Thambi-MassTamilan.so_bzoamm.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Massive Percussion Opening] 🔥" },
            { time: 5, text: "Vaada thambi... high energy mass track!" },
            { time: 11, text: "Anirudh's powerful vocals and local drums" },
            { time: 17, text: "Pure adrenaline pump!" }
        ]
    },
    {
        id: 19,
        title: "Vaadi Vaadi",
        artist: "Tamil Pop Group",
        album: "Romantic Beats Selection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416533/Vaadi-Vaadi_z6qp2o.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Catchy Synthesizer Intro] 🎵" },
            { time: 5, text: "Vaadi vaadi... upbeat Tamil pop!" },
            { time: 11, text: "Danceable melodies and electronic drums" },
            { time: 17, text: "Swaram dynamic theme glowing!" }
        ]
    },
    {
        id: 20,
        title: "Vaadamallikaari En Varungala",
        artist: "Traditional Folk",
        album: "Village Rhythms",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416522/Vaadamallikaari_En_Varungala_-_MassTamilan.com_v1qwvn.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold/Yellow
        lyrics: [
            { time: 0, text: "🎵 [Folk Flute & Urumi Melam Intro] 🎵" },
            { time: 6, text: "Vaadamallikaari... village folk vibes!" },
            { time: 12, text: "Traditional romance and local drums" },
            { time: 18, text: "Feel the organic Tamil rhythms!" }
        ]
    },
    {
        id: 21,
        title: "Top Tucker",
        artist: "Badshah, Yuvan Shankar Raja",
        album: "Top Tucker Single (2021)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416518/Top-Tucker-MassTamilan.org_vire97.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "⚡ [Electronic Club Beats Intro] ⚡" },
            { time: 5, text: "Top Tucker... cross-culture massive hit!" },
            { time: 11, text: "Yuvan Shankar Raja and Badshah dance beat" },
            { time: 17, text: "Swaram visualizer jumping high!" }
        ]
    },
    {
        id: 22,
        title: "Sema Masss",
        artist: "Yuvan Shankar Raja",
        album: "Masss (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416510/Sema_Masss____isaimini.co_zqbvq9.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Heavy Bass & Electric Trumpet Intro] 🔥" },
            { time: 6, text: "Sema Masss... Yuvan's signature mass beat!" },
            { time: 12, text: "Suriya's stylish walk bgm style" },
            { time: 18, text: "Maximum bass thumping!" }
        ]
    },
    {
        id: 23,
        title: "Two Two Two",
        artist: "Anirudh Ravichander",
        album: "Kaathuvaakula Rendu Kaadhal (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416508/Two-Two-Two-MassTamilan.so_xartjx.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Catchy Vocals & Electronic Clap Intro] 🎵" },
            { time: 5, text: "Two Two Two... Anirudh's fun dance track!" },
            { time: 11, text: "Rendu kaadhal romance and club vibe" },
            { time: 17, text: "Sing along to two two two two!" }
        ]
    },
    {
        id: 24,
        title: "Un Paarvayil",
        artist: "Tamil Melody",
        album: "Melody Selection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416507/Un_Paarvayil_-_MassTamilan.com_a3y4jg.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "🎵 [Soft Piano & Acoustic Guitar Intro] 🎵" },
            { time: 6, text: "Un Paarvayil... romantic ambient track" },
            { time: 12, text: "Sweet harmonies and floating synth pads" },
            { time: 18, text: "Feel the calm melodic waves!" }
        ]
    },
    {
        id: 25,
        title: "TOOFAN MEGAMIX NIKHIL MUSIQ",
        artist: "DJ Nikhil Musiq",
        album: "Megamix Mashup Session",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416499/TOOFAN_MEGAMIX_NIKHIL_MUSIQ_SunixThakor_-_Nikhil_Musiq_inxtqa.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "⚡ [High Energy EDM Mashup Kickoff] ⚡" },
            { time: 7, text: "Toofan Megamix... non-stop DJ energy!" },
            { time: 14, text: "Bass dropping, synth sirens spinning" },
            { time: 21, text: "Chennai dance floor remix vibes!" }
        ]
    },
    {
        id: 26,
        title: "TOP 5 SURIYA S MASS BGM",
        artist: "Suriya Mass BGM",
        album: "Hero BGM Collection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416499/TOP_5_SURIYA_S_MASS_BGM_256k_gxmxn7.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Epic Action Brass Intro] 🔥" },
            { time: 6, text: "Top 5 Suriya Mass BGM... action loops!" },
            { time: 13, text: "Glow themes shifting in red orange neon" },
            { time: 20, text: "Hear the massive hero orchestrations!" }
        ]
    },
    {
        id: 27,
        title: "Tamizhanna Naan Oru",
        artist: "Tamil Folk Group",
        album: "Patriotic Folk Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416498/Tamizhanna-Naan-Oru_h5ubku.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Proud Folk Drums Opening] 🎵" },
            { time: 5, text: "Tamizhanna naan oru... local pride!" },
            { time: 11, text: "Upbeat celebration of Tamil heritage" },
            { time: 17, text: "Swaram premium local sound visualised!" }
        ]
    },
    {
        id: 28,
        title: "Toofan",
        artist: "Ravi Basrur",
        album: "KGF Chapter 2 (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416494/Toofan-MassTamilan.so_hsiog2.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "💥 [Heavy Industrial Drums & Metal Riffs] 💥" },
            { time: 6, text: "Toofan KGF 2... massive cinematic energy!" },
            { time: 12, text: "Hear the powerful mass choral chants" },
            { time: 18, text: "Glow visualizer pulsing with heavy metal!" }
        ]
    },
    {
        id: 29,
        title: "Therikkudhu Masss",
        artist: "Yuvan Shankar Raja",
        album: "Masss (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416485/Therikkudhu_Masss_-_MassTamilan.com_nrtez0.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Yuvan Shankar Raja Signature Scratch] 🔥" },
            { time: 5, text: "Therikkudhu Masss... stylish dance beat!" },
            { time: 11, text: "Bounce to the Chennai local rhythm" },
            { time: 17, text: "Pure Suriya style sound!" }
        ]
    },
    {
        id: 30,
        title: "The Monster Song",
        artist: "Ravi Basrur",
        album: "KGF Chapter 2 (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416483/The-Monster-Song-MassTamilan.so_zsq038.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "💥 [Dark Action Chanting Opening] 💥" },
            { time: 6, text: "The Monster Song... heavy rock orchestra!" },
            { time: 13, text: "Rocky Bhai's menacing signature theme" },
            { time: 20, text: "Deep metal visualizer pulse!" }
        ]
    },
    {
        id: 31,
        title: "Saarah Saarah",
        artist: "Tamil Melody",
        album: "Melody Selection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416475/Saarah-Saarah_sce9dg.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Acoustic Guitar & Soft String Pad] 🎵" },
            { time: 6, text: "Saarah Saarah... soulful romance melody" },
            { time: 12, text: "Listen to the calm emotional vocal flow" },
            { time: 18, text: "Perfect relaxed listening vibes" }
        ]
    },
    {
        id: 32,
        title: "Theeyaga Thondri",
        artist: "Yuvan Shankar Raja",
        album: "Valimai (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416474/Theeyaga-Thondri-MassTamilan.fm_d6ncqj.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Epic Electric Guitar Shredding] 🔥" },
            { time: 5, text: "Theeyaga Thondri... Ajith's massive Valimai track!" },
            { time: 11, text: "Yuvan Shankar Raja's blazing energetic synth" },
            { time: 17, text: "Blazing red dynamic theme!" }
        ]
    },
    {
        id: 33,
        title: "Thattungada Melattha",
        artist: "Tamil Folk Group",
        album: "Village Celebrations",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416473/Thattungada_Melattha_-_MassTamilan.com_fs1gzz.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold/Yellow
        lyrics: [
            { time: 0, text: "🎵 [Traditional Nagara & Flute Intro] 🎵" },
            { time: 6, text: "Thattungada Melattha... local folk kuthu!" },
            { time: 12, text: "High-paced festival celebration drum beats" },
            { time: 18, text: "Dance to the village rhythms!" }
        ]
    },
    {
        id: 34,
        title: "Theemai Dhan Vellum",
        artist: "Hiphop Tamizha",
        album: "Thani Oruvan (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416463/Theemai-Dhan-Vellum_ghykt5.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "⚡ [Dark Suspenseful Industrial Intro] ⚡" },
            { time: 5, text: "Theemai dhan vellum... epic villain theme!" },
            { time: 11, text: "Arvind Swamy's stylish cinematic BGM" },
            { time: 17, text: "Deep violet visualizer shadows!" }
        ]
    },
    {
        id: 35,
        title: "Thani Oruvan",
        artist: "Hiphop Tamizha",
        album: "Thani Oruvan (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416455/Thani-Oruvan_ctznk3.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🔥 [Motivational Action Synth Intro] 🔥" },
            { time: 6, text: "Thani Oruvan... high-energy hero track!" },
            { time: 12, text: "Never yield, stand tall and fight" },
            { time: 18, text: "Swaram sports theme glowing!" }
        ]
    },
    {
        id: 36,
        title: "Thaimaasam",
        artist: "Tamil Folk",
        album: "Traditional Folk Beats",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416453/Thaimaasam_-_MassTamilan.com_zaa4as.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold/Yellow
        lyrics: [
            { time: 0, text: "🎵 [Traditional Village Melodics] 🎵" },
            { time: 5, text: "Thaimaasam... organic local Tamil folk!" },
            { time: 11, text: "Celebrating the harvest festival season" },
            { time: 17, text: "Urumi melam thumping!" }
        ]
    },
    {
        id: 37,
        title: "Thalaivar Thimingalam",
        artist: "Tamil Kuthu Group",
        album: "Kuthu Anthems Selection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416448/thalaivar_thimingalam_obfhp9.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🥁 [Massive Local Dappankuthu Intro] 🥁" },
            { time: 5, text: "Thalaivar Thimingalam... high voltage!" },
            { time: 11, text: "Bounce your shoulders to the rhythm" },
            { time: 17, text: "Maximum local celebration dance!" }
        ]
    },
    {
        id: 38,
        title: "Thaai Kelavi",
        artist: "Dhanush, Anirudh",
        album: "Thiruchitrambalam (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416443/Thaai_Kelavi_-_Dhanush_Anirudh_Ravichander_vg714q.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Upbeat Whistle & Nadaswaram Intro] 🎵" },
            { time: 5, text: "Thaai Kelavi... Dhanush & Anirudh hits!" },
            { time: 11, text: "Catchy marriage folk melody celebration" },
            { time: 17, text: "Swaram UI glowing sky blue!" }
        ]
    },
    {
        id: 39,
        title: "Tamil Nayak HD Song",
        artist: "Ram Charan, Kajal",
        album: "Nayak Tamil Hits (2017)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416416/Tamil_nayak_hd_song_2017__Ram_Charan___kaajal_256kbps_iy71wz.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Fast Rhythmic Drum Beats] 🎵" },
            { time: 5, text: "Nayak Tamil song... Ram Charan mass!" },
            { time: 11, text: "High energy cinematic pop melody" },
            { time: 17, text: "Feel the beat jumping!" }
        ]
    },
    {
        id: 40,
        title: "Shiva Vechitanda Kaala",
        artist: "Santhosh Narayanan",
        album: "Kaala (2018)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416402/Shiva_Vechitanda_Kaala_-_MassTamilan.com_i2dpwv.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Heavy Street Protest Beats] 🔥" },
            { time: 6, text: "Kaala... Santhosh Narayanan signature raw beats" },
            { time: 12, text: "Street power! Voice of the local people" },
            { time: 18, text: "Fierce red glow theme thumping!" }
        ]
    },
    {
        id: 41,
        title: "Tasakku Tasakku",
        artist: "Sam C.S.",
        album: "Vikram Vedha (2017)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416441/Tasakku-Tasakku-MassTamilan.com_o8o3zk.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🍷 [Local Street Cheers & Gana Opening] 🍷" },
            { time: 6, text: "Tasakku Tasakku... iconic street anthem!" },
            { time: 12, text: "Sam C.S. local drums and funny brass lines" },
            { time: 18, text: "Vibe to the Chennai street energy!" }
        ]
    },
    {
        id: 42,
        title: "Summa Surrunu",
        artist: "Armaan Malik, Nikhita Gandhi, D. Imman",
        album: "Etharkkum Thunindhavan (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416402/Summa-Surrunu-MassTamilan.so_apsdfu.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Heavy Street Beat Intro] 🔥" },
            { time: 5, text: "Summa Surrunu... Etharkkum Thunindhavan anthem!" },
            { time: 11, text: "D. Imman's powerful orchestration kicking in," },
            { time: 17, text: "Armaan Malik's vocals soaring high!" },
            { time: 23, text: "Feel the local Tamil energy thumping," },
            { time: 29, text: "Nikhita Gandhi's voice lighting up the crowd!" },
            { time: 35, text: "🎵 [Massive Chorus Drop] 🎵" },
            { time: 41, text: "Summa Surrunu... dance to the beats!" },
            { time: 48, text: "Swaram visualizer glowing red hot," },
            { time: 54, text: "This mass track never stops!" }
        ]
    },
    {
        id: 43,
        title: "Sonna Puriyathu",
        artist: "Shiva, Veera, Oviya (Music: S. Thaman)",
        album: "Sonna Puriyathu (2013)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416393/Sonna_Puriyathu_-_MassTamilan.com_mhv6zy.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🎵 [Catchy Comedy Beat Intro] 🎵" },
            { time: 5, text: "Sonna Puriyathu... comic gold Tamil classic!" },
            { time: 11, text: "Thaman's playful musical arrangement," },
            { time: 17, text: "Laugh and dance to the catchy hook!" },
            { time: 23, text: "Every line lands like a joke," },
            { time: 29, text: "Golden vibes flowing with rhythm!" },
            { time: 35, text: "🥁 [Comedy Percussion Drop] 🥁" },
            { time: 41, text: "Sonna Puriyathu... once more!" },
            { time: 48, text: "Swaram glowing golden, feel the vibe," },
            { time: 54, text: "Joyful Tamil beats come alive!" }
        ]
    },
    {
        id: 44,
        title: "Sulthana",
        artist: "Vivek-Mervin, Junior Nithya",
        album: "Sulthan (2021)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416393/Sulthana-MassTamilan.so_ogvws5.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "👑 [Royal Orchestral Intro] 👑" },
            { time: 5, text: "Sulthana... Karthi's mass Sulthan track!" },
            { time: 11, text: "Vivek-Mervin's majestic orchestrations rising," },
            { time: 17, text: "Junior Nithya's voice lighting up the hall!" },
            { time: 23, text: "Regal orange glow on Swaram now," },
            { time: 29, text: "Feel the royal energy take over!" },
            { time: 35, text: "🎶 [Grand Chorus] 🎶" },
            { time: 41, text: "Sulthana... bow to the beats!" },
            { time: 48, text: "Every note a royal command," },
            { time: 54, text: "This anthem rules the land!" }
        ]
    },
    {
        id: 45,
        title: "Sodakku Mela Sodakku",
        artist: "Anthony Daasan, Anirudh Ravichander",
        album: "Thaanaa Serndha Koottam (2018)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416386/Sodakku-Mela-Sodakku-MassTamilan.com_uqwchy.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🥁 [Dappankuthu Celebration Intro] 🥁" },
            { time: 5, text: "Sodakku Mela Sodakku... pure festival energy!" },
            { time: 11, text: "Anirudh's signature beat driving the crowd," },
            { time: 17, text: "Anthony Daasan's voice electrifying!" },
            { time: 23, text: "Swaram visualizer jumping bright green," },
            { time: 29, text: "Thaanaa Serndha Koottam celebration mode!" },
            { time: 35, text: "⚡ [Heavy Kuthu Drop] ⚡" },
            { time: 41, text: "Shoulders bouncing, feet stomping hard," },
            { time: 48, text: "Dance through the night in the yard," },
            { time: 54, text: "Sodakku... one more round!" }
        ]
    },
    {
        id: 46,
        title: "Siriki",
        artist: "Senthil Ganesh, Rajalakshmi",
        album: "Kaappaan (2019)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416382/Siriki-MassTamilan.org_qgzxpt.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Upbeat Romantic Folk Intro] 🎵" },
            { time: 5, text: "Siriki... Kaappaan's light hearted love song!" },
            { time: 11, text: "Senthil Ganesh & Rajalakshmi in harmony," },
            { time: 17, text: "Sky blue vibes and sweet melody!" },
            { time: 23, text: "Feel the breezy folk rhythm floating," },
            { time: 29, text: "Romance in every note and chord!" },
            { time: 35, text: "🎶 [Melodic Folk Bridge] 🎶" },
            { time: 41, text: "Siriki... the heart sings along," },
            { time: 48, text: "Swaram glowing cool sky blue," },
            { time: 54, text: "Every moment feels brand new!" }
        ]
    },
    {
        id: 47,
        title: "Saree Ke Fall Sa",
        artist: "Pritam, Antara Mitra, Nakash Aziz",
        album: "R... Rajkumar (2013)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416374/Saree_Ke_Fall_Sa-StarMusiQ.Com_ruxivq.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Royal Purple
        lyrics: [
            { time: 0, text: "💜 [Bollywood Groove Intro] 💜" },
            { time: 5, text: "Saree Ke Fall Sa... iconic Bollywood dance hit!" },
            { time: 11, text: "Pritam's addictive rhythm and hook," },
            { time: 17, text: "Antara Mitra's voice, one electric look!" },
            { time: 23, text: "Purple Swaram glow for this royal hit," },
            { time: 29, text: "Dance floor ignites, every single bit!" },
            { time: 35, text: "🎵 [Bollywood Club Drop] 🎵" },
            { time: 41, text: "Saree Ke Fall Sa... spin around!" },
            { time: 48, text: "Feel the beat from the ground," },
            { time: 54, text: "Bollywood royalty has been found!" }
        ]
    },
    {
        id: 48,
        title: "Seval Kodi",
        artist: "Hariharan, Anuradha Sriram (Music: Yuvan Shankar Raja)",
        album: "Vel (2007)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416373/Seval-Kodi_qrezvw.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🌟 [Folk Celebration Intro] 🌟" },
            { time: 5, text: "Seval Kodi... Yuvan Shankar Raja folk hit!" },
            { time: 11, text: "Hariharan's legendary classical vocals soar," },
            { time: 17, text: "Anuradha Sriram's golden harmony and more!" },
            { time: 23, text: "Gold theme glowing on Swaram player," },
            { time: 29, text: "Vel's soundtrack layers upon layer!" },
            { time: 35, text: "🥁 [Folk Percussion Build] 🥁" },
            { time: 41, text: "Seval Kodi... the rooster calls dawn!" },
            { time: 48, text: "Tamil folk spirit is alive and on," },
            { time: 54, text: "Dance to the ancient village song!" }
        ]
    },
    {
        id: 49,
        title: "Porkanda Singam (EDM Version)",
        artist: "Anirudh Ravichander",
        album: "Vikram (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416368/Porkanda-Singam-_EDM-Version_-MassTamilan.dev_grz7i0.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "⚡ [EDM Bass Drop Intro] ⚡" },
            { time: 5, text: "Porkanda Singam EDM... Vikram mass energy!" },
            { time: 11, text: "Anirudh's electronic remix takes over," },
            { time: 17, text: "Sub bass shaking the floor cover!" },
            { time: 23, text: "Purple Swaram visualizer pulsing hard," },
            { time: 29, text: "Kamal Haasan mass theme in the yard!" },
            { time: 35, text: "💥 [Heavy EDM Drop] 💥" },
            { time: 41, text: "Porkanda Singam... roar like a lion!" },
            { time: 48, text: "The crowd goes wild and cryin'," },
            { time: 54, text: "Vikram's power keeps on shining!" }
        ]
    },
    {
        id: 50,
        title: "Selfie Pulla",
        artist: "Vijay, Sunidhi Chauhan, Anirudh Ravichander",
        album: "Kaththi (2014)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416366/Selfie-Pulla_pj9ucx.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "📸 [Fun Party Beat Intro] 📸" },
            { time: 5, text: "Selfie Pulla... Vijay's iconic fun track!" },
            { time: 11, text: "Sunidhi Chauhan's energy is electric," },
            { time: 17, text: "Anirudh's beats make it eclectic!" },
            { time: 23, text: "Kaththi's hit song bouncing high," },
            { time: 29, text: "Red hot Swaram glow reaching the sky!" },
            { time: 35, text: "🔥 [Kaththi Dance Drop] 🔥" },
            { time: 41, text: "Selfie Pulla... click and dance!" },
            { time: 48, text: "Take your shot and take a chance," },
            { time: 54, text: "This party anthem leads the dance!" }
        ]
    },
    {
        id: 51,
        title: "Podu Attam Podu",
        artist: "Yuvan Shankar Raja",
        album: "Masss (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416360/Podu-Attam-Podu-MassTamilan.org_qdxmbc.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Yuvan Mass Beat Intro] 🔥" },
            { time: 5, text: "Podu Attam Podu... Masss movie anthem!" },
            { time: 11, text: "Yuvan Shankar Raja's signature beats hit hard," },
            { time: 17, text: "Suriya's swag lighting up the yard!" },
            { time: 23, text: "Red hot glow on the Swaram player," },
            { time: 29, text: "Layer after layer of pure energy!" },
            { time: 35, text: "🥁 [Massive Percussion Drop] 🥁" },
            { time: 41, text: "Podu Attam Podu... bounce the beat!" },
            { time: 48, text: "Stamp your feet on the street," },
            { time: 54, text: "Masss music never admits defeat!" }
        ]
    },
    {
        id: 52,
        title: "Sakka Podu Pottane",
        artist: "STR (Silambarasan), Yuvan Shankar Raja",
        album: "Sakka Podu Podu Raja (2017)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416359/Sakka-Podu-Pottane_q3qrnc.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "👑 [STR Iconic Intro] 👑" },
            { time: 5, text: "Sakka Podu Pottane... STR mass anthem!" },
            { time: 11, text: "Silambarasan's charismatic vocal punch," },
            { time: 17, text: "Yuvan Shankar Raja brings the crunch!" },
            { time: 23, text: "Gold glow burning on Swaram screen," },
            { time: 29, text: "This is the best dance beat you've seen!" },
            { time: 35, text: "⚡ [Raja Style Bass Drop] ⚡" },
            { time: 41, text: "Sakka Podu... stomp the floor!" },
            { time: 48, text: "The crowd is screaming for more," },
            { time: 54, text: "STR energy you can't ignore!" }
        ]
    },
    {
        id: 53,
        title: "Puli Urumudhu",
        artist: "Devi Sri Prasad, Ananthu",
        album: "Puli (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416352/Puli-Urumudhu_bz5mme.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🐯 [Tiger Roar Action Intro] 🐯" },
            { time: 5, text: "Puli Urumudhu... Vijay's Puli mass track!" },
            { time: 11, text: "Devi Sri Prasad's powerful beats rise," },
            { time: 17, text: "Ananthu's vocals pierce the skies!" },
            { time: 23, text: "Orange Swaram glow blazing hot," },
            { time: 29, text: "Action packed energy on every spot!" },
            { time: 35, text: "🔥 [Puli Mass Drop] 🔥" },
            { time: 41, text: "Puli Urumudhu... roar loud!" },
            { time: 48, text: "Tiger energy in every crowd," },
            { time: 54, text: "This anthem makes you proud!" }
        ]
    },
    {
        id: 54,
        title: "Remo Nee Kadhalan",
        artist: "Anirudh Ravichander",
        album: "Remo (2016)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416352/Remo_Nee_Kadhalan_-_MassTamilan.com_db4s3d.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "💙 [Romantic Club Beat Intro] 💙" },
            { time: 5, text: "Remo Nee Kadhalan... Sivakarthikeyan love track!" },
            { time: 11, text: "Anirudh's breezy beats floating light," },
            { time: 17, text: "Sky blue theme, the mood is just right!" },
            { time: 23, text: "Swaram glowing like a summer dream," },
            { time: 29, text: "Every note shining like a moonbeam!" },
            { time: 35, text: "🎵 [Remo Love Drop] 🎵" },
            { time: 41, text: "Nee Kadhalan... my heart calls out," },
            { time: 48, text: "Romantic waves wash all about," },
            { time: 54, text: "Love song vibes without a doubt!" }
        ]
    },
    {
        id: 55,
        title: "Private Party",
        artist: "Anirudh Ravichander, Jonita Gandhi",
        album: "Don (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416351/Private-Party-MassTamilan.dev_wgtfob.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🎉 [Club Night Beat Intro] 🎉" },
            { time: 5, text: "Private Party... Don's stylish club track!" },
            { time: 11, text: "Anirudh's electric synth filling the room," },
            { time: 17, text: "Jonita Gandhi's voice cutting through the gloom!" },
            { time: 23, text: "Green neon Swaram glow, dance floor on!" },
            { time: 29, text: "Private party vibes, let's carry on!" },
            { time: 35, text: "⚡ [Club Drop Chorus] ⚡" },
            { time: 41, text: "Private Party... exclusive night!" },
            { time: 48, text: "Every beat keeps burning bright," },
            { time: 54, text: "Swaram player owning the night!" }
        ]
    },
    {
        id: 56,
        title: "Raga of Revenge",
        artist: "Ravi Basrur",
        album: "KGF Chapter 2 (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416343/Raga_of_Revenge_r8l92s.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "💥 [Dark Cinematic Action Intro] 💥" },
            { time: 5, text: "Raga of Revenge... KGF 2 power track!" },
            { time: 11, text: "Ravi Basrur's orchestral fury rising," },
            { time: 17, text: "Purple Swaram glow, deeply mesmerising!" },
            { time: 23, text: "Rocky Bhai's signature cinematic theme," },
            { time: 29, text: "Nothing in cinema is more extreme!" },
            { time: 35, text: "🔥 [KGF Heavy Metal Drop] 🔥" },
            { time: 41, text: "Raga of Revenge... vengeance strikes!" },
            { time: 48, text: "The whole crowd absolutely likes," },
            { time: 54, text: "This anthem beyond all hypes!" }
        ]
    },
    {
        id: 57,
        title: "Raavana Mavandaa",
        artist: "Hiphop Tamizha",
        album: "Aambala (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416342/Raavana-Mavandaa-MassTamilan.dev_nxz95v.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🔥 [Hip Hop Mass Intro] 🔥" },
            { time: 5, text: "Raavana Mavandaa... Aambala power track!" },
            { time: 11, text: "Hiphop Tamizha's rap punching through," },
            { time: 17, text: "Orange glow burning, the beat is true!" },
            { time: 23, text: "Vishal's mass energy pumping loud," },
            { time: 29, text: "Aambala's theme lifting the crowd!" },
            { time: 35, text: "⚡ [Tamil Rap Verse Drop] ⚡" },
            { time: 41, text: "Raavana Mavandaa... rise and roar!" },
            { time: 48, text: "The audience wants more and more," },
            { time: 54, text: "Hiphop Tamizha rocks the core!" }
        ]
    },
    {
        id: 58,
        title: "Raawadi",
        artist: "Shreya Ghoshal, A. R. Rahman",
        album: "Pathu Thala (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416337/Raawadi-MassTamilan.dev_e1o5dp.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [A. R. Rahman Orchestral Intro] 🎵" },
            { time: 5, text: "Raawadi... Pathu Thala's enchanting melody!" },
            { time: 11, text: "Shreya Ghoshal's divine vocal magic," },
            { time: 17, text: "A. R. Rahman's composition so dramatic!" },
            { time: 23, text: "Sky blue Swaram theme flowing free," },
            { time: 29, text: "Every note drifting like a cool breeze!" },
            { time: 35, text: "🎶 [Rahman Melodic Crescendo] 🎶" },
            { time: 41, text: "Raawadi... heart melts away," },
            { time: 48, text: "Lost in the music all the day," },
            { time: 54, text: "Shreya's voice takes our breath away!" }
        ]
    },
    {
        id: 59,
        title: "Pottadhu Pathala",
        artist: "Kamal Haasan, Anirudh Ravichander",
        album: "Vikram (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416332/Pottadhu_Pathala_-_MassTamilan.com_xwbxlt.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Vikram Action Street Beat Intro] 🔥" },
            { time: 5, text: "Pottadhu Pathala... Kamal Haasan Vikram!" },
            { time: 11, text: "Anirudh Ravichander's electrifying sound," },
            { time: 17, text: "Red hot Swaram glow all around!" },
            { time: 23, text: "Kamal Haasan's swag at its finest," },
            { time: 29, text: "This anthem is among the shiniest!" },
            { time: 35, text: "💥 [Vikram Heavy Drop] 💥" },
            { time: 41, text: "Pottadhu Pathala... feel the power!" },
            { time: 48, text: "Vikram dominates every hour," },
            { time: 54, text: "This song makes the speakers devour!" }
        ]
    },
    {
        id: 60,
        title: "Petromaxu Lightethan",
        artist: "Sean Roldan, Hariharasudhan",
        album: "Sathuranga Vettai (2014)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416325/Petromaxu-Lightethan_dssoet.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "💡 [Village Celebration Beat Intro] 💡" },
            { time: 5, text: "Petromaxu Lightethan... Sathuranga Vettai hit!" },
            { time: 11, text: "Sean Roldan's folk-infused melody," },
            { time: 17, text: "Gold glow on Swaram glowing free!" },
            { time: 23, text: "Hariharasudhan's vocals bright and clear," },
            { time: 29, text: "Village festival energy is here!" },
            { time: 35, text: "🎉 [Folk Kuthu Drop] 🎉" },
            { time: 41, text: "Petromaxu Lightethan... illuminate!" },
            { time: 48, text: "The rhythm makes everyone elate," },
            { time: 54, text: "This folk beat is simply great!" }
        ]
    },
    {
        id: 61,
        title: "Pakkam Vanthu",
        artist: "Anirudh Ravichander, Hiphop Tamizha",
        album: "Kaththi (2014)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416325/Pakkam-Vanthu_jcc41f.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "⚡ [Mass Kuthu Beat Intro] ⚡" },
            { time: 5, text: "Pakkam Vanthu... Kaththi's massive kuthu!" },
            { time: 11, text: "Anirudh and Hiphop Tamizha collab magic," },
            { time: 17, text: "Green neon Swaram glow, nothing tragic!" },
            { time: 23, text: "Vijay's energy infused in every beat," },
            { time: 29, text: "Pakkam Vanthu makes it complete!" },
            { time: 35, text: "🥁 [Kaththi Mass Drop] 🥁" },
            { time: 41, text: "Pakkam Vanthu... come this side!" },
            { time: 48, text: "The beat takes you on a ride," },
            { time: 54, text: "Dance floor exploding far and wide!" }
        ]
    },
    {
        id: 62,
        title: "Paalam",
        artist: "Hariharan, Shweta Mohan (Music: Anirudh)",
        album: "Kaththi (2014)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416325/Paalam_mghhww.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Melodic Romantic Intro] 🎵" },
            { time: 5, text: "Paalam... Kaththi's soulful melody!" },
            { time: 11, text: "Hariharan's classical voice is heaven," },
            { time: 17, text: "Shweta Mohan's harmony, seven-eleven!" },
            { time: 23, text: "Sky blue Swaram glow, pure romance," },
            { time: 29, text: "Anirudh's melody leads the dance!" },
            { time: 35, text: "🎶 [Beautiful Chorus] 🎶" },
            { time: 41, text: "Paalam... bridge between two hearts," },
            { time: 48, text: "Where the beautiful journey starts," },
            { time: 54, text: "Music is where love departs!" }
        ]
    },
    {
        id: 63,
        title: "Pondatiya Nee Kedacha (Remix)",
        artist: "DJ Kettavan, VDJ Alan",
        album: "Tamil Remixes",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416324/Pondatiya_Nee_Kedacha_Remix_DJ_Kettavan_VDJAlan_4_i0ptss.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [DJ Scratch Remix Intro] 🔥" },
            { time: 5, text: "Pondatiya Nee Kedacha Remix... DJ Kettavan!" },
            { time: 11, text: "VDJ Alan drops the bass below," },
            { time: 17, text: "Red hot Swaram glow, let it flow!" },
            { time: 23, text: "Kuthu remix breaking through the night," },
            { time: 29, text: "Dance floor burning, everyone's delight!" },
            { time: 35, text: "⚡ [Heavy Remix Drop] ⚡" },
            { time: 41, text: "Remix spinning, shoulders shaking," },
            { time: 48, text: "Every heartbeat is quaking," },
            { time: 54, text: "This remix is truly groundbreaking!" }
        ]
    },
    {
        id: 64,
        title: "Nellayila Mannedutha",
        artist: "Vidyasagar (Movie: Kovil)",
        album: "Kovil (2004)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416321/Nellayila_Mannedutha-StarMusiQ.Com_l0gtuh.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🌟 [Kovil Classic Folk Intro] 🌟" },
            { time: 5, text: "Nellayila Mannedutha... Kovil classic!" },
            { time: 11, text: "Vidyasagar's iconic golden composition," },
            { time: 17, text: "Gold Swaram glow, perfect position!" },
            { time: 23, text: "Simbu's energy pulsing through," },
            { time: 29, text: "Every melody feeling brand new!" },
            { time: 35, text: "🎵 [Kovil Melodic Drop] 🎵" },
            { time: 41, text: "Nellayila Mannedutha... sing along!" },
            { time: 48, text: "This golden classic still so strong," },
            { time: 54, text: "It's been our anthem all along!" }
        ]
    },
    {
        id: 65,
        title: "Polakatum Para Para",
        artist: "Santhosh Narayanan, Anirudh Ravichander",
        album: "Master (2021)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416320/Polakatum-Para-Para-MassTamilan.io_lpq5uw.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "⚡ [Master Kuthu Intro Beat] ⚡" },
            { time: 5, text: "Polakatum Para Para... Master dance hit!" },
            { time: 11, text: "Santhosh Narayanan and Anirudh power combo," },
            { time: 17, text: "Green neon Swaram glow, here we go!" },
            { time: 23, text: "Thalapathy Vijay swag and energy," },
            { time: 29, text: "Master's beat flows so freely!" },
            { time: 35, text: "🥁 [Master Bass Drop] 🥁" },
            { time: 41, text: "Polakatum Para Para... bounce high!" },
            { time: 48, text: "The kuthu beat reaches the sky," },
            { time: 54, text: "This track will never say goodbye!" }
        ]
    },
    {
        id: 66,
        title: "Piya Piya",
        artist: "Vijay Antony",
        album: "Thimiru (2006)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416308/Piya-Piya_guqeik.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Sweet Romantic Intro] 🎵" },
            { time: 5, text: "Piya Piya... Vijay Antony's sweet melody!" },
            { time: 11, text: "Thimiru's romantic track glowing warm," },
            { time: 17, text: "Orange Swaram theme, love taking form!" },
            { time: 23, text: "Guitar strumming softly in the breeze," },
            { time: 29, text: "This sweet melody is guaranteed to please!" },
            { time: 35, text: "🎶 [Romantic Bridge] 🎶" },
            { time: 41, text: "Piya Piya... you are my song," },
            { time: 48, text: "Our hearts have always belonged," },
            { time: 54, text: "Together forever, growing strong!" }
        ]
    },
    {
        id: 67,
        title: "Osarattum Pathu Thala",
        artist: "A. R. Rahman, Deepthi Suresh",
        album: "Pathu Thala (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416307/Osarattum-Pathu-Thala-MassTamilan.dev_rty8ia.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "💜 [A. R. Rahman Mystical Intro] 💜" },
            { time: 5, text: "Osarattum Pathu Thala... Rahman magic!" },
            { time: 11, text: "Deepthi Suresh's divine vocal alchemy," },
            { time: 17, text: "Purple Swaram glow, pure melodic harmony!" },
            { time: 23, text: "Pathu Thala's mystical orchestration," },
            { time: 29, text: "Every note a sonic revelation!" },
            { time: 35, text: "🎵 [Rahman Orchestral Crescendo] 🎵" },
            { time: 41, text: "Osarattum... swing to the melody!" },
            { time: 48, text: "Rahman's genius flowing free," },
            { time: 54, text: "This is pure musical poetry!" }
        ]
    },
    {
        id: 68,
        title: "Pattaya Kelappu",
        artist: "Harris Jayaraj, Vijay Yesudas, Tippu",
        album: "Sivaji (2007)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416299/Pattaya_Kelappu_-_MassTamilan.com_hyzyag.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🌟 [Sivaji Mass Folk Intro] 🌟" },
            { time: 5, text: "Pattaya Kelappu... Sivaji The Boss kuthu!" },
            { time: 11, text: "Harris Jayaraj's folk-orchestral masterpiece," },
            { time: 17, text: "Vijay Yesudas and Tippu never cease!" },
            { time: 23, text: "Gold Swaram theme blazing bright," },
            { time: 29, text: "Rajinikanth's swagger pure delight!" },
            { time: 35, text: "🥁 [Sivaji Kuthu Drop] 🥁" },
            { time: 41, text: "Pattaya Kelappu... rise and fly!" },
            { time: 48, text: "The Sivaji anthem touches the sky," },
            { time: 54, text: "This golden beat will never die!" }
        ]
    },
    {
        id: 69,
        title: "Pala Palakura",
        artist: "Hariharan, Harris Jayaraj",
        album: "Ayan (2009)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416297/Pala_Palakura_-_MassTamilan.com_lwkkly.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎵 [Ayan Romantic Melody Intro] 🎵" },
            { time: 5, text: "Pala Palakura... Ayan's melodic gem!" },
            { time: 11, text: "Hariharan's rich voice, Harris Jayaraj magic," },
            { time: 17, text: "Sky blue Swaram glow, nothing tragic!" },
            { time: 23, text: "Romance blooming in every note," },
            { time: 29, text: "This melody is absolutely remote!" },
            { time: 35, text: "🎶 [Harris Jayaraj Violin Solo] 🎶" },
            { time: 41, text: "Pala Palakura... a timeless rhyme," },
            { time: 48, text: "This melody transcends all time," },
            { time: 54, text: "Harris Jayaraj at his prime!" }
        ]
    },
    {
        id: 70,
        title: "Pathala Pathala",
        artist: "Kamal Haasan, Anirudh Ravichander",
        album: "Vikram (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416291/Pathala-Pathala-MassTamilan.so_sz6k7p.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Vikram Mass Street Intro] 🔥" },
            { time: 5, text: "Pathala Pathala... Vikram's street anthem!" },
            { time: 11, text: "Kamal Haasan's legendary swag returns," },
            { time: 17, text: "Anirudh's beat powerfully burns!" },
            { time: 23, text: "Red hot Swaram glow for Vikram," },
            { time: 29, text: "This epic track is never sham!" },
            { time: 35, text: "💥 [Vikram Action Drop] 💥" },
            { time: 41, text: "Pathala Pathala... underground power!" },
            { time: 48, text: "Vikram rules every single hour," },
            { time: 54, text: "This anthem has ultimate power!" }
        ]
    },
    {
        id: 71,
        title: "Palaanadhu Palaanadhu",
        artist: "Vidyasagar, KK, Srimathumitha",
        album: "Kuruvi (2008)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416278/Palaanadhu-Palaanadhu-MassTamilan.fm_p7xmxf.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Kuruvi Romantic Intro] 🎵" },
            { time: 5, text: "Palaanadhu Palaanadhu... Kuruvi classic!" },
            { time: 11, text: "Vidyasagar's melodic gift to Tamil cinema," },
            { time: 17, text: "KK and Srimathumitha, a beautiful picture!" },
            { time: 23, text: "Orange Swaram glow, warmth in the air," },
            { time: 29, text: "This melody beyond compare!" },
            { time: 35, text: "🎶 [Kuruvi Melody Chorus] 🎶" },
            { time: 41, text: "Palaanadhu... drifting in time," },
            { time: 48, text: "This nostalgic sound is so sublime," },
            { time: 54, text: "Kuruvi's music is a pantomime!" }
        ]
    },
    {
        id: 72,
        title: "Oru Pere Varalaaru",
        artist: "Anirudh Ravichander",
        album: "Vikram (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416268/Oru-Pere-Varalaaru-MassTamilan.dev_lq3sb3.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "💜 [Vikram Anthem Intro] 💜" },
            { time: 5, text: "Oru Pere Varalaaru... Vikram legend track!" },
            { time: 11, text: "Anirudh's electrifying orchestration soars," },
            { time: 17, text: "Purple Swaram glow with lion's roars!" },
            { time: 23, text: "Kamal Haasan's legacy etched in stone," },
            { time: 29, text: "This anthem claims the cinematic throne!" },
            { time: 35, text: "🦁 [Vikram Legend Drop] 🦁" },
            { time: 41, text: "Oru Pere Varalaaru... a name in history," },
            { time: 48, text: "Vikram is Tamil cinema's glory," },
            { time: 54, text: "This is an undying story!" }
        ]
    },
    {
        id: 73,
        title: "Naane Indhiran",
        artist: "G. V. Prakash Kumar",
        album: "Indru Netru Naalai (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416266/Naane_Indhiran_-_MassTamilan.com_ajdt9k.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🤖 [Sci-Fi Synth Intro] 🤖" },
            { time: 5, text: "Naane Indhiran... time travel sci-fi hit!" },
            { time: 11, text: "G. V. Prakash Kumar's futuristic beat," },
            { time: 17, text: "Sky blue Swaram glow, perfectly neat!" },
            { time: 23, text: "Indru Netru Naalai's cosmic theme," },
            { time: 29, text: "This sci-fi melody is a dream!" },
            { time: 35, text: "🚀 [Futuristic Drop] 🚀" },
            { time: 41, text: "Naane Indhiran... through time and space," },
            { time: 48, text: "This melody sets a rapid pace," },
            { time: 54, text: "GV Prakash wins the futuristic race!" }
        ]
    },
    {
        id: 74,
        title: "Open The Tasmac",
        artist: "Deva, Anirudh Ravichander",
        album: "Maan Karate (2014)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416265/Open-The-Tasmac_mymnen.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🍺 [Street Party Intro] 🍺" },
            { time: 5, text: "Open The Tasmac... Maan Karate party hit!" },
            { time: 11, text: "Anirudh's fun infectious rhythm kicking in," },
            { time: 17, text: "Red hot Swaram glow, let the party begin!" },
            { time: 23, text: "Chennai street celebration mode on," },
            { time: 29, text: "Deva's classic track, the party goes on!" },
            { time: 35, text: "🎉 [Chennai Party Drop] 🎉" },
            { time: 41, text: "Open The Tasmac... let's celebrate!" },
            { time: 48, text: "This party anthem is simply great," },
            { time: 54, text: "The night is young, let's not wait!" }
        ]
    },
    {
        id: 75,
        title: "Oorum Blood",
        artist: "Anirudh Ravichander",
        album: "Leo (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416265/Oorum-Blood-MassTamilan.dev_zvwxiv.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🦁 [Leo Mass Action Intro] 🦁" },
            { time: 5, text: "Oorum Blood... Leo's beast mode anthem!" },
            { time: 11, text: "Anirudh Ravichander's massive bass punch," },
            { time: 17, text: "Orange Swaram fire, right on crunch!" },
            { time: 23, text: "Thalapathy Vijay's Leo energy rising," },
            { time: 29, text: "This mass track is truly surprising!" },
            { time: 35, text: "🔥 [Leo Beast Mode Drop] 🔥" },
            { time: 41, text: "Oorum Blood... the beast is unleashed!" },
            { time: 48, text: "The crowd goes wild, the tension is eased," },
            { time: 54, text: "Leo's anthem has fully pleased!" }
        ]
    },
    {
        id: 76,
        title: "Maya Maya",
        artist: "A. R. Rahman, Karthik, Sujatha",
        album: "Baba (2002)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416252/Maya-Maya_ansfzx.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "✨ [A. R. Rahman Mystical Intro] ✨" },
            { time: 5, text: "Maya Maya... Rajinikanth's Baba spiritual track!" },
            { time: 11, text: "A. R. Rahman's divine composition flows," },
            { time: 17, text: "Gold Swaram glow, mystical light glows!" },
            { time: 23, text: "Karthik and Sujatha in perfect harmony," },
            { time: 29, text: "Rahman's magic is pure ceremony!" },
            { time: 35, text: "🎵 [Baba Spiritual Drop] 🎵" },
            { time: 41, text: "Maya Maya... illusion of the soul," },
            { time: 48, text: "Rahman makes this music whole," },
            { time: 54, text: "Baba's magic takes total control!" }
        ]
    },
    {
        id: 77,
        title: "OG Sambavam",
        artist: "Anirudh Ravichander",
        album: "Darbar (2020)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416244/Og_Sambavam_j36nsr.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "⚡ [Darbar Mass Intro Beat] ⚡" },
            { time: 5, text: "OG Sambavam... Darbar Rajinikanth power!" },
            { time: 11, text: "Anirudh's high voltage beats taking over," },
            { time: 17, text: "Green neon Swaram glow, rolling over!" },
            { time: 23, text: "Rajinikanth's mass swagger is the OG," },
            { time: 29, text: "Darbar's anthem flowing so free!" },
            { time: 35, text: "🔥 [Darbar Action Drop] 🔥" },
            { time: 41, text: "OG Sambavam... the original is here!" },
            { time: 48, text: "Rajini makes the crowd cheer," },
            { time: 54, text: "Darbar's anthem brings us near!" }
        ]
    },
    {
        id: 78,
        title: "Nenjam Oru Murai",
        artist: "Srinivas, Sujatha",
        album: "Vaseegara (2003)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416244/Nenjam-Oru-Murai_hg2wwi.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "💙 [Vaseegara Romantic Intro] 💙" },
            { time: 5, text: "Nenjam Oru Murai... Vaseegara's soulful gem!" },
            { time: 11, text: "Srinivas and Sujatha's classic vocal blend," },
            { time: 17, text: "Sky blue Swaram glow, a love without end!" },
            { time: 23, text: "Vijay's romantic era at its finest," },
            { time: 29, text: "This melody ranks among the shiniest!" },
            { time: 35, text: "🎶 [Vaseegara Love Chorus] 🎶" },
            { time: 41, text: "Nenjam Oru Murai... my heart speaks," },
            { time: 48, text: "Romance is all that my heart seeks," },
            { time: 54, text: "This beautiful melody never weakens!" }
        ]
    },
    {
        id: 79,
        title: "Onnapola Oruthura",
        artist: "Santhosh Narayanan",
        album: "Vetrivel (2016)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416242/Onnapola_-_MassTamilan.com_gxbljj.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🌟 [Vetrivel Folk Intro] 🌟" },
            { time: 5, text: "Onnapola Oruthura... Vetrivel folk classic!" },
            { time: 11, text: "Santhosh Narayanan's rural folk magic," },
            { time: 17, text: "Gold Swaram glow, never tragic!" },
            { time: 23, text: "Local village beats thumping through," },
            { time: 29, text: "Vetrivel's earthy folk rhythm brand new!" },
            { time: 35, text: "🥁 [Vetrivel Folk Drop] 🥁" },
            { time: 41, text: "Onnapola... there's no one like this!" },
            { time: 48, text: "Santhosh's music is pure bliss," },
            { time: 54, text: "Not a single beat we'd miss!" }
        ]
    },
    {
        id: 80,
        title: "O Maara",
        artist: "GV Prakash Kumar",
        album: "Soorarai Pottru (2020)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416231/O_Maara_qxomqe.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "💜 [Soorarai Pottru Motivational Intro] 💜" },
            { time: 5, text: "O Maara... Soorarai Pottru's inspiring anthem!" },
            { time: 11, text: "GV Prakash Kumar's soulful composition," },
            { time: 17, text: "Purple Swaram glow, a winner's position!" },
            { time: 23, text: "Suriya's determination reflected in every note," },
            { time: 29, text: "This motivational anthem lifts the boat!" },
            { time: 35, text: "🦋 [Soorarai Pottru Soaring Chorus] 🦋" },
            { time: 41, text: "O Maara... soar above the clouds!" },
            { time: 48, text: "Rise above the noisy crowds," },
            { time: 54, text: "Suriya's spirit speaks aloud!" }
        ]
    },
    {
        id: 81,
        title: "Namma Kacheri Than",
        artist: "Deva, Folk",
        album: "Local Folk Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416221/Namma-Kacheri-Than-song_ytiisv.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🎵 [Village Court Celebration Intro] 🎵" },
            { time: 5, text: "Namma Kacheri Than... local pride anthem!" },
            { time: 11, text: "Deva's folk-infused local celebration," },
            { time: 17, text: "Gold Swaram glow, proud tradition!" },
            { time: 23, text: "Village drums beating all around," },
            { time: 29, text: "Community spirit from the ground!" },
            { time: 35, text: "🥁 [Village Folk Drop] 🥁" },
            { time: 41, text: "Namma Kacheri Than... our community!" },
            { time: 48, text: "Together in perfect unity," },
            { time: 54, text: "This folk beat is our immunity!" }
        ]
    },
    {
        id: 82,
        title: "Neeum Naanum Vera Illada",
        artist: "Anirudh Ravichander, Neeti Mohan",
        album: "Naanum Rowdy Dhaan (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416221/Neeum_Naanum_vera_illada...._hoigpo.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "💙 [Naanum Rowdy Dhaan Love Intro] 💙" },
            { time: 5, text: "Neeum Naanum Vera Illada... Tamil romance!" },
            { time: 11, text: "Anirudh and Neeti Mohan's beautiful duet," },
            { time: 17, text: "Sky blue Swaram glow, two hearts met!" },
            { time: 23, text: "Vijay Sethupathi's charming love story," },
            { time: 29, text: "This melody is pure romantic glory!" },
            { time: 35, text: "🎶 [Naanum Rowdy Love Chorus] 🎶" },
            { time: 41, text: "Vera Illada... you and I are one," },
            { time: 48, text: "Our love story has just begun," },
            { time: 54, text: "Together under the shining sun!" }
        ]
    },
    {
        id: 83,
        title: "Nanjamma Song (Tapori Mix)",
        artist: "DJ Anu SKS",
        album: "Tapori Mix Sessions",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416219/NANJAMMA_SONG_TAPORI_MIX_l_DANCE_COVER_l_DJ_ANU_SKS_l_TWIRLING_TOES_zsufhu.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Tapori Mix DJ Drop Intro] 🔥" },
            { time: 5, text: "Nanjamma Tapori Mix... DJ Anu SKS in the house!" },
            { time: 11, text: "Twirling Toes dance cover, feeling the bass," },
            { time: 17, text: "Red hot Swaram glow setting the pace!" },
            { time: 23, text: "Tapori beats punching through the night," },
            { time: 29, text: "DJ remix turning everything bright!" },
            { time: 35, text: "⚡ [Tapori Remix Drop] ⚡" },
            { time: 41, text: "Nanjamma... the dance floor calls!" },
            { time: 48, text: "Tapori remix breaks down the walls," },
            { time: 54, text: "DJ Anu SKS rules the halls!" }
        ]
    },
    {
        id: 84,
        title: "Naan Siricha",
        artist: "Hiphop Tamizha",
        album: "Naan Sirithal (2020)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416217/Naan-Siricha-MassTamilan.io_eeqbgl.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "😄 [Hiphop Tamizha Fun Intro] 😄" },
            { time: 5, text: "Naan Siricha... Hiphop Tamizha's catchy hit!" },
            { time: 11, text: "Naan Sirithal's fun and quirky beat," },
            { time: 17, text: "Orange Swaram glow, the mood's complete!" },
            { time: 23, text: "Sivakarthikeyan's romantic comedy flair," },
            { time: 29, text: "Fun melodies drifting through the air!" },
            { time: 35, text: "🎵 [Fun Comedy Drop] 🎵" },
            { time: 41, text: "Naan Siricha... laugh and dance!" },
            { time: 48, text: "Every moment is a sweet romance," },
            { time: 54, text: "Take a bow and take a chance!" }
        ]
    },
    {
        id: 85,
        title: "Natpu",
        artist: "Hiphop Tamizha",
        album: "Natpe Thunai (2019)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416213/Natpu-MassTamilan.so_zliuzn.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🤝 [Friendship Beat Intro] 🤝" },
            { time: 5, text: "Natpu... Natpe Thunai friendship anthem!" },
            { time: 11, text: "Hiphop Tamizha's friendship celebration," },
            { time: 17, text: "Green neon Swaram glow, pure elation!" },
            { time: 23, text: "Bonds of friendship ringing through," },
            { time: 29, text: "Together forever, me and you!" },
            { time: 35, text: "🎉 [Natpe Thunai Celebration Drop] 🎉" },
            { time: 41, text: "Natpu... friendship never ends!" },
            { time: 48, text: "On every corner it descends," },
            { time: 54, text: "This bond eternally extends!" }
        ]
    },
    {
        id: 86,
        title: "Naga Naga",
        artist: "Anirudh Ravichander",
        album: "Thimmarusu (2021)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416205/Naga-Naga-MassTamilan.com_g61v6t.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🐍 [Thimmarusu Mystery Intro] 🐍" },
            { time: 5, text: "Naga Naga... Thimmarusu's mysterious hit!" },
            { time: 11, text: "Anirudh Ravichander's slick composition," },
            { time: 17, text: "Sky blue Swaram glow, perfect position!" },
            { time: 23, text: "Suspended beats creating deep tension," },
            { time: 29, text: "This track defies all convention!" },
            { time: 35, text: "⚡ [Mystery Drop Chorus] ⚡" },
            { time: 41, text: "Naga Naga... the serpent sways," },
            { time: 48, text: "Mystery melody fills your gaze," },
            { time: 54, text: "This track through the night always plays!" }
        ]
    },
    {
        id: 87,
        title: "Lojakku Mojakku",
        artist: "D. Imman",
        album: "Seemaraja (2018)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416205/Lojakku-Mojakku-MassTamilan.fm_oar1gi.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🌟 [D. Imman Folk Comedy Intro] 🌟" },
            { time: 5, text: "Lojakku Mojakku... Seemaraja's fun hit!" },
            { time: 11, text: "D. Imman's playful folk orchestration," },
            { time: 17, text: "Gold Swaram glow, joyful celebration!" },
            { time: 23, text: "Sivakarthikeyan's comedic energy shines," },
            { time: 29, text: "This catchy tune perfectly aligns!" },
            { time: 35, text: "🥁 [Seemaraja Comedy Drop] 🥁" },
            { time: 41, text: "Lojakku Mojakku... laugh out loud!" },
            { time: 48, text: "The beat is dancing in the crowd," },
            { time: 54, text: "Sivakarthikeyan makes us all proud!" }
        ]
    },
    {
        id: 88,
        title: "Naattu Koothu",
        artist: "M. M. Keeravani, Rahul Sipligunj, Kaala Bhairava",
        album: "RRR (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416203/Naattu-Koothu-MassTamilan.so_ptvzto.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🥁 [RRR Naatu Naatu Mass Intro] 🥁" },
            { time: 5, text: "Naattu Koothu... RRR's global Oscar hit!" },
            { time: 11, text: "MM Keeravani's rhythmically divine beat," },
            { time: 17, text: "Green Swaram glow, bouncing to the heat!" },
            { time: 23, text: "Ram Charan & Jr NTR's iconic dance," },
            { time: 29, text: "This global anthem has taken a stance!" },
            { time: 35, text: "⚡ [Naatu Naatu World Drop] ⚡" },
            { time: 41, text: "Naattu Koothu... dance the world!" },
            { time: 48, text: "The Oscar-winning flag unfurled," },
            { time: 54, text: "RRR's anthem rules the world!" }
        ]
    },
    {
        id: 89,
        title: "Naan Romba Romba",
        artist: "Gana Bala",
        album: "Chennai Gana Beats",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416188/Naan-Romba-Roba_taekxs.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🎵 [Chennai Gana Street Intro] 🎵" },
            { time: 5, text: "Naan Romba Romba... pure local Gana power!" },
            { time: 11, text: "Gana Bala's raw street energy hits hard," },
            { time: 17, text: "Red hot Swaram glow in the yard!" },
            { time: 23, text: "Chennai street beats thumping ground," },
            { time: 29, text: "Raw gana vibes spinning all around!" },
            { time: 35, text: "🔥 [Gana Street Drop] 🔥" },
            { time: 41, text: "Naan Romba Romba... feel the vibe!" },
            { time: 48, text: "Chennai local beats subscribe," },
            { time: 54, text: "This gana track you can't describe!" }
        ]
    },
    {
        id: 90,
        title: "Naanga Vera Maari",
        artist: "Yuvan Shankar Raja, Anurag Kulkarni",
        album: "Valimai (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416185/Naanga-Vera-Maari-MassTamilan.fm_zxtebj.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🔥 [Valimai Mass Action Intro] 🔥" },
            { time: 5, text: "Naanga Vera Maari... Valimai Ajith anthem!" },
            { time: 11, text: "Yuvan Shankar Raja's signature fierce beat," },
            { time: 17, text: "Orange Swaram glow, feeling the heat!" },
            { time: 23, text: "Anurag Kulkarni's powerful vocals rise," },
            { time: 29, text: "Valimai's anthem reaches the skies!" },
            { time: 35, text: "⚡ [Valimai Power Drop] ⚡" },
            { time: 41, text: "Naanga Vera Maari... we are different!" },
            { time: 48, text: "The energy is magnificent," },
            { time: 54, text: "This anthem is truly significant!" }
        ]
    },
    {
        id: 91,
        title: "Kutti Puli Koottam",
        artist: "A. R. Rahman, Hariharan, Tipu",
        album: "Thuppakki (2012)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416183/Kutti-Puli-Koottam_ag8hmv.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "🐯 [Thuppakki Army Intro] 🐯" },
            { time: 5, text: "Kutti Puli Koottam... Thuppakki hit!" },
            { time: 11, text: "A. R. Rahman's pulsating military beat," },
            { time: 17, text: "Purple Swaram glow, rising to the feat!" },
            { time: 23, text: "Hariharan and Tipu's iconic Tamil vocals," },
            { time: 29, text: "Vijay's Thuppakki army protocols!" },
            { time: 35, text: "💥 [Thuppakki Military Drop] 💥" },
            { time: 41, text: "Kutti Puli Koottam... army marches on!" },
            { time: 48, text: "The beat is blazing like the dawn," },
            { time: 54, text: "A. R. Rahman's triumph carries on!" }
        ]
    },
    {
        id: 92,
        title: "Naan Adicha Thaanga",
        artist: "Vijay, Naveen (Music: Mani Sharma)",
        album: "Sura (2010)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416182/Naan-Adicha-Thaanga_o1vvsr.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🔥 [Sura Mass Punch Intro] 🔥" },
            { time: 5, text: "Naan Adicha Thaanga... Sura mass track!" },
            { time: 11, text: "Mani Sharma's intense composition pumping," },
            { time: 17, text: "Red Swaram glow, adrenaline jumping!" },
            { time: 23, text: "Vijay's powerful action energy flows," },
            { time: 29, text: "Sura's beat in every heartbeat glows!" },
            { time: 35, text: "💪 [Sura Power Drop] 💪" },
            { time: 41, text: "Naan Adicha Thaanga... unstoppable!" },
            { time: 48, text: "This anthem is absolutely notable," },
            { time: 54, text: "The energy is simply quotable!" }
        ]
    },
    {
        id: 93,
        title: "Muthada Chammak Challo",
        artist: "Akon, Hamsika Iyer",
        album: "Ra.One (2011)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416176/Muthada_Chammak_Challo_pg9n91.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182", // Purple
        lyrics: [
            { time: 0, text: "💜 [Bollywood x Tamil Crossover Intro] 💜" },
            { time: 5, text: "Muthada Chammak Challo... Ra.One dance hit!" },
            { time: 11, text: "Akon and Hamsika Iyer's global fusion," },
            { time: 17, text: "Purple Swaram glow, beautiful illusion!" },
            { time: 23, text: "Shah Rukh Khan's superhero dance beat," },
            { time: 29, text: "This crossover anthem is a treat!" },
            { time: 35, text: "⚡ [Ra.One Club Drop] ⚡" },
            { time: 41, text: "Chammak Challo... the crowd ignites!" },
            { time: 48, text: "Akon's global energy delights," },
            { time: 54, text: "Ra.One rules many dance nights!" }
        ]
    },
    {
        id: 94,
        title: "Masss Theme",
        artist: "Yuvan Shankar Raja",
        album: "Masss (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416170/Masss-Theme_eonuo4.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "👻 [Masss Supernatural BGM Intro] 👻" },
            { time: 5, text: "Masss Theme... Yuvan Shankar Raja magic!" },
            { time: 11, text: "Supernatural orchestral BGM swells," },
            { time: 17, text: "Orange Swaram glow, as the story tells!" },
            { time: 23, text: "Suriya's ghostly Masss energy rising," },
            { time: 29, text: "This orchestral theme is mesmerising!" },
            { time: 35, text: "🎵 [Masss Cinematic Drop] 🎵" },
            { time: 41, text: "Masss Theme... haunting melody!" },
            { time: 48, text: "Yuvan's music flowing free," },
            { time: 54, text: "Supernatural vibes endlessly!" }
        ]
    },
    {
        id: 95,
        title: "Kudikaran Petha Magaley",
        artist: "Michael Man Dance Company",
        album: "Tamil Independent Music",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416168/kudikaran_petha_magaley_tamil_album_song_michael_man_dance_company_mmdc1_oiywuo.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🎵 [Independent Tamil Album Intro] 🎵" },
            { time: 5, text: "Kudikaran Petha Magaley... local Tamil pride!" },
            { time: 11, text: "Michael Man Dance Company bringing fire," },
            { time: 17, text: "Red Swaram glow, taking it higher!" },
            { time: 23, text: "Local music echoing through the street," },
            { time: 29, text: "Independent Tamil sound on the beat!" },
            { time: 35, text: "🔥 [Local Music Drop] 🔥" },
            { time: 41, text: "Kudikaran Petha Magaley... dance along!" },
            { time: 48, text: "This local anthem is forever strong," },
            { time: 54, text: "We sing the pride all night long!" }
        ]
    },
    {
        id: 96,
        title: "Malaiyur Mambattiyan",
        artist: "Thaman S",
        album: "Mambattiyan (2011)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416167/Malaiyur-MassTamilan.com_zsmkuh.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🌟 [Mambattiyan Folk Intro] 🌟" },
            { time: 5, text: "Malaiyur Mambattiyan... Thaman S folk hit!" },
            { time: 11, text: "Village folk beats thumping with pride," },
            { time: 17, text: "Gold Swaram glow on this golden ride!" },
            { time: 23, text: "Thaman S's energetic composition flows," },
            { time: 29, text: "This village anthem beautifully glows!" },
            { time: 35, text: "🥁 [Mambattiyan Folk Drop] 🥁" },
            { time: 41, text: "Malaiyur Mambattiyan... village pride!" },
            { time: 48, text: "The folk beat swells deep inside," },
            { time: 54, text: "Thaman's music is our village guide!" }
        ]
    },
    {
        id: 97,
        title: "Madras To Madurai",
        artist: "D. Imman",
        album: "Aambala (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416167/Madras-To-Madurai_me2bxr.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "🚂 [Aambala Road Trip Intro] 🚂" },
            { time: 5, text: "Madras To Madurai... Aambala road anthem!" },
            { time: 11, text: "D. Imman's energetic travel beat kicks in," },
            { time: 17, text: "Green neon Swaram glow, the journey begins!" },
            { time: 23, text: "Vishal's road trip energy racing ahead," },
            { time: 29, text: "Aambala's beat fills you with dread!" },
            { time: 35, text: "🎵 [Aambala Travel Drop] 🎵" },
            { time: 41, text: "Madras To Madurai... miles of beat!" },
            { time: 48, text: "The road rolls beneath our feet," },
            { time: 54, text: "D. Imman makes this journey sweet!" }
        ]
    },
    {
        id: 98,
        title: "Lucka Mattikkichi",
        artist: "Harris Jayaraj, Anirudh Ravichander",
        album: "Gethu (2016)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416160/Lucka-Mattikkichi_i8izw7.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219", // Sky Blue
        lyrics: [
            { time: 0, text: "🎲 [Gethu Lucky Beat Intro] 🎲" },
            { time: 5, text: "Lucka Mattikkichi... Gethu's catchy hit!" },
            { time: 11, text: "Harris Jayaraj and Anirudh combo magic," },
            { time: 17, text: "Sky blue Swaram glow, nothing tragic!" },
            { time: 23, text: "Udhayanidhi Stalin's gethu energy," },
            { time: 29, text: "This catchy track flows so freely!" },
            { time: 35, text: "⚡ [Gethu Lucky Drop] ⚡" },
            { time: 41, text: "Lucka Mattikkichi... luck is on our side!" },
            { time: 48, text: "The beat becomes our guide," },
            { time: 54, text: "On this sky blue musical ride!" }
        ]
    },
    {
        id: 99,
        title: "Kuruvi Theme Music",
        artist: "Vidyasagar",
        album: "Kuruvi (2008)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416159/Kuruvi---Theme-Music-MassTamilan.fm_lhi6nj.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34", // Orange
        lyrics: [
            { time: 0, text: "🎵 [Kuruvi Cinematic Theme Intro] 🎵" },
            { time: 5, text: "Kuruvi Theme... Vidyasagar orchestral magic!" },
            { time: 11, text: "Vijay's Kuruvi cinematic theme rising," },
            { time: 17, text: "Orange Swaram glow, mesmerising!" },
            { time: 23, text: "The melody builds in rising layers," },
            { time: 29, text: "Kuruvi's theme answers all prayers!" },
            { time: 35, text: "🎶 [Kuruvi Theme Orchestral Drop] 🎶" },
            { time: 41, text: "Kuruvi Theme... soaring melodies call," },
            { time: 48, text: "Vidyasagar standing ten feet tall," },
            { time: 54, text: "This theme captures one and all!" }
        ]
    },
    {
        id: 100,
        title: "Kuthu Vilakku",
        artist: "Srikanth Deva, Hariharan",
        album: "Pithamagan (2003)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416153/Kuthu-Vilakku_suchwl.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15", // Gold
        lyrics: [
            { time: 0, text: "🪔 [Pithamagan Festive Intro] 🪔" },
            { time: 5, text: "Kuthu Vilakku... Pithamagan celebration!" },
            { time: 11, text: "Hariharan's classical voice illuminating," },
            { time: 17, text: "Gold Swaram glow, the festival glowing!" },
            { time: 23, text: "Srikanth Deva's kuthu energy burning," },
            { time: 29, text: "The ancient dance beats always returning!" },
            { time: 35, text: "🎉 [Festive Kuthu Drop] 🎉" },
            { time: 41, text: "Kuthu Vilakku... light the lamp!" },
            { time: 48, text: "The celebration gets a stamp," },
            { time: 54, text: "This kuthu classic is the camp!" }
        ]
    },
    {
        id: 101,
        title: "Karuppu Vellai",
        artist: "Sam C. S., Shivam",
        album: "Vikram Vedha (2017)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416149/Karuppu-Vellai-MassTamilan.com_e3cdwq.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🖤🤍 [Vikram Vedha Duality Intro] 🖤🤍" },
            { time: 5, text: "Karuppu Vellai... Vikram Vedha contrast!" },
            { time: 11, text: "Sam C.S.'s intense dual composition," },
            { time: 17, text: "Red Swaram glow, the dark position!" },
            { time: 23, text: "Black and white morality in the beat," },
            { time: 29, text: "Vikram Vedha's duality is a feat!" },
            { time: 35, text: "💥 [Vikram Vedha Drop] 💥" },
            { time: 41, text: "Karuppu Vellai... two sides of truth!" },
            { time: 48, text: "The beat reveals the proof," },
            { time: 54, text: "Sam C.S. brings the aloof!" }
        ]
    },
    {
        id: 102,
        title: "Kudikaran Petha Magale (Remix)",
        artist: "DJ Avee, MR",
        album: "Tamil Dance Remixes",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416149/Kudikaran_petha_magale_Remix_Avee_by_MR_y0h346.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75", // Red-Orange
        lyrics: [
            { time: 0, text: "🎛️ [DJ Avee Remix Intro] 🎛️" },
            { time: 5, text: "Kudikaran Petha Magale Remix... DJ Avee drops!" },
            { time: 11, text: "MR's remix bass shaking the floor," },
            { time: 17, text: "Red hot Swaram glow, wanting more!" },
            { time: 23, text: "Tamil folk song through a EDM lens," },
            { time: 29, text: "The remix energy never relents!" },
            { time: 35, text: "⚡ [Remix Bass Drop] ⚡" },
            { time: 41, text: "Remix spinning, the beat flows fast," },
            { time: 48, text: "This remix was built to last," },
            { time: 54, text: "DJ Avee made it a blast!" }
        ]
    },
    {
        id: 103,
        title: "Kurchi Madathapetti",
        artist: "Thaman S, Sri Krishna, Sahithi Chaganti",
        album: "Guntur Kaaram (2024)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416149/Kurchi_Madathapetti_dton7r.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113", // Neon Green
        lyrics: [
            { time: 0, text: "💚 [Guntur Kaaram Folk Dance Intro] 💚" },
            { time: 5, text: "Kurchi Madathapetti... Guntur Kaaram viral hit!" },
            { time: 11, text: "Thaman S's energetic folk composition," },
            { time: 17, text: "Green neon Swaram glow, top position!" },
            { time: 23, text: "Sri Krishna and Sahithi Chaganti blazing," },
            { time: 29, text: "This folk dance anthem is amazing!" },
            { time: 35, text: "🥁 [Kurchi Madathapetti Drop] 🥁" },
            { time: 41, text: "Kurchi Madathapetti... dance and swing!" },
            { time: 48, text: "Let the folk celebration ring," },
            { time: 54, text: "This viral anthem is everything!" }
        ]
    },
    {
        id: 104,
        title: "Kitta Neringivaadi",
        artist: "Tamil Kuthu Group",
        album: "Tamil Mass Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416148/Kitta-Neringivaadi_ju1aof.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "🎵 [Kuthu Beat Intro] 🎵" },
            { time: 5, text: "Kitta Neringivaadi... mass energy!" },
            { time: 12, text: "Feel the rhythm thumping loud!" },
            { time: 18, text: "Dance to the beat, don't stop now!" }
        ]
    },
    {
        id: 105,
        title: "Kuchi Mittai",
        artist: "Tamil Pop Group",
        album: "Tamil Sweet Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416143/Kuchi-Mittai_dr5p1b.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🍭 [Sweet Melody Intro] 🍭" },
            { time: 5, text: "Kuchi Mittai... sweet Tamil folk!" },
            { time: 12, text: "Golden vibes and catchy rhythm!" },
            { time: 18, text: "Dance your heart out!" }
        ]
    },
    {
        id: 106,
        title: "Jalabulajangu",
        artist: "Mass Tamilan",
        album: "Mass Tamil Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416140/Jalabulajangu-MassTamilan.so_b4dzcc.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Mass Beat Intro] 🔥" },
            { time: 5, text: "Jalabulajangu... pure energy!" },
            { time: 12, text: "Street beats pumping hard!" },
            { time: 18, text: "Jump to the rhythm!" }
        ]
    },
    {
        id: 107,
        title: "Kattu Kattu",
        artist: "Tamil Folk Group",
        album: "Tamil Folk Vibes",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416139/Kattu-Kattu_tgjutz.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34",
        lyrics: [
            { time: 0, text: "🎵 [Folk Intro] 🎵" },
            { time: 5, text: "Kattu Kattu... forest folk beat!" },
            { time: 12, text: "Wild tribal energy rising!" },
            { time: 18, text: "Bounce to the beat!" }
        ]
    },
    {
        id: 108,
        title: "Kotha Raja",
        artist: "Mass Tamilan",
        album: "New Tamil Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416139/Kotha-Raja-MassTamilan.dev_fyhfxq.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "👑 [Raja Theme Intro] 👑" },
            { time: 5, text: "Kotha Raja... new king arrives!" },
            { time: 12, text: "Mass energy at its peak!" },
            { time: 18, text: "Feel the royal vibe!" }
        ]
    },
    {
        id: 109,
        title: "KGF Movie All Dialogue",
        artist: "Yash, KGF Cast",
        album: "KGF Tamil Dialogues",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416133/KGF_Movie_All_Dialogue_In_Tamil__Yash__Kgf__Latern_Studios_256kbps_knvjzk.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "💥 [KGF Epic Dialogue] 💥" },
            { time: 5, text: "KGF... the name is Rocky Bhai!" },
            { time: 12, text: "Power. Strength. Dominance." },
            { time: 18, text: "This world will bow before me!" }
        ]
    },
    {
        id: 110,
        title: "Karuthavanlaam Galeejaam",
        artist: "Tamil Movie Cast",
        album: "Tamil Mass Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416133/Karuthavanlaam_Galeejaam_-_MassTamilan.com_a8gk4v.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Mass Street Intro] 🔥" },
            { time: 5, text: "Karuthavanlaam Galeejaam... fierce energy!" },
            { time: 12, text: "Street beats hit the crowd hard!" },
            { time: 18, text: "Chennai fire burning bright!" }
        ]
    },
    {
        id: 111,
        title: "KGF Dheera Dheera",
        artist: "Ravi Basrur, KGF Cast",
        album: "KGF Tamil (2018)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416131/KGF_Dheera_Dheera_Full_Video_Song___KGF_Tamil_Movie__Yash___Prasanth_Neel_K_G_F_Songs_256k_jlw4ns.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🦅 [KGF Majestic Intro] 🦅" },
            { time: 5, text: "Dheera Dheera... the brave one rises!" },
            { time: 12, text: "Ravi Basrur's powerful orchestration!" },
            { time: 18, text: "Rocky Bhai rules the mines!" }
        ]
    },
    {
        id: 112,
        title: "Kattabomman Oorenakku",
        artist: "Tamil Folk Group",
        album: "Tamil Heritage Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416128/Kattabomman_Oorenakku_-_MassTamilan.com_v9zhq9.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "⚔️ [Heritage Folk Intro] ⚔️" },
            { time: 5, text: "Kattabomman Oorenakku... Tamil pride!" },
            { time: 12, text: "The warrior king's anthem rises!" },
            { time: 18, text: "Gold theme, timeless glory!" }
        ]
    },
    {
        id: 113,
        title: "Kaalam Yen Kadhali",
        artist: "Tamil Melody",
        album: "Tamil Love Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416122/Kaalam_Yen_Kadhali_qbawy2.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "💙 [Soft Melody Intro] 💙" },
            { time: 5, text: "Kaalam Yen Kadhali... time is my love!" },
            { time: 12, text: "Romantic melody drifting through the air!" },
            { time: 18, text: "Sky blue vibes of sweet romance!" }
        ]
    },
    {
        id: 114,
        title: "Karuppa Kooda Va",
        artist: "Mass Tamilan",
        album: "Tamil Mass Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416121/Karuppa-Kooda-Va-MassTamilan.dev_fymlwe.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Street Mass Intro] 🔥" },
            { time: 5, text: "Karuppa Kooda Va... come along!" },
            { time: 12, text: "Local street beat thumping!" },
            { time: 18, text: "Raw energy and pride!" }
        ]
    },
    {
        id: 115,
        title: "Kannukulla Reprise",
        artist: "Tamil Melody Group",
        album: "Tamil Reprise Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416120/Kannukulla_Reprise_b9ls8y.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "🎵 [Soft Reprise Intro] 🎵" },
            { time: 5, text: "Kannukulla... you fill my eyes!" },
            { time: 12, text: "Sweet reprise melody floating!" },
            { time: 18, text: "Romantic vibes all around!" }
        ]
    },
    {
        id: 116,
        title: "Fear Song",
        artist: "Tamil Movie Cast",
        album: "Tamil Mass Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416119/Fear_Song_tsuglx.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "😱 [Intense Fear Intro] 😱" },
            { time: 5, text: "Fear Song... intensity rising!" },
            { time: 12, text: "Dark energy building up!" },
            { time: 18, text: "The beat sends chills!" }
        ]
    },
    {
        id: 117,
        title: "Kana Kangiren",
        artist: "Tamil Melody",
        album: "Tamil Classic Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416116/Kana-Kangiren_rvyx5p.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "💙 [Romantic Melody Intro] 💙" },
            { time: 5, text: "Kana Kangiren... I see you in dreams!" },
            { time: 12, text: "Timeless Tamil romance melody!" },
            { time: 18, text: "Sky blue dream floating free!" }
        ]
    },
    {
        id: 118,
        title: "Kalasala Kalasala",
        artist: "Tamil Melody Group",
        album: "Tamil Hit Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416114/Kalasala-Kalasala_e6mis3.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "💜 [Melodic Intro] 💜" },
            { time: 5, text: "Kalasala Kalasala... school of love!" },
            { time: 12, text: "Purple waves of sweet melody!" },
            { time: 18, text: "Tamil romance at its best!" }
        ]
    },
    {
        id: 119,
        title: "Kadhal Vaibogame",
        artist: "Tamil Melody",
        album: "Tamil Love Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416109/Kadhal_Vaibogame_qddruc.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "💙 [Romantic Sky Blue Intro] 💙" },
            { time: 5, text: "Kadhal Vaibogame... glory of love!" },
            { time: 12, text: "Sweet melody drifting through heart!" },
            { time: 18, text: "Tamil romance shining bright!" }
        ]
    },
    {
        id: 120,
        title: "Kadharalz",
        artist: "Tamil Pop",
        album: "Tamil Pop Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416107/Kadharalz_lmzvee.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "💜 [Tamil Pop Intro] 💜" },
            { time: 5, text: "Kadharalz... love story vibes!" },
            { time: 12, text: "Purple pop melody resonating!" },
            { time: 18, text: "Sweet love in every note!" }
        ]
    },
    {
        id: 121,
        title: "Kaara Karuuna",
        artist: "Tamil Folk",
        album: "Tamil Folk Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416101/Kaara-Karuuna_cllbaf.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🌟 [Folk Gold Intro] 🌟" },
            { time: 5, text: "Kaara Karuuna... compassion folk!" },
            { time: 12, text: "Golden folk vibes shining!" },
            { time: 18, text: "Village rhythm all around!" }
        ]
    },
    {
        id: 122,
        title: "Kacheri Kacheri",
        artist: "Tamil Folk",
        album: "Tamil Celebration Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416100/Kacheri_Kacheri_-_MassTamilan.com_kegfic.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🎉 [Court Celebration Intro] 🎉" },
            { time: 5, text: "Kacheri Kacheri... court beats rising!" },
            { time: 12, text: "Village celebration energy!" },
            { time: 18, text: "Folk drums thumping hard!" }
        ]
    },
    {
        id: 123,
        title: "Jigiru Jigiru",
        artist: "Tamil Pop",
        album: "Tamil Dance Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416097/Jigiru-Jigiru_c4ipp1.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "⚡ [Dance Beat Intro] ⚡" },
            { time: 5, text: "Jigiru Jigiru... dance energy!" },
            { time: 12, text: "Green neon glow, feel the beat!" },
            { time: 18, text: "Dance floor on fire!" }
        ]
    },
    {
        id: 124,
        title: "Kaal Mulaitha Poovae",
        artist: "Tamil Melody",
        album: "Tamil Classic Melodies",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416092/Kaal_Mulaitha_Poovae_-_MassTamilan.com_jwcn9g.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🌸 [Floral Melody Intro] 🌸" },
            { time: 5, text: "Kaal Mulaitha Poovae... blossoming flower!" },
            { time: 12, text: "Purple melody drifting like petals!" },
            { time: 18, text: "Beautiful Tamil classic!" }
        ]
    },
    {
        id: 125,
        title: "Jai Sulthan",
        artist: "Mass Tamilan",
        album: "Sulthan Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416086/Jai-Sulthan-MassTamilan.io_g9a93y.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "👑 [Sulthan Royal Intro] 👑" },
            { time: 5, text: "Jai Sulthan... the king marches!" },
            { time: 12, text: "Green neon mass energy!" },
            { time: 18, text: "Bow to the Sulthan!" }
        ]
    },
    {
        id: 126,
        title: "Izmir Marsi",
        artist: "International Mix",
        album: "World Music Mix",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416085/Izmir_Marsi_PaglaSongs_vc7wx4.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34",
        lyrics: [
            { time: 0, text: "🌍 [World Music Intro] 🌍" },
            { time: 5, text: "Izmir Marsi... international vibes!" },
            { time: 12, text: "Orange glow of world energy!" },
            { time: 18, text: "Dance across the globe!" }
        ]
    },
    {
        id: 127,
        title: "Jigidi Killaadi",
        artist: "Mass Tamilan",
        album: "Tamil Mass Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416084/Jigidi-Killaadi-MassTamilan.io_t9jmer.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Street Mass Intro] 🔥" },
            { time: 5, text: "Jigidi Killaadi... naughty energy!" },
            { time: 12, text: "Red hot street vibes!" },
            { time: 18, text: "Feel the mass beat!" }
        ]
    },
    {
        id: 128,
        title: "Indha Ooril Eppothum",
        artist: "Tamil Classic",
        album: "Tamil Classic Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416081/Indha_Ooril_Eppothum_-_MassTamilan.com_fc3gtm.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🌟 [Classic Tamil Intro] 🌟" },
            { time: 5, text: "Indha Ooril Eppothum... always in this town!" },
            { time: 12, text: "Golden classic melody flowing!" },
            { time: 18, text: "Timeless Tamil vibes!" }
        ]
    },
    {
        id: 129,
        title: "Innum Enna Thozha",
        artist: "Tamil Friendship",
        album: "Tamil Friendship Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416077/Innum-Enna-Thozha_czw1ys.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "🤝 [Friendship Beat Intro] 🤝" },
            { time: 5, text: "Innum Enna Thozha... what more friend!" },
            { time: 12, text: "Green neon friendship bond!" },
            { time: 18, text: "Together forever, brothers!" }
        ]
    },
    {
        id: 130,
        title: "Hara Hara Mahadevaki",
        artist: "Tamil Movie Cast",
        album: "Hara Hara Mahadevaki (2017)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416055/Hara-Hara-Mahadevaki_mdzkwi.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔔 [Devotional Mass Intro] 🔔" },
            { time: 5, text: "Hara Hara Mahadevaki... divine energy!" },
            { time: 12, text: "Red mass beat with devotion!" },
            { time: 18, text: "Dance to the divine rhythm!" }
        ]
    },
    {
        id: 131,
        title: "Inbam Pongum Vennila (Remix)",
        artist: "Tamil Remix",
        album: "Tamil Remix Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416046/Inbam-Pongum-Vennila-Remix_ns4xi4.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "🌙 [Moonlight Remix Intro] 🌙" },
            { time: 5, text: "Inbam Pongum Vennila... joy of moonlight!" },
            { time: 12, text: "Sky blue remix floating!" },
            { time: 18, text: "Feel the silver melody!" }
        ]
    },
    {
        id: 132,
        title: "Ethir Neechal",
        artist: "Tamil Movie Cast",
        album: "Ethir Neechal (2013)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416034/Ethir-Neechal_w7z5df.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "💪 [Motivational Intro] 💪" },
            { time: 5, text: "Ethir Neechal... swim against the tide!" },
            { time: 12, text: "Green energy of determination!" },
            { time: 18, text: "Never give up, push harder!" }
        ]
    },
    {
        id: 133,
        title: "God Mode",
        artist: "Mass Tamilan",
        album: "Tamil Electronic Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416034/God-Mode-MassTamilan.dev_xiiroe.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "⚡ [God Mode Activated] ⚡" },
            { time: 5, text: "God Mode... unlimited power!" },
            { time: 12, text: "Purple energy transcending!" },
            { time: 18, text: "Ascend beyond limits!" }
        ]
    },
    {
        id: 134,
        title: "Happy Birthday",
        artist: "Mass Tamilan",
        album: "Celebration Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416034/Happy-Birthday-MassTamilan.io_hxponp.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🎂 [Birthday Celebration Intro] 🎂" },
            { time: 5, text: "Happy Birthday... celebrate today!" },
            { time: 12, text: "Golden confetti and joy!" },
            { time: 18, text: "Party beats all night!" }
        ]
    },
    {
        id: 135,
        title: "Hukum Thalaivar Alappara",
        artist: "Anirudh Ravichander",
        album: "Jailer (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416034/Hukum_Thalaivar_Alappara_Jailer_128_Kbps_qqdvdy.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Jailer Mass Intro] 🔥" },
            { time: 5, text: "Hukum... Rajinikanth is the Thalaivar!" },
            { time: 12, text: "Red hot Jailer energy rises!" },
            { time: 18, text: "The boss gives his orders!" }
        ]
    },
    {
        id: 136,
        title: "Guntur Kaaram Title",
        artist: "Thaman S",
        album: "Guntur Kaaram (2024)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416021/Guntur_Kaaram_vy7b9f.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34",
        lyrics: [
            { time: 0, text: "🌶️ [Spicy Guntur Intro] 🌶️" },
            { time: 5, text: "Guntur Kaaram... fiery energy!" },
            { time: 12, text: "Thaman S's hot composition!" },
            { time: 18, text: "Orange spice beats rising!" }
        ]
    },
    {
        id: 137,
        title: "God Bless U",
        artist: "Tamil Melody",
        album: "Tamil Blessings Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416021/God_Bless_U_fbebzg.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🙏 [Blessed Melody Intro] 🙏" },
            { time: 5, text: "God Bless U... divine melody!" },
            { time: 12, text: "Purple blessing raining down!" },
            { time: 18, text: "Feel the divine energy!" }
        ]
    },
    {
        id: 138,
        title: "Ellaappugazhum",
        artist: "Tamil Classic",
        album: "Tamil Classic Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416017/Ellaappugazhum_-_MassTamilan.com_opnbsy.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🌟 [Praise Melody Intro] 🌟" },
            { time: 5, text: "Ellaappugazhum... all glory to you!" },
            { time: 12, text: "Golden melody of devotion!" },
            { time: 18, text: "Tamil classic timeless!" }
        ]
    },
    {
        id: 139,
        title: "Erangi Vandhu",
        artist: "Tamil Folk",
        album: "Tamil Folk Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416016/Erangi_Vandhu_-_MassTamilan.com_kmwsd8.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Folk Mass Intro] 🔥" },
            { time: 5, text: "Erangi Vandhu... come down and play!" },
            { time: 12, text: "Red folk energy pumping!" },
            { time: 18, text: "Street celebration begins!" }
        ]
    },
    {
        id: 140,
        title: "Dheera Dheera",
        artist: "Mass Tamilan",
        album: "Tamil Mass Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416015/Dheera-Dheera-MassTamilan.org_xjsbzx.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🦅 [Brave Intro] 🦅" },
            { time: 5, text: "Dheera Dheera... the brave one!" },
            { time: 12, text: "Courage and strength rising!" },
            { time: 18, text: "Purple power at its peak!" }
        ]
    },
    {
        id: 141,
        title: "Adadada Aarambame",
        artist: "Tamil Classic",
        album: "Tamil Classic Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416011/Adadada_Aarambame_-_MassTamilan.com_p7ctaa.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "🎵 [Classic Kuthu Intro] 🎵" },
            { time: 5, text: "Adadada Aarambame... it begins!" },
            { time: 12, text: "Green neon kuthu energy!" },
            { time: 18, text: "Dance, the party starts now!" }
        ]
    },
    {
        id: 142,
        title: "Elantha Pazham",
        artist: "Tamil Folk",
        album: "Tamil Nature Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416011/Elantha-Pazham_lgig2s.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🌿 [Nature Folk Intro] 🌿" },
            { time: 5, text: "Elantha Pazham... jujube fruit song!" },
            { time: 12, text: "Golden nature folk vibes!" },
            { time: 18, text: "Village life in melody!" }
        ]
    },
    {
        id: 143,
        title: "Etharkkum Thunindhavan",
        artist: "Mass Tamilan",
        album: "Etharkkum Thunindhavan (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416010/Etharkkum-Thunindhavan-MassTamilan.so_go5h2j.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Mass Hero Intro] 🔥" },
            { time: 5, text: "Etharkkum Thunindhavan... ready for anything!" },
            { time: 12, text: "Red mass energy blazing!" },
            { time: 18, text: "Hero never backs down!" }
        ]
    },
    {
        id: 144,
        title: "Ek Do Theen",
        artist: "Tamil Dance Mix",
        album: "Tamil Dance Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781416004/Ek_Do_Theen_-_MassTamilan.com_pi4pui.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "💃 [Dance Count Intro] 💃" },
            { time: 5, text: "Ek Do Theen... one two three dance!" },
            { time: 12, text: "Green neon dance floor lit!" },
            { time: 18, text: "Count to the beat!" }
        ]
    },
    {
        id: 145,
        title: "Deo Deo Disaka Disaka",
        artist: "Tamil Folk Mix",
        album: "Tamil Folk Dance",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415995/Deo_Deo_Disaka_Disaka......_Kuttyweb.xyz_ldci8x.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🥁 [Folk Dance Beat Intro] 🥁" },
            { time: 5, text: "Deo Deo Disaka Disaka... folk energy!" },
            { time: 12, text: "Golden folk rhythm rising!" },
            { time: 18, text: "Village dance celebration!" }
        ]
    },
    {
        id: 146,
        title: "DJ Jocky Thirupachi Aruvale Mix",
        artist: "DJ Jocky",
        album: "Tamil DJ Remixes",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415995/Dj_Jocky_Thirupachi_Aruvale_Mix_fznpkw.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🎛️ [DJ Drop Intro] 🎛️" },
            { time: 5, text: "DJ Jocky... Thirupachi remix!" },
            { time: 12, text: "Red hot DJ beats dropping!" },
            { time: 18, text: "Dance floor on fire!" }
        ]
    },
    {
        id: 147,
        title: "Dheemthanakka Thillana",
        artist: "Tamil Classical",
        album: "Tamil Classical Dance",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415990/Dheemthanakka-Thillana_xemmqh.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🩰 [Thillana Classical Intro] 🩰" },
            { time: 5, text: "Dheemthanakka Thillana... classical grace!" },
            { time: 12, text: "Purple elegance of Bharatanatyam!" },
            { time: 18, text: "Classical Tamil dance rhythm!" }
        ]
    },
    {
        id: 148,
        title: "Chill Bro",
        artist: "Mass Tamilan",
        album: "Tamil Chill Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415989/Chill-Bro-MassTamilan.io_n39tqk.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "😎 [Chill Bro Intro] 😎" },
            { time: 5, text: "Chill Bro... relax and vibe!" },
            { time: 12, text: "Sky blue cool vibes flowing!" },
            { time: 18, text: "Take it easy, enjoy the beat!" }
        ]
    },
    {
        id: 149,
        title: "Chumma Kizhi",
        artist: "Mass Tamilan",
        album: "Tamil Fun Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415987/Chumma-Kizhi-MassTamilan.io_cigsmi.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "😄 [Fun Beat Intro] 😄" },
            { time: 5, text: "Chumma Kizhi... just for fun!" },
            { time: 12, text: "Green neon fun energy!" },
            { time: 18, text: "Laugh and dance along!" }
        ]
    },
    {
        id: 150,
        title: "Chiku Chiku Boom",
        artist: "Tamil Dance",
        album: "Tamil Dance Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415984/Chiku_Chiku_Boom_-_MassTamilan.com_o5pnjy.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "💥 [Boom Beat Intro] 💥" },
            { time: 5, text: "Chiku Chiku Boom... explosive energy!" },
            { time: 12, text: "Red boom beats dropping!" },
            { time: 18, text: "BOOM, feel the impact!" }
        ]
    },
    {
        id: 151,
        title: "Chikku Bukku Chikku",
        artist: "Tamil Classic",
        album: "Tamil Classic Dance",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415982/Chikku-Bukku-Chikku-MassTamilan.com_y2zr4k.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34",
        lyrics: [
            { time: 0, text: "🚂 [Train Dance Beat Intro] 🚂" },
            { time: 5, text: "Chikku Bukku Chikku... train dance!" },
            { time: 12, text: "Orange classic energy rolling!" },
            { time: 18, text: "Tamil retro train beats!" }
        ]
    },
    {
        id: 152,
        title: "Boomi Enna Suthudhe",
        artist: "Tamil Folk",
        album: "Tamil Earth Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415978/Boomi_Enna_Suthudhe_-_MassTamilan.com_zebexj.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🌍 [Earth Folk Intro] 🌍" },
            { time: 5, text: "Boomi Enna Suthudhe... earth spins for what?" },
            { time: 12, text: "Golden folk melody floating!" },
            { time: 18, text: "Deep Tamil philosophy!" }
        ]
    },
    {
        id: 153,
        title: "Birds of Prey - Serena Safari",
        artist: "Chandrama Singh",
        album: "Birds of Prey Mix (2020)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415973/Birds_of_Prey_2020_Joker_Serena-Safari_song_-_Chandrama_Singh_official_youtube_bp7xp1.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🦜 [Cinematic Action Intro] 🦜" },
            { time: 5, text: "Birds of Prey... wild energy!" },
            { time: 12, text: "Purple cinematic beat rising!" },
            { time: 18, text: "Harley Quinn vibes!" }
        ]
    },
    {
        id: 154,
        title: "Aye Aye Aye",
        artist: "Tamil Pop",
        album: "Tamil Pop Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415971/Aye-Aye-Aye_frji0o.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "💙 [Catchy Pop Intro] 💙" },
            { time: 5, text: "Aye Aye Aye... catchy dance beat!" },
            { time: 12, text: "Sky blue pop energy floating!" },
            { time: 18, text: "Sing along to the hook!" }
        ]
    },
    {
        id: 155,
        title: "Bang Bang Bang",
        artist: "Tamil Dance",
        album: "Tamil Dance Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415969/Bang_Bang_Bang_-_MassTamilan.com_fmdb3h.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "💥 [Bang Drop Intro] 💥" },
            { time: 5, text: "Bang Bang Bang... explosive dance!" },
            { time: 12, text: "Green neon explosion!" },
            { time: 18, text: "Feel every bang in your soul!" }
        ]
    },
    {
        id: 156,
        title: "Boys Best Raju Bhai Entry",
        artist: "Suriya, Anjaan Cast",
        album: "Anjaan (2014)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415969/BOYS_BEST_RAJU_BHAI_ENTRY_2_WHATS_APP_STATUS_Anjaan_Suriya_Samantha_Vidyut_Jamwal_256k_qtv7dg.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Hero Entry Intro] 🔥" },
            { time: 5, text: "Raju Bhai Entry... Suriya mass walk!" },
            { time: 12, text: "Red hot hero energy!" },
            { time: 18, text: "Anjaan style supreme!" }
        ]
    },
    {
        id: 157,
        title: "Bigilu Bigilu Bigilu",
        artist: "Mass Tamilan",
        album: "Bigil (2019)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415967/Bigilu-Bigilu-Bigilu-MassTamilan.com_ishvvk.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "⚽ [Bigil Football Intro] ⚽" },
            { time: 5, text: "Bigilu... Vijay's Bigil anthem!" },
            { time: 12, text: "Green field energy rising!" },
            { time: 18, text: "Score the winning goal!" }
        ]
    },
    {
        id: 158,
        title: "Adi Rakkamma Rakku",
        artist: "Tamil Dance Group",
        album: "Tamil Dance Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415956/Adi-Rakkamma-Rakku_gewrze.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34",
        lyrics: [
            { time: 0, text: "💃 [Dance Kuthu Intro] 💃" },
            { time: 5, text: "Adi Rakkamma Rakku... dance energy!" },
            { time: 12, text: "Orange kuthu beats rising!" },
            { time: 18, text: "Move to the rhythm now!" }
        ]
    },
    {
        id: 159,
        title: "Arjunar Villu",
        artist: "Tamil Classic",
        album: "Tamil Classic Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415955/Arjunar-Villu_yhvivy.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🏹 [Arjuna Bow Intro] 🏹" },
            { time: 5, text: "Arjunar Villu... the archer's bow!" },
            { time: 12, text: "Purple classic melody soaring!" },
            { time: 18, text: "Aim true, hit the mark!" }
        ]
    },
    {
        id: 160,
        title: "Aayiram Jannal Veedu",
        artist: "Tamil Classic",
        album: "Tamil Classic Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415954/Aayiram_Jannal_Veedu_-_MassTamilan.com_mokwke.mp3",
        cover: "yuma_cover.png",
        accentRGB: "241, 196, 15",
        lyrics: [
            { time: 0, text: "🏠 [Nostalgic Home Intro] 🏠" },
            { time: 5, text: "Aayiram Jannal Veedu... thousand window home!" },
            { time: 12, text: "Golden nostalgic melody!" },
            { time: 18, text: "Tamil classic warmth!" }
        ]
    },
    {
        id: 161,
        title: "Attu Rowdy Song (Remix)",
        artist: "G-Town Creation, Macho Official",
        album: "Tamil Remix Collection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415953/Attu_Rowdy_Song_Remix_GTown_Creation_Macho_Official_nb6zrp.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Rowdy Remix Intro] 🔥" },
            { time: 5, text: "Attu Rowdy Remix... G-Town drops!" },
            { time: 12, text: "Red hot rowdy energy!" },
            { time: 18, text: "Street power unleashed!" }
        ]
    },
    {
        id: 162,
        title: "Adheeraa",
        artist: "Mass Tamilan",
        album: "Tamil Mass Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415952/Adheeraa-MassTamilan.so_lqb8sf.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34",
        lyrics: [
            { time: 0, text: "🔥 [Mass Power Intro] 🔥" },
            { time: 5, text: "Adheeraa... unstoppable energy!" },
            { time: 12, text: "Orange fire of mass!" },
            { time: 18, text: "Nothing can stop this beat!" }
        ]
    },
    {
        id: 163,
        title: "Alaikaa Laikaa",
        artist: "Tamil Melody",
        album: "Tamil Melody Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415944/Alaikaa-Laikaa_eu5h8v.mp3",
        cover: "yaarukkum_cover.png",
        accentRGB: "52, 152, 219",
        lyrics: [
            { time: 0, text: "💙 [Wave Melody Intro] 💙" },
            { time: 5, text: "Alaikaa Laikaa... waves of melody!" },
            { time: 12, text: "Sky blue waves crashing gently!" },
            { time: 18, text: "Feel the ocean of sound!" }
        ]
    },
    {
        id: 164,
        title: "Arasan Theme",
        artist: "Mass Tamilan",
        album: "Arasan Soundtrack",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415941/Arasan-Theme-MassTamilan.dev_fzrlll.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "👑 [Royal Theme Intro] 👑" },
            { time: 5, text: "Arasan Theme... the king's theme!" },
            { time: 12, text: "Purple royalty shining bright!" },
            { time: 18, text: "All hail the Arasan!" }
        ]
    },
    {
        id: 165,
        title: "Aaya Sher",
        artist: "Anirudh Ravichander",
        album: "NaaSongs Collection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415929/Aaya-Sher-Anirudh-Ravichander-NaaSongs_qmkr5n.mp3",
        cover: "kuthu_cover.png",
        accentRGB: "46, 204, 113",
        lyrics: [
            { time: 0, text: "🐯 [Tiger Entry Intro] 🐯" },
            { time: 5, text: "Aaya Sher... the tiger arrives!" },
            { time: 12, text: "Anirudh's roaring energy!" },
            { time: 18, text: "Green neon power surge!" }
        ]
    },
    {
        id: 166,
        title: "Adhavan Dammaku Dammaku",
        artist: "Tamil Movie Cast",
        album: "Tamil Dance Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415926/Adhavan-Dammaku-Dammaku_kus2fx.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🥁 [Drum Mass Intro] 🥁" },
            { time: 5, text: "Dammaku Dammaku... drum power!" },
            { time: 12, text: "Red hot percussion energy!" },
            { time: 18, text: "Boom boom boom beat!" }
        ]
    },
    {
        id: 167,
        title: "Aathi",
        artist: "Tamil Movie Cast",
        album: "Tamil Mass Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415925/Aathi_-_MassTamilan.com_q6muqg.mp3",
        cover: "yethi_cover.png",
        accentRGB: "230, 126, 34",
        lyrics: [
            { time: 0, text: "🔥 [Aathi Mass Intro] 🔥" },
            { time: 5, text: "Aathi... ancient power rising!" },
            { time: 12, text: "Orange classic beats!" },
            { time: 18, text: "Primal energy unleashed!" }
        ]
    },
    {
        id: 168,
        title: "Buttabomma",
        artist: "Armaan Malik, Thaman S",
        album: "Ala Vaikunthapurramuloo (2020)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415924/04_-_Buttabomma_hav2km.mp3",
        cover: "yellae_cover.png",
        accentRGB: "155, 89, 182",
        lyrics: [
            { time: 0, text: "🌸 [Sweet Love Intro] 🌸" },
            { time: 5, text: "Buttabomma... darling sweetheart!" },
            { time: 12, text: "Armaan Malik's sweet melody!" },
            { time: 18, text: "Purple love blooming!" }
        ]
    },
    {
        id: 169,
        title: "Hey Naayak",
        artist: "iSongs Tamil",
        album: "Tamil Movie Songs",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1781415906/iSongs.info_06_-_Hey_Naayak_moovoh.mp3",
        cover: "gana_cover.png",
        accentRGB: "235, 77, 75",
        lyrics: [
            { time: 0, text: "🔥 [Hero Call Intro] 🔥" },
            { time: 5, text: "Hey Naayak... the hero is called!" },
            { time: 12, text: "Red mass energy thumping!" },
            { time: 18, text: "Tamil hero vibe supreme!" }
        ]
    },
    {
        id: 170,
        title: "Maruthamalai Satthiyamaa",
        artist: "Pushpavanam Kuppusami",
        album: "Devotional Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763520/Maruthamalai-Satthiyamaa-Pushpavanam-Kuppusami_i2kkhr.mp3",
        cover: "insta logo.jpg",
        accentRGB: "241, 196, 15",
        category: "vibes",
        lyrics: [
            { time: 0, text: "🎵 [Divine Chants & Devotional Flute Intro] 🎵" },
            { time: 5, text: "Maruthamalai Satthiyamaa... Murugan's holy name!" },
            { time: 12, text: "Pushpavanam Kuppusami folk style devotion!" },
            { time: 18, text: "Pure spiritual energy thumping!" }
        ]
    },
    {
        id: 171,
        title: "Manasilayo",
        artist: "Anirudh Ravichander",
        album: "Vettaiyan (2024)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763500/Manasilayo_msajzt.mp3",
        cover: "insta logo.jpg",
        accentRGB: "235, 77, 75",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔥 [Superstar Rajinikanth Mass Opening] 🔥" },
            { time: 5, text: "Manasilayo... Anirudh's high voltage beats!" },
            { time: 11, text: "Dance to the style, feel the bass drop!" },
            { time: 16, text: "Vettaiyan anthem, maximum kuthu!" }
        ]
    },
    {
        id: 172,
        title: "Maduraikku",
        artist: "Tamil Movie Cast",
        album: "Maduraikku Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763498/Maduraikku-MassTamilan.fm_h2zghl.mp3",
        cover: "insta logo.jpg",
        accentRGB: "230, 126, 34",
        category: "mass",
        lyrics: [
            { time: 0, text: "🥁 [Madurai Street Thavil & Nadaswaram] 🥁" },
            { time: 6, text: "Maduraikku pogadhadi... energetic folk kuthu!" },
            { time: 12, text: "Festival celebration vibes in the air!" },
            { time: 18, text: "Maximum speed and traditional rhythm!" }
        ]
    },
    {
        id: 173,
        title: "Kundrathile Kumaranukku Kondattam (Remix)",
        artist: "Tamil Remix Artist",
        album: "Kuthu Remix Session",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763496/kundrathile_kumaranukku_kondattam____Remix_version____-_SOTHIKATHINGA_DAW_youtube_lxy8ar.mp3",
        cover: "insta logo.jpg",
        accentRGB: "46, 204, 113",
        category: "mass",
        lyrics: [
            { time: 0, text: "⚡ [DJ Scratch & Heavy Electronic Kuthu Bass] ⚡" },
            { time: 5, text: "Kundrathile Kumaranukku Kondattam... Remix!" },
            { time: 11, text: "Maximum bass boosted wedding dance!" },
            { time: 17, text: "Spin around and dance to the beat!" }
        ]
    },
    {
        id: 174,
        title: "Jimikki Ponnu",
        artist: "Anirudh Ravichander",
        album: "Varisu (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763495/Jimikki-Ponnu-MassTamilan.dev_buhzy2.mp3",
        cover: "insta logo.jpg",
        accentRGB: "52, 152, 219",
        category: "nice",
        lyrics: [
            { time: 0, text: "🎵 [Funky Electronic Synth & Beat Intro] 🎵" },
            { time: 5, text: "Jimikki Ponnu... Anirudh & Jonita sweet hook!" },
            { time: 10, text: "Catchy romance vibes and dancing keys!" },
            { time: 16, text: "Swaram VIP player glowing sky blue!" }
        ]
    },
    {
        id: 175,
        title: "Moral Of The Story",
        artist: "Ashe",
        album: "Moral Of The Story Single",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763493/Moral-Of-The-Story_fsreeu.mp3",
        cover: "insta logo.jpg",
        accentRGB: "155, 89, 182",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎹 [Soft Piano & Acoustic Guitar Chord Intro] 🎹" },
            { time: 5, text: "Moral of the Story... Ashe's emotional ballad" },
            { time: 11, text: "Some mistakes get made, that's alright..." },
            { time: 17, text: "Beautiful vocal harmonies flowing." }
        ]
    },
    {
        id: 176,
        title: "K For Kabaradakkam",
        artist: "Tamil Movie Cast",
        album: "Kabaradakkam Soundtrack",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763482/K_For_Kabaradakkam_hhrcyp.mp3",
        cover: "insta logo.jpg",
        accentRGB: "44, 62, 80",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔥 [Action BGM Brass & Synth Intro] 🔥" },
            { time: 5, text: "K For Kabaradakkam... danger ahead!" },
            { time: 11, text: "Deep sub bass and heavy metallic beats!" },
            { time: 17, text: "Dark theme glowing in royal style!" }
        ]
    },
    {
        id: 177,
        title: "Legends Never Die",
        artist: "Against The Current",
        album: "League of Legends Theme",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763481/Legends-Never-Die_te4wss.mp3",
        cover: "insta logo.jpg",
        accentRGB: "26, 188, 156",
        category: "vibes",
        lyrics: [
            { time: 0, text: "🎵 [Atmospheric Electronic Vocal pad Intro] 🎵" },
            { time: 6, text: "Legends Never Die... rise up high!" },
            { time: 12, text: "Against The Current high-octane rock!" },
            { time: 18, text: "Hear the epic cinematic crescendo!" }
        ]
    },
    {
        id: 178,
        title: "Edhirthu Nil",
        artist: "Tamil Movie Cast",
        album: "Edhirthu Nil Soundtrack",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763480/Edhirthu-Nil_gjhfcp.mp3",
        cover: "insta logo.jpg",
        accentRGB: "235, 77, 75",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔥 [Aggressive Action Rock Guitars] 🔥" },
            { time: 5, text: "Edhirthu Nil... stand against all odds!" },
            { time: 11, text: "Heavy metal riffs and motivational chorus!" },
            { time: 17, text: "Maximum power and adrenaline surge!" }
        ]
    },
    {
        id: 179,
        title: "Drums BGM",
        artist: "Instrumental Beats",
        album: "Action BGM Pack",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763472/Drums_bgm_lp4xln.mp3",
        cover: "insta logo.jpg",
        accentRGB: "44, 62, 80",
        category: "vibes",
        lyrics: [
            { time: 0, text: "🥁 [Pure Cinematic Drum Roll & Percussion] 🥁" },
            { time: 6, text: "Drums BGM... feel the heavy thunder!" },
            { time: 12, text: "Perfect background for heroic walks!" },
            { time: 18, text: "Vibrant visualizer jumping to massive hits!" }
        ]
    },
    {
        id: 180,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM (2013)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783763147/I-Wanna-Be-Yours_jaexwu.mp3",
        cover: "insta logo.jpg",
        accentRGB: "155, 89, 182",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎸 [Dreamy Electric Guitar & Slow Beat] 🎸" },
            { time: 6, text: "I Wanna Be Yours... Arctic Monkeys classic" },
            { time: 12, text: "Secrets and slow-burning indie romance..." },
            { time: 18, text: "Purple neon glow, matching the night vibes." }
        ]
    },
    {
        id: 181,
        title: "Unnaal Unnaal",
        artist: "Harris Jayaraj",
        album: "Ambikapathy (2013)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762708/Unnaal-Unnaal_nz7poq.mp3",
        cover: "insta logo.jpg",
        accentRGB: "52, 152, 219",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎻 [Warm Orchestral Violin & Acoustic Guitar] 🎻" },
            { time: 5, text: "Unnaal Unnaal... Harris Jayaraj melodic gem" },
            { time: 11, text: "Sweet Tamil lyrics floating in romance" },
            { time: 17, text: "Swaram player glowing in cool blue sky" }
        ]
    },
    {
        id: 182,
        title: "Vroom Vroom",
        artist: "Tamil Movie Cast",
        album: "Vroom Vroom Soundtrack",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762707/Vroom-Vroom_dsrszx.mp3",
        cover: "insta logo.jpg",
        accentRGB: "230, 126, 34",
        category: "mass",
        lyrics: [
            { time: 0, text: "🏎️ [Race Car Revving & EDM Synth Intro] 🏎️" },
            { time: 5, text: "Vroom Vroom... speed and power!" },
            { time: 11, text: "High tempo dance beat taking over!" },
            { time: 17, text: "Orange neon visualizer racing fast!" }
        ]
    },
    {
        id: 183,
        title: "Villaathi Villan",
        artist: "Tamil Movie Cast",
        album: "Villaathi Villan Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762693/Villaathi-Villan-MassTamilan.com_m8depl.mp3",
        cover: "insta logo.jpg",
        accentRGB: "235, 77, 75",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔥 [Epic Villain Orchestral Horns] 🔥" },
            { time: 5, text: "Villaathi Villan... the ultimate antagonist!" },
            { time: 11, text: "Heavy brass elements and dark beats!" },
            { time: 17, text: "Red glowing warning levels thumping!" }
        ]
    },
    {
        id: 184,
        title: "Suriyan Kudaiya Neetti",
        artist: "Harris Jayaraj",
        album: "Vaaranam Aayiram (2008)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762684/Suriyan_Kudaiya_Neetti_gjmteg.mp3",
        cover: "insta logo.jpg",
        accentRGB: "241, 196, 15",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎸 [Breezy Acoustic Guitar & Melodic Synth] 🎸" },
            { time: 5, text: "Suriyan Kudaiya Neetti... college romance!" },
            { time: 11, text: "Harris Jayaraj signature Vaaranam memories" },
            { time: 17, text: "Golden warm glow, sweet vocals flying!" }
        ]
    },
    {
        id: 185,
        title: "Paaraa",
        artist: "Anirudh Ravichander",
        album: "Indian 2 (2024)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762672/Paaraa_on4oei.mp3",
        cover: "insta logo.jpg",
        accentRGB: "46, 204, 113",
        category: "mass",
        lyrics: [
            { time: 0, text: "🦅 [Epic Patriot Orchestral Chants & Horns] 🦅" },
            { time: 6, text: "Paaraa... Indian 2 return theme!" },
            { time: 12, text: "Anirudh's high voltage majestic anthem" },
            { time: 18, text: "Green neon glowing for the ultimate protector!" }
        ]
    },
    {
        id: 186,
        title: "Thug Life Sound Effect",
        artist: "Voicemod",
        album: "Meme SFX",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762642/thug-life-sound-effect-made-with-Voicemod_j0w0zl.mp3",
        cover: "insta logo.jpg",
        accentRGB: "230, 126, 34",
        category: "nice",
        lyrics: [
            { time: 0, text: "🕶️ [G-Funk Beats & DJ Scratching] 🕶️" },
            { time: 4, text: "Thug Life... deal with it!" },
            { time: 9, text: "Classic meme sound effect rolling!" },
            { time: 14, text: "Put on the pixels, drop the beat!" }
        ]
    },
    {
        id: 187,
        title: "Pasappukkalli",
        artist: "Tamil Movie Cast",
        album: "Pasappukkalli Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762450/Pasappukkalli-MassTamilan.org_phrqmt.mp3",
        cover: "insta logo.jpg",
        accentRGB: "52, 152, 219",
        category: "nice",
        lyrics: [
            { time: 0, text: "🎵 [Romantic Accordion & Folk Melodics] 🎵" },
            { time: 5, text: "Pasappukkalli... lovely village romance!" },
            { time: 11, text: "Sweet vocals and rhythmic clap percussion" },
            { time: 17, text: "Stand tall, vibe to the sweet sound!" }
        ]
    },
    {
        id: 188,
        title: "Thee Thalapathy",
        artist: "Silambarasan TR, Anirudh",
        album: "Varisu (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762439/Thee-Thalapathy-MassTamilan.dev_hfrqdg.mp3",
        cover: "insta logo.jpg",
        accentRGB: "235, 77, 75",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔥 [Roaring Electric Guitars & Heavy Bass] 🔥" },
            { time: 5, text: "Thee Thalapathy... STR's blazing tribute vocals!" },
            { time: 11, text: "Anirudh's epic mass anthem of Varisu!" },
            { time: 17, text: "Blazing red hot visualizer beats!" }
        ]
    },
    {
        id: 189,
        title: "Param Sundari",
        artist: "A.R. Rahman, Shreya Ghoshal",
        album: "Mimi (2021)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762264/Param_Sundari_KoshalWorld.Com_yz7nep.mp3",
        cover: "insta logo.jpg",
        accentRGB: "155, 89, 182",
        category: "nice",
        lyrics: [
            { time: 0, text: "🌸 [Sparkling Tabla & Acoustic Guitar] 🌸" },
            { time: 5, text: "Param Sundari... Shreya's sweet vocal magic!" },
            { time: 10, text: "A.R. Rahman's catchy modern folk fusion!" },
            { time: 16, text: "Royal purple glowing for the beauty queen!" }
        ]
    },
    {
        id: 190,
        title: "Neela Nilave",
        artist: "Kapil Kapilan",
        album: "RDX (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762263/Neela-Nilave-MassTamilan.dev_cjbthj.mp3",
        cover: "insta logo.jpg",
        accentRGB: "52, 152, 219",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎵 [Soothing Ambient Pad & Piano Intro] 🎵" },
            { time: 5, text: "Neela Nilave... Kapil Kapilan's viral romance" },
            { time: 11, text: "Sweet emotional flow in the breeze..." },
            { time: 17, text: "Ocean of sky blue neon glowing soft." }
        ]
    },
    {
        id: 191,
        title: "Soul Of Varisu",
        artist: "K.S. Chithra",
        album: "Varisu (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762250/Soul-Of-Varisu-MassTamilan.dev_ydtqys.mp3",
        cover: "insta logo.jpg",
        accentRGB: "241, 196, 15",
        category: "melodies",
        lyrics: [
            { time: 0, text: "✨ [Emotional String Section & Flute] ✨" },
            { time: 5, text: "Soul of Varisu... Chithra's heart-melting voice!" },
            { time: 12, text: "Thaman's epic family sentiment melody!" },
            { time: 18, text: "Golden warm glow, absolute peace." }
        ]
    },
    {
        id: 192,
        title: "Sound of Salaar",
        artist: "Ravi Basrur",
        album: "Salaar (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762244/Sound_of_Salaar_xpd7cq.mp3",
        cover: "insta logo.jpg",
        accentRGB: "44, 62, 80",
        category: "mass",
        lyrics: [
            { time: 0, text: "💥 [Deafening Metal Percussion & Choir Chants] 💥" },
            { time: 5, text: "Sound of Salaar... the monster rises!" },
            { time: 11, text: "Ravi Basrur's heavy violent action loop" },
            { time: 17, text: "Midnight slate grey visualizer pulsing hard!" }
        ]
    },
    {
        id: 193,
        title: "Ranjithame",
        artist: "Vijay, M.M. Manasi",
        album: "Varisu (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762228/Ranjithame-MassTamilan.dev_kdhne3.mp3",
        cover: "insta logo.jpg",
        accentRGB: "46, 204, 113",
        category: "nice",
        lyrics: [
            { time: 0, text: "🥁 [Upbeat Folk Kuthu Drums Intro] 🥁" },
            { time: 5, text: "Ranjithame... Vijay & Manasi energetic duet!" },
            { time: 11, text: "Bounce your shoulders to the classic hook!" },
            { time: 17, text: "Neon green lights jumping to the beat!" }
        ]
    },
    {
        id: 194,
        title: "Ra Ra Reddy I Am Ready",
        artist: "Aditya Iyengar",
        album: "Macherla Niyojakavargam (2022)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762226/Ra_Ra_Reddy_I_Am_Ready_rvgj4t.mp3",
        cover: "insta logo.jpg",
        accentRGB: "230, 126, 34",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔥 [High Octane Club Beats & Whistle] 🔥" },
            { time: 5, text: "Ra Ra Reddy... I Am Ready for the dance!" },
            { time: 11, text: "Massive youth party anthem thumping!" },
            { time: 17, text: "Orange neon glowing for the dance floor!" }
        ]
    },
    {
        id: 195,
        title: "Priyathama Priyathama",
        artist: "Chinmayi Sripada",
        album: "Majili (2019)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762185/Priyathama-Priyathama-From-Majili-Chinmayi-Sripada_tv0cvb.mp3",
        cover: "insta logo.jpg",
        accentRGB: "155, 89, 182",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎻 [Mournful Violin & Soft Acoustic Chords] 🎻" },
            { time: 5, text: "Priyathama Priyathama... Chinmayi's soul-stirring" },
            { time: 12, text: "Beautiful emotional Telugu masterpiece" },
            { time: 18, text: "Deep purple glow matching the heartfelt vibe." }
        ]
    },
    {
        id: 196,
        title: "Fast Tape Rewind Transition",
        artist: "Mixkit SFX",
        album: "Cinematic Transitions",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762163/mixkit-fast-tape-rewind-cinematic-transition-1092_i4spcw.wav",
        cover: "insta logo.jpg",
        accentRGB: "26, 188, 156",
        category: "vibes",
        lyrics: [
            { time: 0, text: "⚡ [Fast tape rewind cinematic sweep] ⚡" },
            { time: 2, text: "Rewinding the sound to the start..." },
            { time: 4, text: "Transitioning visualizer colors rapidly!" }
        ]
    },
    {
        id: 197,
        title: "Pathikichu",
        artist: "Tamil Movie Cast",
        album: "Pathikichu Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762159/Pathikichu-MassTamilan.dev_tkqqph.mp3",
        cover: "insta logo.jpg",
        accentRGB: "235, 77, 75",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔥 [Fiery Street Dance Beats Intro] 🔥" },
            { time: 5, text: "Pathikichu... fire is lit!" },
            { time: 11, text: "Adrenaline-boosting Chennai local drums!" },
            { time: 17, text: "Red alert! High energy vibes!" }
        ]
    },
    {
        id: 198,
        title: "Die With A Smile",
        artist: "Bruno Mars, Lady Gaga",
        album: "Die With A Smile Single (2024)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762152/Die-With-A-Smile_PagalNew.Com.Se_lwcczi.mp3",
        cover: "insta logo.jpg",
        accentRGB: "155, 89, 182",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎸 [Retro Soul Organ & Electric Guitar Riff] 🎸" },
            { time: 6, text: "Die With A Smile... Bruno & Gaga power ballad!" },
            { time: 12, text: "If the world was ending, I wanna be next to you..." },
            { time: 18, text: "Royal purple glowing for the legendary duet!" }
        ]
    },
    {
        id: 199,
        title: "Chalmaar",
        artist: "Devi Sri Prasad",
        album: "Puli (2015)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762028/Chalmaar_nocwuv.mp3",
        cover: "insta logo.jpg",
        accentRGB: "46, 204, 113",
        category: "nice",
        lyrics: [
            { time: 0, text: "🥁 [Massive Trumpet & High-Tempo Kuthu] 🥁" },
            { time: 6, text: "Chalmaar... Vijay's high-speed dance step!" },
            { time: 12, text: "DSP's maximum energetic brass fusion!" },
            { time: 18, text: "Green neon visualizer thumping fast!" }
        ]
    },
    {
        id: 200,
        title: "Celebration Of Varisu",
        artist: "Anirudh Ravichander",
        album: "Varisu (2023)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783762001/Celebration-Of-Varisu-MassTamilan.dev_mrs2rr.mp3",
        cover: "insta logo.jpg",
        accentRGB: "230, 126, 34",
        category: "mass",
        lyrics: [
            { time: 0, text: "🔊 [Grand Orchestral Trumpets & Heavy Beats] 🔊" },
            { time: 5, text: "Celebration of Varisu... Anirudh's theme!" },
            { time: 11, text: "Ultimate royal success march theme!" },
            { time: 17, text: "Orange festival theme glowing proud!" }
        ]
    },
    {
        id: 201,
        title: "Gaana Gaana",
        artist: "Tamil Folk Group",
        album: "Gaana Hits",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783761973/Gaana-Gaana_dqdilq.mp3",
        cover: "insta logo.jpg",
        accentRGB: "241, 196, 15",
        category: "vibes",
        lyrics: [
            { time: 0, text: "🎵 [Traditional local Gana street drums] 🎵" },
            { time: 5, text: "Gaana Gaana... Chennai street beats!" },
            { time: 12, text: "Sing along to the local rhythm and rhymes!" },
            { time: 18, text: "Golden vibes glowing bright!" }
        ]
    },
    {
        id: 202,
        title: "Arima Arima",
        artist: "A.R. Rahman",
        album: "Enthiran (2010)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783761958/Arima-Arima_zqyv8e.mp3",
        cover: "insta logo.jpg",
        accentRGB: "235, 77, 75",
        category: "mass",
        lyrics: [
            { time: 0, text: "🦁 [Majestic Lion Roar & Royal Brass Fanfare] 🦁" },
            { time: 6, text: "Arima Arima... the robot king's march!" },
            { time: 12, text: "A.R. Rahman's massive sci-fi orchestral kuthu!" },
            { time: 18, text: "Red hot neon glow, absolute mechanical power!" }
        ]
    },
    {
        id: 203,
        title: "Ambikapathy",
        artist: "A.R. Rahman",
        album: "Ambikapathy (2013)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783761949/Ambikapathy_tydkj6.mp3",
        cover: "insta logo.jpg",
        accentRGB: "52, 152, 219",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎻 [Classical Violins & Traditional Flute Intro] 🎻" },
            { time: 5, text: "Ambikapathy... A.R. Rahman's classical symphony" },
            { time: 12, text: "Soul-stirring vocals mapping true love" },
            { time: 18, text: "Sky blue glow, floating with the music." }
        ]
    },
    {
        id: 204,
        title: "Fairytale",
        artist: "Alexander Rybak",
        album: "Fairytales (2009)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783761928/Alexander_Rybak_-_Fairytale_lkrsxn.mp3",
        cover: "insta logo.jpg",
        accentRGB: "155, 89, 182",
        category: "melodies",
        lyrics: [
            { time: 0, text: "🎻 [Famous Energetic Violin Solo Opening] 🎻" },
            { time: 6, text: "Fairytale... Alexander Rybak Eurovision hit!" },
            { time: 12, text: "I'm in love with a fairytale, even if it hurts..." },
            { time: 18, text: "Royal purple glowing for the violin performance!" }
        ]
    },
    {
        id: 205,
        title: "Hunter Vantaar",
        artist: "Anirudh Ravichander",
        album: "Vettaiyan (2024)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783761922/Hunter_Vantaar_bzd6vo.mp3",
        cover: "insta logo.jpg",
        accentRGB: "235, 77, 75",
        category: "mass",
        lyrics: [
            { time: 0, text: "🦁 [Fierce Hunter Entry Hook & Synth Bass] 🦁" },
            { time: 5, text: "Hunter Vantaar... Anirudh's mass theme!" },
            { time: 11, text: "Superstar Rajini's styling walk bgm!" },
            { time: 16, text: "Blazing red hot visualizer beats!" }
        ]
    },
    {
        id: 206,
        title: "Achacho",
        artist: "Hiphop Tamizha",
        album: "Aranmanai 4 (2024)",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783761903/Achacho_yx5h5g.mp3",
        cover: "insta logo.jpg",
        accentRGB: "46, 204, 113",
        category: "nice",
        lyrics: [
            { time: 0, text: "💃 [Catchy Dance Synth & Club Bass Intro] 💃" },
            { time: 5, text: "Achacho... Hiphop Tamizha viral dance hit!" },
            { time: 11, text: "Energy rising, dance floor moving!" },
            { time: 17, text: "Neon green lights flashing to the beat!" }
        ]
    },
    {
        id: 207,
        title: "Antha Paiyanuku Bayam Illa",
        artist: "Fringster Ringtone",
        album: "Ringtones Collection",
        src: "https://res.cloudinary.com/dt5solnye/video/upload/v1783761863/Antha_Paiyanuku_Bayam_Illa_Ringtone__by_Fringster.com_tnmj9m.mp3",
        cover: "insta logo.jpg",
        accentRGB: "230, 126, 34",
        category: "vibes",
        lyrics: [
            { time: 0, text: "🔔 [Catchy Tamil Ringtone Chimes] 🔔" },
            { time: 4, text: "Antha Paiyanuku Bayam Illa... No Fear!" },
            { time: 9, text: "A proud and fearless ringtone loop" },
            { time: 14, text: "Orange theme pulsing with the bells." }
        ]
    }
];

// 2. State Variables
let currentPlaylist = 'all'; // 'all' | 'mass' | 'nice' | 'melodies' | 'vibes' | 'liked' | customName
let currentTrackIndex = 0;
let isPlaying = false;
let shuffleMode = false;
let repeatMode = 'none'; // 'none' | 'one' | 'all'
let likedSongs = JSON.parse(localStorage.getItem('swaram_liked_songs')) || [];
let customPlaylists = JSON.parse(localStorage.getItem('swaram_custom_playlists')) || {};
let currentQueue = [...tracks];

// Audio Context Variables for Equalizer & Visualizer
let audioContext = null;
let analyser = null;
let sourceNode = null;
let dataArray = null;
let animationFrameId = null;
let isVisualizerInitialized = false;
let activeVisMode = 'bars'; // 'bars' | 'circle' | 'wave'
let equalizerFilters = [];
const EQ_BANDS = [60, 230, 910, 4000, 14000];
const EQ_PRESETS = {
    flat: [0, 0, 0, 0, 0],
    bass: [8, 4, 0, -2, -4],
    treble: [-4, -2, 0, 4, 8],
    vocal: [-2, 0, 6, 4, -2],
    royal: [6, 3, -1, 3, 5]
};

// DOM Elements
const audio = document.getElementById('main-audio');
const playBtn = document.getElementById('player-play');
const prevBtn = document.getElementById('player-prev');
const nextBtn = document.getElementById('player-next');
const shuffleBtn = document.getElementById('player-shuffle');
const repeatBtn = document.getElementById('player-repeat');
const likeBtn = document.getElementById('player-like');
const progressSlider = document.getElementById('progress-slider');
const progressFill = document.getElementById('progress-fill');
const volumeSlider = document.getElementById('volume-slider');
const volumeFill = document.getElementById('volume-fill');
const volumeBtn = document.getElementById('volume-btn');
const timeCurrent = document.getElementById('time-current');
const timeDuration = document.getElementById('time-duration');

// UI Elements
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerCover = document.getElementById('player-cover');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarArtist = document.getElementById('sidebar-artist');
const sidebarCover = document.getElementById('sidebar-cover');
const greetingText = document.getElementById('greeting-text');
const welcomeBanner = document.getElementById('welcome-banner');
const bannerBg = document.getElementById('banner-bg');
const tracksGrid = document.getElementById('tracks-grid');
const tableRows = document.getElementById('table-rows');
const sectionTitle = document.getElementById('section-title');

// Sidebar nav
const navHome = document.getElementById('nav-home');
const navSearch = document.getElementById('nav-search');
const searchBarContainer = document.getElementById('search-bar-container');
const searchInput = document.getElementById('search-input');
const clearSearch = document.getElementById('clear-search');

// Canvas Visualizer
const canvas = document.getElementById('audio-visualizer');
const canvasCtx = canvas.getContext('2d');
const visualizerOverlay = document.getElementById('visualizer-overlay');
const visControls = document.querySelectorAll('.vis-mode-btn');

// Panels Toggles
const toggleLyricsBtn = document.getElementById('toggle-lyrics');
const lyricsVisualizerContainer = document.getElementById('lyrics-visualizer-container');
const lyricsScroll = document.getElementById('lyrics-scroll');
const queueList = document.getElementById('queue-list');
const toggleVisualizerBtn = document.getElementById('toggle-visualizer');
const visualizerSection = document.getElementById('visualizer-section');
const playerFullscreenBtn = document.getElementById('player-fullscreen');

// 2b. IndexedDB Configuration for Cloud uploads
const DB_NAME = 'MyListCloudDB';
const DB_VERSION = 1;
let db = null;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('songs')) {
                db.createObjectStore('songs', { keyPath: 'id', autoIncrement: true });
            }
        };
        request.onsuccess = (e) => {
            db = e.target.result;
            resolve(db);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function getCloudSongs() {
    return new Promise((resolve, reject) => {
        if (!db) return resolve([]);
        const transaction = db.transaction('songs', 'readonly');
        const store = transaction.objectStore('songs');
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

function addCloudSong(song) {
    return new Promise((resolve, reject) => {
        if (!db) return reject('DB not initialized');
        const transaction = db.transaction('songs', 'readwrite');
        const store = transaction.objectStore('songs');
        const request = store.add(song);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// 2c. Custom Playlists persistence helper
function saveCustomPlaylists() {
    localStorage.setItem('swaram_custom_playlists', JSON.stringify(customPlaylists));
}

// 2d. Dynamic Artwork Web Search (iTunes API)
const MUSIC_SYMBOL_SVG_STRING = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><radialGradient id="grad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2d124d"/><stop offset="100%" stop-color="#0c0714"/></radialGradient><linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffe259"/><stop offset="100%" stop-color="#ffa751"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#grad)"/><path fill="url(#gold)" d="M384 48L192 112v288c-18.3-9.5-40.5-16-64-16-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V224l160-53.3v165.3c-18.3-9.5-40.5-16-64-16-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V48z" transform="translate(144, 128) scale(0.6)"/></svg>`;
const MUSIC_SYMBOL_SVG = `data:image/svg+xml;base64,${btoa(MUSIC_SYMBOL_SVG_STRING)}`;

const artworkCache = JSON.parse(localStorage.getItem('swaram_artwork_cache')) || {};

function getSongCover(track) {
    if (track.artworkUrl) return track.artworkUrl;
    const cacheKey = `${track.artist}_${track.title}`.toLowerCase();
    if (artworkCache[cacheKey]) return artworkCache[cacheKey];
    return MUSIC_SYMBOL_SVG;
}

function updateDOMForFetchedArtwork(trackId, artworkUrl) {
    // Update grid card image
    document.querySelectorAll(`.track-card[data-id="${trackId}"] .card-img`).forEach(img => {
        img.src = artworkUrl;
    });
    
    // Update table row image
    document.querySelectorAll(`.table-row[data-id="${trackId}"] .row-img`).forEach(img => {
        img.src = artworkUrl;
    });

    // Update queue list image
    document.querySelectorAll(`.queue-item[data-id="${trackId}"] .queue-img`).forEach(img => {
        img.src = artworkUrl;
    });
}

async function fetchSongArtwork(track, imgElements = []) {
    const cacheKey = `${track.artist}_${track.title}`.toLowerCase();
    if (artworkCache[cacheKey]) {
        track.artworkUrl = artworkCache[cacheKey];
        imgElements.forEach(img => { if (img) img.src = track.artworkUrl; });
        updateDOMForFetchedArtwork(track.id, track.artworkUrl);
        return track.artworkUrl;
    }
    if (track.artworkUrl) {
        imgElements.forEach(img => { if (img) img.src = track.artworkUrl; });
        updateDOMForFetchedArtwork(track.id, track.artworkUrl);
        return track.artworkUrl;
    }

    try {
        const query = encodeURIComponent(`${track.artist} ${track.title}`);
        const response = await fetch(`https://itunes.apple.com/search?term=${query}&entity=song&limit=1`);
        if (response.ok) {
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const artwork = data.results[0].artworkUrl100;
                const highResArtwork = artwork.replace('100x100bb', '500x500bb');
                track.artworkUrl = highResArtwork;
                artworkCache[cacheKey] = highResArtwork;
                localStorage.setItem('swaram_artwork_cache', JSON.stringify(artworkCache));
                
                imgElements.forEach(img => { if (img) img.src = highResArtwork; });
                updateDOMForFetchedArtwork(track.id, highResArtwork);
                return highResArtwork;
            }
        }
    } catch (err) {
        console.warn("Artwork fetch failed for", track.title, err);
    }
    const fallback = MUSIC_SYMBOL_SVG;
    imgElements.forEach(img => { if (img) img.src = fallback; });
    return fallback;
}

// 3. Initialize App
async function initApp() {
    // Modify cover art for all tracks to Instagram logo
    tagTracks();
    
    // Load cloud songs from IndexedDB
    const allTracks = await loadAllTracks();
    tracks.length = 0; // Clear original tracks list
    tracks.push(...allTracks); // Add combined tracks
    
    tagTracks(); // Re-tag to ensure all have category and cover
    
    setGreeting();
    selectPlaylist(currentPlaylist);
    renderCustomPlaylists();
    updatePlaylistCounts();
    
    // Resize visualizer canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Event Listeners Setup
    bindEvents();
    bindCloudUploadUI();
    bindLocalPlayUI();
    bindNavLocalUI();
    init3DCardTilt();
}

// 3b. Tag and uniform cover images
function tagTracks() {
    tracks.forEach(track => {
        if (!track.cover) track.cover = 'insta logo.jpg';
        if (track.category) return;
        
        const title = track.title.toLowerCase();
        const artist = track.artist.toLowerCase();
        
        if (artist.includes('anirudh') || artist.includes('yuvan') || artist.includes('basrur') || 
            title.includes('kuthu') || title.includes('mass') || title.includes('toofan') || 
            title.includes('monster') || title.includes('fear') || title.includes('vikram') || 
            title.includes('hukum') || title.includes('vaathi') || title.includes('sodakku') ||
            title.includes('vengamavan') || title.includes('raju bhai') || title.includes('sambavam') || title.includes('sulthana')) {
            track.category = 'mass';
        } else if (artist.includes('harris') || artist.includes('rahman') || artist.includes('balasubrahmanyam') || 
                   artist.includes('kk') || title.includes('melody') || title.includes('uyere') || 
                   title.includes('nenje') || title.includes('kadhali') || title.includes('paarvayil') || 
                   title.includes('saarah') || title.includes('inbam') || title.includes('roma') || title.includes('un paarvayil')) {
            track.category = 'melodies';
        } else if (artist.includes('hiphop') || artist.includes('str') || artist.includes('imman') || 
                   title.includes('nice') || title.includes('selfie') || title.includes('remo') || 
                   title.includes('private party') || title.includes('two two two') || title.includes('chill bro') || 
                   title.includes('chumma kizhi') || title.includes('birthday') || title.includes('lacky') || title.includes('gethu')) {
            track.category = 'nice';
        } else {
            track.category = 'vibes';
        }
    });
}

// 3c. Load all combined tracks
async function loadAllTracks() {
    await initDB();
    let cloudSongs = [];
    try {
        cloudSongs = await getCloudSongs();
    } catch(err) {
        console.warn("Could not retrieve cloud songs:", err);
    }
    
    const processedCloudSongs = cloudSongs.map(s => {
        return {
            id: s.id,
            title: s.title,
            artist: s.artist,
            album: s.album || 'Cloud Upload',
            src: URL.createObjectURL(s.file), // s.file is a File/Blob
            cover: 'insta logo.jpg',
            accentRGB: s.accentRGB || '255, 215, 0',
            lyrics: s.lyrics || [{ time: 0, text: "🎵 Cloud uploaded track 🎵" }],
            category: s.category || 'vibes',
            isCloud: true
        };
    });
    
    // original numeric base tracks
    const baseTracksOnly = tracks.filter(t => typeof t.id === 'number');
    baseTracksOnly.forEach(track => {
        if (!track.cover) track.cover = 'insta logo.jpg';
    });
    
    return [...baseTracksOnly, ...processedCloudSongs];
}

// 4. Set dynamic greeting based on hour
function setGreeting() {
    const hour = new Date().getHours();
    let greeting = "Good Evening";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";
    if (greetingText) greetingText.textContent = greeting;
}

// 5. Setup Event Listeners
function bindEvents() {
    // Playback events
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    likeBtn.addEventListener('click', toggleLike);
    
    // Bottom bar download button binding
    const playerDownloadBtn = document.getElementById('player-download');
    if (playerDownloadBtn) {
        playerDownloadBtn.addEventListener('click', () => {
            if (currentQueue.length > 0) {
                const track = currentQueue[currentTrackIndex];
                if (track) downloadSong(track, playerDownloadBtn);
            }
        });
    }

    // Audio tag listeners
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
        timeDuration.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('ended', handleTrackEnded);

    // Slider inputs
    progressSlider.addEventListener('input', seek);
    volumeSlider.addEventListener('input', (e) => setVolume(e.target.value));
    volumeBtn.addEventListener('click', toggleMute);

    // Grid play button interactions via Event Delegation
    tracksGrid.addEventListener('click', (e) => {
        const cardPlayBtn = e.target.closest('.card-play-btn');
        const cardOptBtn = e.target.closest('.card-opt-btn');
        const cardDownloadBtn = e.target.closest('.card-download-btn');
        const trackCard = e.target.closest('.track-card');
        
        if (trackCard) {
            const trackId = trackCard.dataset.id;
            const parsedId = isNaN(trackId) ? trackId : parseInt(trackId);
            const indexInQueue = currentQueue.findIndex(t => t.id === parsedId);
            
            if (cardPlayBtn) {
                e.stopPropagation();
                if (currentTrackIndex === indexInQueue && isPlaying) {
                    pauseTrack();
                } else {
                    currentTrackIndex = indexInQueue;
                    loadTrack(indexInQueue);
                    playTrack();
                }
            } else if (cardOptBtn) {
                e.stopPropagation();
                showPlaylistMenu(parsedId, e.clientX, e.clientY);
            } else if (cardDownloadBtn) {
                e.stopPropagation();
                const track = tracks.find(t => t.id === parsedId);
                if (track) downloadSong(track, cardDownloadBtn);
            } else {
                currentTrackIndex = indexInQueue;
                loadTrack(indexInQueue);
                playTrack();
            }
        }
    });

    // Table rows play interactions
    tableRows.addEventListener('click', (e) => {
        const row = e.target.closest('.table-row');
        const rowOptBtn = e.target.closest('.row-opt-btn');
        const rowDownloadBtn = e.target.closest('.row-download-btn');
        
        if (row) {
            const trackId = row.dataset.id;
            const parsedId = isNaN(trackId) ? trackId : parseInt(trackId);
            
            if (rowOptBtn) {
                e.stopPropagation();
                showPlaylistMenu(parsedId, e.clientX, e.clientY);
            } else if (rowDownloadBtn) {
                e.stopPropagation();
                const track = tracks.find(t => t.id === parsedId);
                if (track) downloadSong(track, rowDownloadBtn);
            } else {
                const indexInQueue = currentQueue.findIndex(t => t.id === parsedId);
                currentTrackIndex = indexInQueue;
                loadTrack(indexInQueue);
                playTrack();
            }
        }
    });

    // Nav Item Click (Search, Home)
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        navHome.classList.add('active');
        navSearch.classList.remove('active');
        searchBarContainer.classList.add('hidden');
        selectPlaylist(currentPlaylist);
    });

    navSearch.addEventListener('click', (e) => {
        e.preventDefault();
        navSearch.classList.add('active');
        navHome.classList.remove('active');
        searchBarContainer.classList.remove('hidden');
        searchInput.focus();
    });

    searchInput.addEventListener('input', searchSongs);
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        clearSearch.style.display = 'none';
        searchSongs();
    });

    // Bind Sidebar Playlists
    const playlistItems = document.querySelectorAll('.playlists-list .playlist-item');
    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            const playlistId = item.dataset.playlist;
            selectPlaylist(playlistId);
        });
    });

    // Visualizer Mode Controls
    visControls.forEach(btn => {
        btn.addEventListener('click', () => {
            visControls.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeVisMode = btn.dataset.mode;
        });
    });

    // Start visualizer overlay click
    visualizerOverlay.addEventListener('click', () => {
        playTrack();
    });

    // Toggle panels
    toggleLyricsBtn.addEventListener('click', () => {
        lyricsVisualizerContainer.classList.toggle('hidden');
        toggleLyricsBtn.classList.toggle('active-control');
        
        // Scroll to active lyric if visible
        if (!lyricsVisualizerContainer.classList.contains('hidden')) {
            scrollToActiveLyric();
        }
    });

    toggleVisualizerBtn.addEventListener('click', () => {
        visualizerSection.classList.toggle('hidden');
        toggleVisualizerBtn.classList.toggle('active-control');
    });

    playerFullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Equalizer Presets Dropdown
    const presetSelect = document.getElementById('eq-presets');
    if (presetSelect) {
        presetSelect.addEventListener('change', (e) => {
            applyEQPreset(e.target.value);
        });
    }
    
    // Context Menu click outside
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('playlist-dropdown-menu');
        if (menu && !menu.contains(e.target) && !e.target.closest('.card-opt-btn') && !e.target.closest('.row-opt-btn')) {
            menu.style.display = 'none';
        }
    });
    
    // Custom playlist setup
    const createPlaylistBtn = document.getElementById('create-playlist-btn');
    if (createPlaylistBtn) {
        createPlaylistBtn.addEventListener('click', () => {
            const name = prompt("Enter new custom playlist name:");
            if (name && name.trim()) {
                const trimmed = name.trim();
                if (customPlaylists[trimmed]) {
                    alert("Playlist already exists!");
                } else {
                    customPlaylists[trimmed] = [];
                    saveCustomPlaylists();
                    renderCustomPlaylists();
                }
            }
        });
    }
    
    const dropCreateBtn = document.getElementById('dropdown-create-playlist');
    if (dropCreateBtn) {
        dropCreateBtn.addEventListener('click', () => {
            const name = prompt("Enter new custom playlist name:");
            if (name && name.trim()) {
                const trimmed = name.trim();
                if (customPlaylists[trimmed]) {
                    alert("Playlist already exists!");
                } else {
                    customPlaylists[trimmed] = [selectedTrackIdForMenu];
                    saveCustomPlaylists();
                    renderCustomPlaylists();
                    const menu = document.getElementById('playlist-dropdown-menu');
                    if (menu) menu.style.display = 'none';
                }
            }
        });
    }

    // Hover pre-fetching for grid card and table row thumbnails (debounced 250ms)
    let prefetchTimeout = null;
    let lastHoveredTrackId = null;

    function prefetchTrackArtwork(trackId) {
        const track = tracks.find(t => t.id === trackId);
        if (!track || track.artworkUrl) return;
        const cacheKey = `${track.artist}_${track.title}`.toLowerCase();
        if (artworkCache[cacheKey]) {
            track.artworkUrl = artworkCache[cacheKey];
            updateDOMForFetchedArtwork(track.id, track.artworkUrl);
            return;
        }
        
        if (prefetchTimeout) clearTimeout(prefetchTimeout);
        prefetchTimeout = setTimeout(() => {
            fetchSongArtwork(track);
        }, 250);
    }

    if (tracksGrid) {
        tracksGrid.addEventListener('mouseover', (e) => {
            const card = e.target.closest('.track-card');
            if (card) {
                const trackId = card.dataset.id;
                const parsedId = isNaN(trackId) ? trackId : parseInt(trackId);
                if (parsedId !== lastHoveredTrackId) {
                    lastHoveredTrackId = parsedId;
                    prefetchTrackArtwork(parsedId);
                }
            }
        });
    }

    if (tableRows) {
        tableRows.addEventListener('mouseover', (e) => {
            const row = e.target.closest('.table-row');
            if (row) {
                const trackId = row.dataset.id;
                const parsedId = isNaN(trackId) ? trackId : parseInt(trackId);
                if (parsedId !== lastHoveredTrackId) {
                    lastHoveredTrackId = parsedId;
                    prefetchTrackArtwork(parsedId);
                }
            }
        });
    }
}

// 6. Dynamic Theme Engine
function applyDynamicTheme(accentRGB) {
    document.documentElement.style.setProperty('--accent-color', `rgb(${accentRGB})`);
    document.documentElement.style.setProperty('--accent-rgb', accentRGB);
    
    if (bannerBg) {
        bannerBg.style.background = `linear-gradient(135deg, rgba(${accentRGB}, 0.75) 0%, rgba(15, 15, 18, 0.95) 100%)`;
    }
}

// 7. Load Active Track
function loadTrack(index) {
    if (currentQueue.length === 0) return;
    
    // Bounds checking
    if (index >= currentQueue.length) currentTrackIndex = 0;
    if (index < 0) currentTrackIndex = currentQueue.length - 1;

    const track = currentQueue[currentTrackIndex];
    audio.src = track.src;
    
    // Set UI values
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;
    
    const initialCover = getSongCover(track);
    playerCover.src = initialCover;

    sidebarTitle.textContent = track.title;
    sidebarArtist.textContent = track.artist;
    sidebarCover.src = initialCover;
    
    const mainVinyl = document.getElementById('main-vinyl-cover');
    if (mainVinyl) mainVinyl.src = initialCover;
    
    // Fetch high-quality artwork asynchronously
    fetchSongArtwork(track, [playerCover, sidebarCover, mainVinyl]);
    
    const focusTitle = document.getElementById('focus-title');
    const focusArtist = document.getElementById('focus-artist');
    if (focusTitle) focusTitle.textContent = track.title;
    if (focusArtist) focusArtist.textContent = track.artist;

    // Document Title update
    document.title = `${track.title} • My List`;

    // Apply dynamic theme accent colors
    applyDynamicTheme(track.accentRGB || '255, 215, 0');

    // Update Heart/Like state
    if (likedSongs.includes(track.id)) {
        likeBtn.classList.add('liked');
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        likeBtn.classList.remove('liked');
        likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    }

    // Refresh Active UI row highlights
    highlightActiveElements(track.id);

    // Reset Progress bar
    progressSlider.value = 0;
    progressFill.style.width = '0%';
    timeCurrent.textContent = "0:00";

    // Setup Lyrics Scroll
    setupLyrics(track.lyrics);

    // Update Queue Sidebar view
    renderQueueList();
}

// Highlight currently playing card and row
function highlightActiveElements(trackId) {
    // Card highlights
    document.querySelectorAll('.track-card').forEach(card => {
        const cId = card.dataset.id;
        const parsedId = isNaN(cId) ? cId : parseInt(cId);
        if (parsedId === trackId) {
            card.classList.add('active-card');
            const icon = card.querySelector('.card-play-btn i');
            if (icon) {
                icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
            }
        } else {
            card.classList.remove('active-card');
            const icon = card.querySelector('.card-play-btn i');
            if (icon) icon.className = 'fas fa-play';
        }
    });

    // Row highlights
    document.querySelectorAll('.table-row').forEach(row => {
        const rId = row.dataset.id;
        const parsedId = isNaN(rId) ? rId : parseInt(rId);
        if (parsedId === trackId) {
            row.classList.add('active-row');
            const numEl = row.querySelector('.col-num');
            if (numEl) {
                numEl.innerHTML = isPlaying ? '<i class="fas fa-volume-high anim-pulse" style="font-size:12px; color:#ffd700"></i>' : (tracks.findIndex(t => t.id === trackId) + 1);
            }
        } else {
            row.classList.remove('active-row');
            const numEl = row.querySelector('.col-num');
            if (numEl) {
                const trackIdx = tracks.findIndex(t => t.id === parsedId);
                numEl.innerHTML = trackIdx + 1;
            }
        }
    });
}

// 8. Playback Actions
function togglePlay() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function playTrack() {
    if (currentQueue.length === 0) return;
    isPlaying = true;
    
    // Initialize Web Audio API on first user interaction
    if (!isVisualizerInitialized) {
        initWebAudio();
    }

    audio.play().then(() => {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playBtn.title = "Pause";
        
        // Spin vinyl cover animations
        document.body.classList.add('playing');
        
        // Hide visualizer overlay
        if (visualizerOverlay) {
            visualizerOverlay.style.opacity = '0';
            visualizerOverlay.style.pointerEvents = 'none';
        }
        
        // Start Canvas drawing
        if (animationFrameId === null) {
            drawVisualizer();
        }

        // Keep highlight icons sync'd
        const activeTrack = currentQueue[currentTrackIndex];
        if (activeTrack) highlightActiveElements(activeTrack.id);
    }).catch(err => {
        console.warn("Playback prevented or blocked:", err);
        isPlaying = false;
    });
}

function pauseTrack() {
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    playBtn.title = "Play";
    
    document.body.classList.remove('playing');
    
    const activeTrack = currentQueue[currentTrackIndex];
    if (activeTrack) highlightActiveElements(activeTrack.id);
}

function nextTrack() {
    if (repeatMode === 'one') {
        audio.currentTime = 0;
        playTrack();
        return;
    }
    
    if (shuffleMode) {
        currentTrackIndex = Math.floor(Math.random() * currentQueue.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % currentQueue.length;
    }
    loadTrack(currentTrackIndex);
    playTrack();
}

function prevTrack() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }

    if (shuffleMode) {
        currentTrackIndex = Math.floor(Math.random() * currentQueue.length);
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + currentQueue.length) % currentQueue.length;
    }
    loadTrack(currentTrackIndex);
    playTrack();
}

function handleTrackEnded() {
    if (repeatMode === 'one') {
        audio.currentTime = 0;
        playTrack();
    } else if (repeatMode === 'all' || currentTrackIndex < currentQueue.length - 1) {
        nextTrack();
    } else {
        pauseTrack();
    }
}

// 9. Liked Songs Management
function toggleLike() {
    if (currentQueue.length === 0) return;
    const track = currentQueue[currentTrackIndex];
    const index = likedSongs.indexOf(track.id);

    if (index === -1) {
        likedSongs.push(track.id);
        likeBtn.classList.add('liked');
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        likedSongs.splice(index, 1);
        likeBtn.classList.remove('liked');
        likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    }

    localStorage.setItem('swaram_liked_songs', JSON.stringify(likedSongs));
    updatePlaylistCounts();

    if (currentPlaylist === 'liked') {
        currentQueue = tracks.filter(t => likedSongs.includes(t.id));
        filterPlaylistDisplay();
        
        if (currentQueue.length === 0) {
            pauseTrack();
        } else if (currentTrackIndex >= currentQueue.length) {
            currentTrackIndex = 0;
            loadTrack(0);
        }
    }
}

// 9_download. Song Download helper
function downloadSong(track, btnElement = null) {
    if (!track || !track.src) return;
    
    const downloadUrl = track.src.replace('/upload/', '/upload/fl_attachment/');
    
    if (btnElement) {
        const originalHTML = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btnElement.style.pointerEvents = 'none';
        
        setTimeout(() => {
            btnElement.innerHTML = '<i class="fas fa-check"></i>';
            btnElement.style.color = '#ffd700';
            
            setTimeout(() => {
                btnElement.innerHTML = originalHTML;
                btnElement.style.color = '';
                btnElement.style.pointerEvents = '';
            }, 1500);
        }, 800);
    }
    
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `${track.title} - ${track.artist}.mp3`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// 9b. Playlists filtering selection
function selectPlaylist(playlistId) {
    currentPlaylist = playlistId;
    
    document.querySelectorAll('.playlists-list .playlist-item').forEach(el => el.classList.remove('active-playlist'));
    
    // Handle custom elements active highlight
    const activeEl = document.getElementById(`playlist-${playlistId}`) || document.querySelector(`[data-playlist-id="${playlistId}"]`);
    if (activeEl) activeEl.classList.add('active-playlist');
    
    if (playlistId === 'all') {
        currentQueue = [...tracks];
        sectionTitle.textContent = "All Songs";
    } else if (playlistId === 'mass') {
        currentQueue = tracks.filter(t => t.category === 'mass');
        sectionTitle.textContent = "Mass Songs";
    } else if (playlistId === 'nice') {
        currentQueue = tracks.filter(t => t.category === 'nice');
        sectionTitle.textContent = "Nice Songs";
    } else if (playlistId === 'melodies') {
        currentQueue = tracks.filter(t => t.category === 'melodies');
        sectionTitle.textContent = "Melodies";
    } else if (playlistId === 'vibes') {
        currentQueue = tracks.filter(t => t.category === 'vibes');
        sectionTitle.textContent = "Full Vibes";
    } else if (playlistId === 'liked') {
        currentQueue = tracks.filter(t => likedSongs.includes(t.id));
        sectionTitle.textContent = "Liked Songs";
    } else if (customPlaylists[playlistId]) {
        currentQueue = tracks.filter(t => customPlaylists[playlistId].includes(t.id));
        sectionTitle.textContent = playlistId;
    }
    
    filterPlaylistDisplay();
    
    if (currentQueue.length > 0) {
        currentTrackIndex = 0;
        loadTrack(0);
    } else {
        tracksGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-sub)">
                <i class="fas fa-compact-disc" style="font-size: 48px; margin-bottom: 16px; color: #ffd700"></i>
                <h3>No songs in this playlist</h3>
                <p style="margin-top: 8px; font-size: 14px">Upload files or add songs to compile your royal vibe.</p>
            </div>
        `;
        tableRows.innerHTML = '';
    }
}

// 9c. Render Custom Playlists Sidebar
function renderCustomPlaylists() {
    const listEl = document.getElementById('custom-playlists-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    
    Object.keys(customPlaylists).forEach(name => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        if (currentPlaylist === name) item.className += ' active-playlist';
        item.dataset.playlistId = name;
        item.innerHTML = `
            <div class="playlist-icon-box royal-gradient-1">
                <i class="fas fa-list-ul"></i>
            </div>
            <div class="playlist-info" style="flex: 1;">
                <span class="playlist-name">${name}</span>
                <span class="playlist-tracks-count">${customPlaylists[name].length} song${customPlaylists[name].length !== 1 ? 's' : ''}</span>
            </div>
            <button class="row-opt-btn delete-playlist-btn" title="Delete Playlist" style="color: var(--text-sub); border:none; background:transparent; cursor:pointer;">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        item.addEventListener('click', (e) => {
            if (e.target.closest('.delete-playlist-btn')) {
                e.stopPropagation();
                if (confirm(`Are you sure you want to delete playlist "${name}"?`)) {
                    delete customPlaylists[name];
                    saveCustomPlaylists();
                    renderCustomPlaylists();
                    if (currentPlaylist === name) {
                        selectPlaylist('all');
                    }
                }
                return;
            }
            selectPlaylist(name);
        });
        
        listEl.appendChild(item);
    });
}

// 9d. Custom playlist context menu
let selectedTrackIdForMenu = null;
function showPlaylistMenu(trackId, x, y) {
    selectedTrackIdForMenu = trackId;
    window.selectedTrackIdForMenu = trackId; // sync for new features
    const menu = document.getElementById('playlist-dropdown-menu');
    const itemsContainer = document.getElementById('playlist-dropdown-items');
    if (!menu || !itemsContainer) return;
    
    itemsContainer.innerHTML = '';
    const plistNames = Object.keys(customPlaylists);
    
    if (plistNames.length === 0) {
        itemsContainer.innerHTML = '<div style="padding: 8px 16px; font-size:12px; color:var(--text-sub);">No custom playlists</div>';
    } else {
        plistNames.forEach(name => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            
            const isAlreadyIn = customPlaylists[name].includes(trackId);
            item.innerHTML = `
                <i class="${isAlreadyIn ? 'fas fa-check-square' : 'far fa-square'}" style="color: ${isAlreadyIn ? '#ffd700' : 'inherit'}"></i>
                <span>${name}</span>
            `;
            item.addEventListener('click', () => {
                const idx = customPlaylists[name].indexOf(trackId);
                if (idx === -1) {
                    customPlaylists[name].push(trackId);
                } else {
                    customPlaylists[name].splice(idx, 1);
                }
                saveCustomPlaylists();
                renderCustomPlaylists();
                menu.style.display = 'none';
            });
            itemsContainer.appendChild(item);
        });
    }
    
    menu.style.display = 'block';
    menu.style.left = `${Math.min(x, window.innerWidth - 220)}px`;
    menu.style.top = `${Math.min(y, window.innerHeight - 250)}px`;
}

// 9e. Update playlist counts
function updatePlaylistCounts() {
    const allCount = document.getElementById('all-count');
    const massCount = document.getElementById('mass-count');
    const niceCount = document.getElementById('nice-count');
    const melodiesCount = document.getElementById('melodies-count');
    const vibesCount = document.getElementById('vibes-count');
    const likedCountEl = document.getElementById('liked-count');
    
    if (allCount) allCount.textContent = `${tracks.length} song${tracks.length !== 1 ? 's' : ''}`;
    if (massCount) {
        const c = tracks.filter(t => t.category === 'mass').length;
        massCount.textContent = `${c} song${c !== 1 ? 's' : ''}`;
    }
    if (niceCount) {
        const c = tracks.filter(t => t.category === 'nice').length;
        niceCount.textContent = `${c} song${c !== 1 ? 's' : ''}`;
    }
    if (melodiesCount) {
        const c = tracks.filter(t => t.category === 'melodies').length;
        melodiesCount.textContent = `${c} song${c !== 1 ? 's' : ''}`;
    }
    if (vibesCount) {
        const c = tracks.filter(t => t.category === 'vibes').length;
        vibesCount.textContent = `${c} song${c !== 1 ? 's' : ''}`;
    }
    if (likedCountEl) {
        likedCountEl.textContent = `${likedSongs.length} song${likedSongs.length !== 1 ? 's' : ''}`;
    }
}

// 10. Shuffle & Repeat Toggles
function toggleShuffle() {
    shuffleMode = !shuffleMode;
    shuffleBtn.classList.toggle('active-control', shuffleMode);
}

function toggleRepeat() {
    if (repeatMode === 'none') {
        repeatMode = 'all';
        repeatBtn.classList.add('active-control');
        repeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        repeatBtn.title = "Repeat One";
    } else if (repeatMode === 'all') {
        repeatMode = 'one';
        repeatBtn.classList.add('active-control');
        repeatBtn.innerHTML = '<i class="fas fa-repeat"></i><span style="font-size:7px; position:absolute; bottom:6px; right:6px; font-weight:800; color:#ffd700">1</span>'; 
        repeatBtn.title = "Repeat Off";
    } else {
        repeatMode = 'none';
        repeatBtn.classList.remove('active-control');
        repeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        repeatBtn.title = "Repeat All";
    }
}

// 11. Audio Progress Handling
function updateProgress() {
    if (!audio.duration) return;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressSlider.value = progressPercent;
    progressFill.style.width = `${progressPercent}%`;
    timeCurrent.textContent = formatTime(audio.currentTime);

    // Sync active lyric scrolling
    updateLyricsHighlight();
}

function seek(e) {
    if (!audio.duration) return;
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
}

// 12. Volume Adjustments
function setVolume(val) {
    audio.volume = val / 100;
    volumeFill.style.width = `${val}%`;
    
    const volIcon = volumeBtn.querySelector('i');
    if (val == 0) {
        volIcon.className = 'fas fa-volume-mute';
    } else if (val < 35) {
        volIcon.className = 'fas fa-volume-low';
    } else if (val < 70) {
        volIcon.className = 'fas fa-volume-medium';
    } else {
        volIcon.className = 'fas fa-volume-high';
    }
}

let lastVolume = 70;
function toggleMute() {
    if (audio.volume > 0) {
        lastVolume = volumeSlider.value;
        setVolume(0);
        volumeSlider.value = 0;
    } else {
        setVolume(lastVolume);
        volumeSlider.value = lastVolume;
    }
}

// Helper: Format Time string
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// 13. UI Rendering Lists
function renderTrackGrid(songList) {
    tracksGrid.innerHTML = '';
    songList.forEach(track => {
        const card = document.createElement('div');
        card.className = 'track-card';
        card.dataset.id = track.id;
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${getSongCover(track)}" alt="cover" class="card-img" loading="lazy">
                <button class="card-play-btn" title="Play">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="card-metadata">
                <div class="card-title-row">
                    <h4 class="card-title">${track.title}</h4>
                    <div style="display:flex; gap:6px; align-items:center;">
                        <button class="card-download-btn" data-id="${track.id}" title="Download Song" style="background:transparent; border:none; color:var(--text-sub); cursor:pointer; padding:4px;">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="card-opt-btn" data-id="${track.id}" title="Playlist Options">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>
                <p class="card-artist">${track.artist}</p>
            </div>
        `;
        tracksGrid.appendChild(card);
    });
}

function renderTrackTable(songList) {
    tableRows.innerHTML = '';
    songList.forEach((track, idx) => {
        const row = document.createElement('div');
        row.className = 'table-row';
        row.dataset.id = track.id;
        row.innerHTML = `
            <div class="col-num">${idx + 1}</div>
            <div class="col-title">
                <img src="${getSongCover(track)}" alt="cover" class="row-img" loading="lazy">
                <div class="row-text">
                    <span class="row-title">${track.title}</span>
                    <span class="row-artist">${track.artist}</span>
                </div>
            </div>
            <div class="col-album">${track.album}</div>
            <div class="col-duration">3:00</div>
            <div class="col-actions-header" style="display:flex; gap:10px; align-items:center; justify-content:flex-end;">
                <button class="row-download-btn" data-id="${track.id}" title="Download Song" style="background:transparent; border:none; color:var(--text-sub); cursor:pointer; padding:4px;">
                    <i class="fas fa-download"></i>
                </button>
                <button class="row-opt-btn" data-id="${track.id}" title="Playlist Options">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        `;
        tableRows.appendChild(row);
    });
}

function filterPlaylistDisplay() {
    renderTrackGrid(currentQueue);
    renderTrackTable(currentQueue);
    
    if (currentQueue.length > 0) {
        const activeTrack = currentQueue[currentTrackIndex];
        if (activeTrack) highlightActiveElements(activeTrack.id);
    }
}

function renderQueueList() {
    if (!queueList) return;
    queueList.innerHTML = '';
    currentQueue.forEach((track, idx) => {
        const item = document.createElement('div');
        item.className = `queue-item ${idx === currentTrackIndex ? 'active-queue' : ''}`;
        item.dataset.id = track.id;
        item.innerHTML = `
            <img src="${getSongCover(track)}" class="queue-img" alt="queue art">
            <div class="queue-meta">
                <span class="queue-title">${track.title}</span>
                <span class="queue-artist">${track.artist}</span>
            </div>
            <i class="fas fa-bars queue-drag-icon"></i>
        `;
        
        item.addEventListener('click', () => {
            currentTrackIndex = idx;
            loadTrack(idx);
            playTrack();
        });
        
        queueList.appendChild(item);
    });
}

// 14. Search Functionality
function searchSongs() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        clearSearch.style.display = 'none';
        filterPlaylistDisplay();
        return;
    }
    
    clearSearch.style.display = 'flex';
    let pool = [...tracks];
    if (currentPlaylist === 'mass') pool = tracks.filter(t => t.category === 'mass');
    else if (currentPlaylist === 'nice') pool = tracks.filter(t => t.category === 'nice');
    else if (currentPlaylist === 'melodies') pool = tracks.filter(t => t.category === 'melodies');
    else if (currentPlaylist === 'vibes') pool = tracks.filter(t => t.category === 'vibes');
    else if (currentPlaylist === 'liked') pool = tracks.filter(t => likedSongs.includes(t.id));
    else if (customPlaylists[currentPlaylist]) pool = tracks.filter(t => customPlaylists[currentPlaylist].includes(t.id));
    
    const filtered = pool.filter(song => 
        song.title.toLowerCase().includes(query) || 
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
    );

    renderTrackGrid(filtered);
    renderTrackTable(filtered);
}

// 15. Web Audio API Canvas Visualizer & Equalizer Setup
function initWebAudio() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContextClass();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; 

        sourceNode = audioContext.createMediaElementSource(audio);
        
        // 5-band EQ
        equalizerFilters = EQ_BANDS.map((freq, index) => {
            const filter = audioContext.createBiquadFilter();
            filter.frequency.value = freq;
            filter.gain.value = 0; // default Flat
            if (index === 0) {
                filter.type = 'lowshelf';
            } else if (index === EQ_BANDS.length - 1) {
                filter.type = 'highshelf';
            } else {
                filter.type = 'peaking';
                filter.Q.value = 1.0;
            }
            return filter;
        });

        // Connect chain in series: sourceNode -> EQ Filter 0 -> EQ Filter 1 -> ... -> analyser -> destination
        let lastNode = sourceNode;
        equalizerFilters.forEach(filter => {
            lastNode.connect(filter);
            lastNode = filter;
        });
        lastNode.connect(analyser);
        analyser.connect(audioContext.destination);

        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        
        isVisualizerInitialized = true;
        console.log("Web Audio API successfully connected to audio element with Equalizers.");
        
        bindEQSliders();
    } catch (err) {
        console.warn("Web Audio API not supported or CORS blocked. Initiating fallback visualizer simulation.", err);
        isVisualizerInitialized = true;
        analyser = null; 
    }
}

// Connect EQ Sliders to Web Audio Node Chain
function bindEQSliders() {
    EQ_BANDS.forEach((freq, index) => {
        const slider = document.getElementById(`eq-band-${index}`);
        const display = document.getElementById(`eq-val-${index}`);
        if (!slider) return;
        
        slider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            if (display) display.textContent = `${val > 0 ? '+' : ''}${val}dB`;
            
            if (equalizerFilters[index]) {
                equalizerFilters[index].gain.value = val;
            }
        });
    });
}

function applyEQPreset(presetName) {
    const gains = EQ_PRESETS[presetName];
    if (!gains) return;
    
    gains.forEach((gain, index) => {
        const slider = document.getElementById(`eq-band-${index}`);
        const display = document.getElementById(`eq-val-${index}`);
        if (slider) slider.value = gain;
        if (display) display.textContent = `${gain > 0 ? '+' : ''}${gain}dB`;
        
        if (equalizerFilters[index]) {
            equalizerFilters[index].gain.value = gain;
        }
    });
}

// Canvas Sizing
function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    canvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

// Draw Loop for Canvas Visualizer (Instagram Neon/Gold colors)
function drawVisualizer() {
    if (!canvas) return;
    animationFrameId = requestAnimationFrame(drawVisualizer);

    const width = canvas.width / window.devicePixelRatio;
    const height = canvas.height / window.devicePixelRatio;
    
    // Clear canvas
    canvasCtx.clearRect(0, 0, width, height);

    if (!isPlaying) {
        // Draw static golden wave line when paused
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgba(255, 215, 0, 0.2)';
        canvasCtx.beginPath();
        canvasCtx.moveTo(0, height / 2);
        canvasCtx.lineTo(width, height / 2);
        canvasCtx.stroke();
        return;
    }

    if (analyser) {
        analyser.getByteFrequencyData(dataArray);
    } else {
        // Fallback simulation
        if (!dataArray) dataArray = new Uint8Array(128);
        for (let i = 0; i < dataArray.length; i++) {
            const time = Date.now() * 0.004;
            const factor = Math.sin(time + i * 0.1) * Math.cos(time * 0.5 + i * 0.05);
            dataArray[i] = Math.abs(factor) * 160 + Math.random() * 20;
        }
    }

    // Instagram brand gradients
    const gradient = canvasCtx.createLinearGradient(0, height, 0, 0);
    gradient.addColorStop(0, '#f09433');
    gradient.addColorStop(0.25, '#e6683c');
    gradient.addColorStop(0.5, '#dc2743');
    gradient.addColorStop(0.75, '#cc2366');
    gradient.addColorStop(1.0, '#bc1888');

    // DRAW MODES
    if (activeVisMode === 'bars') {
        const barWidth = (width / dataArray.length) * 1.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < dataArray.length; i++) {
            barHeight = (dataArray[i] / 255) * height * 0.75;
            canvasCtx.fillStyle = gradient;
            // Rounded corners on bars
            canvasCtx.fillRect(x, height - barHeight, barWidth - 3, barHeight);
            x += barWidth;
        }
    } else if (activeVisMode === 'circle') {
        const centerX = width / 2;
        const centerY = height / 2;
        const baseRadius = Math.min(width, height) * 0.32;
        
        let sum = 0;
        for(let i=0; i<dataArray.length; i++) sum += dataArray[i];
        const avgVolume = sum / dataArray.length;
        const radiusPulse = (avgVolume / 255) * 16;

        canvasCtx.beginPath();
        canvasCtx.arc(centerX, centerY, baseRadius + radiusPulse, 0, 2 * Math.PI);
        canvasCtx.strokeStyle = 'rgba(255, 215, 0, 0.15)';
        canvasCtx.lineWidth = 6;
        canvasCtx.stroke();

        const numBars = 72;
        canvasCtx.lineWidth = 2.5;
        
        for (let i = 0; i < numBars; i++) {
            const angle = (i / numBars) * Math.PI * 2;
            const dataIdx = Math.floor((i / numBars) * dataArray.length);
            const value = (dataArray[dataIdx] / 255) * 40;
            
            const rStart = baseRadius + radiusPulse;
            const rEnd = rStart + value;
            
            const xS = centerX + Math.cos(angle) * rStart;
            const yS = centerY + Math.sin(angle) * rStart;
            const xE = centerX + Math.cos(angle) * rEnd;
            const yE = centerY + Math.sin(angle) * rEnd;

            canvasCtx.strokeStyle = '#ffd700'; 
            canvasCtx.beginPath();
            canvasCtx.moveTo(xS, yS);
            canvasCtx.lineTo(xE, yE);
            canvasCtx.stroke();
        }
    } else if (activeVisMode === 'wave') {
        canvasCtx.lineWidth = 3;
        canvasCtx.strokeStyle = '#ffd700';
        canvasCtx.beginPath();

        const sliceWidth = width / dataArray.length;
        let x = 0;

        for (let i = 0; i < dataArray.length; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * height) / 2;

            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        canvasCtx.lineTo(width, height / 2);
        canvasCtx.stroke();

        canvasCtx.shadowColor = 'rgba(255, 215, 0, 0.4)';
        canvasCtx.shadowBlur = 10;
        canvasCtx.strokeStyle = '#ffffff';
        canvasCtx.lineWidth = 1;
        canvasCtx.stroke();
        canvasCtx.shadowBlur = 0; 
    }
}

// 16. Scrolling Lyrics Setup
let activeTrackLyrics = [];

function setupLyrics(lyricsData) {
    activeTrackLyrics = lyricsData || [];
    lyricsScroll.innerHTML = '';

    if (activeTrackLyrics.length === 0) {
        lyricsScroll.innerHTML = '<div class="lyric-line placeholder-lyric">Instrumental - No lyrics available</div>';
        return;
    }

    activeTrackLyrics.forEach((lyric, idx) => {
        const line = document.createElement('div');
        line.className = 'lyric-line';
        line.dataset.index = idx;
        line.dataset.time = lyric.time;
        line.textContent = lyric.text;
        
        line.addEventListener('click', () => {
            audio.currentTime = lyric.time;
            playTrack();
        });

        lyricsScroll.appendChild(line);
    });
}

function updateLyricsHighlight() {
    if (activeTrackLyrics.length === 0) return;

    const currentTime = audio.currentTime;
    let activeIndex = -1;

    for (let i = 0; i < activeTrackLyrics.length; i++) {
        if (currentTime >= activeTrackLyrics[i].time) {
            activeIndex = i;
        } else {
            break;
        }
    }

    if (activeIndex !== -1) {
        const lyricLines = lyricsScroll.querySelectorAll('.lyric-line');
        let activeLineChanged = false;

        lyricLines.forEach((line, idx) => {
            if (idx === activeIndex) {
                if (!line.classList.contains('active-lyric')) {
                    line.classList.add('active-lyric');
                    activeLineChanged = true;
                }
            } else {
                line.classList.remove('active-lyric');
            }
        });

        if (activeLineChanged) {
            scrollToActiveLyric();
        }
    }
}

function scrollToActiveLyric() {
    const activeLine = lyricsScroll.querySelector('.active-lyric');
    if (!activeLine) return;
    
    const containerHeight = lyricsScroll.clientHeight;
    const lineOffset = activeLine.offsetTop;
    const lineHeight = activeLine.clientHeight;
    
    lyricsScroll.scrollTop = lineOffset - (containerHeight / 2) + (lineHeight / 2);
}

// 17. Fullscreen Visualizer toggle
function toggleFullscreen() {
    const isFullscreen = document.fullscreenElement !== null;

    if (!isFullscreen) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
        document.body.classList.add('fullscreen-mode');
        playerFullscreenBtn.innerHTML = '<i class="fas fa-minimize"></i>';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        document.body.classList.remove('fullscreen-mode');
        playerFullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen-mode');
        playerFullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
});

// 18. Simulated Cloud file upload logic
function bindCloudUploadUI() {
    const btnOpen = document.getElementById('btn-cloud-upload');
    const btnClose = document.getElementById('close-upload-modal');
    const modal = document.getElementById('upload-modal');
    const form = document.getElementById('cloud-upload-form');
    const dropZone = document.getElementById('audio-drop-zone');
    const fileInput = document.getElementById('cloud-file-input');
    const fileNameIndicator = document.getElementById('uploaded-file-name');
    
    if (!modal) return;
    
    btnOpen.addEventListener('click', () => {
        modal.classList.add('active');
    });
    
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
        form.reset();
        fileNameIndicator.textContent = "No file selected";
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            form.reset();
            fileNameIndicator.textContent = "No file selected";
        }
    });
    
    dropZone.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            fileNameIndicator.textContent = file.name;
            const titleInput = document.getElementById('song-title');
            if (titleInput && !titleInput.value) {
                titleInput.value = file.name.replace(/\.[^/.]+$/, "");
            }
        }
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
        }, false);
    });
    
    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            fileInput.files = files;
            fileNameIndicator.textContent = files[0].name;
            const titleInput = document.getElementById('song-title');
            if (titleInput && !titleInput.value) {
                titleInput.value = files[0].name.replace(/\.[^/.]+$/, "");
            }
        }
    });
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (fileInput.files.length === 0) {
            alert("Please select an audio file.");
            return;
        }
        
        const file = fileInput.files[0];
        const title = document.getElementById('song-title').value.trim();
        const artist = document.getElementById('song-artist').value.trim();
        const album = document.getElementById('song-album').value.trim();
        const category = document.getElementById('song-category').value;
        
        const newSong = {
            id: 'cloud_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            title: title,
            artist: artist,
            album: album || 'Cloud Album',
            category: category,
            file: file, // Store binary file blob
            accentRGB: '255, 215, 0'
        };
        
        try {
            await addCloudSong(newSong);
            modal.classList.remove('active');
            form.reset();
            fileNameIndicator.textContent = "No file selected";
            
            alert("Successfully uploaded to My List Cloud!");
            
            // Reload tracks dynamically
            const allTracks = await loadAllTracks();
            tracks.length = 0; 
            tracks.push(...allTracks); 
            tagTracks();
            updatePlaylistCounts();
            selectPlaylist(currentPlaylist);
        } catch (err) {
            console.error("Error saving to cloud:", err);
            alert("Failed to save to cloud: " + err.message);
        }
    });
}

// 19a. "Local Music" nav item — multi-file picker
function bindNavLocalUI() {
    const navLocal = document.getElementById('nav-local');
    const navLocalInput = document.getElementById('nav-local-file-input');

    if (!navLocal || !navLocalInput) return;

    navLocal.addEventListener('click', (e) => {
        e.preventDefault();
        navLocalInput.click();
    });

    navLocalInput.addEventListener('change', () => {
        if (!navLocalInput.files || navLocalInput.files.length === 0) return;

        const files = Array.from(navLocalInput.files);
        const addedIds = [];

        files.forEach(file => {
            const objectUrl = URL.createObjectURL(file);
            const localTrack = {
                id: 'local_nav_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                title: file.name.replace(/\.[^/.]+$/, ''),
                artist: 'Local Music',
                album: 'Local Files',
                src: objectUrl,
                cover: 'icon.png',
                accentRGB: '255, 200, 50',
                lyrics: [{ time: 0, text: '🎵 Playing local audio file...' }],
                category: 'vibes'
            };
            tracks.push(localTrack);
            addedIds.push(localTrack.id);
        });

        tagTracks();
        updatePlaylistCounts();

        // Switch to All Songs and play the first newly added local track
        currentPlaylist = 'all';
        document.querySelectorAll('.playlist-item').forEach(el => el.classList.remove('active-playlist'));
        const plistAll = document.getElementById('playlist-all');
        if (plistAll) plistAll.classList.add('active-playlist');

        filterPlaylistDisplay();
        currentQueue = [...tracks];

        const firstIndex = currentQueue.findIndex(t => t.id === addedIds[0]);
        if (firstIndex !== -1) {
            currentTrackIndex = firstIndex;
            loadTrack(firstIndex);
            playTrack();
        }

        // Mark nav-local as active
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        navLocal.classList.add('active');

        // Reset input so the same files can be picked again
        navLocalInput.value = '';
    });
}

// 19. Local file instant playback
function bindLocalPlayUI() {
    const btnLocal = document.getElementById('btn-local-play');
    const localInput = document.getElementById('local-file-input');
    
    if (!btnLocal || !localInput) return;
    
    btnLocal.addEventListener('click', () => {
        localInput.click();
    });
    
    localInput.addEventListener('change', () => {
        if (localInput.files.length > 0) {
            const file = localInput.files[0];
            const objectUrl = URL.createObjectURL(file);
            
            const localTrack = {
                id: 'local_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                title: file.name.replace(/\.[^/.]+$/, ""),
                artist: 'Local Media',
                album: 'Local File',
                src: objectUrl,
                cover: 'insta logo.jpg',
                accentRGB: '255, 215, 0', 
                lyrics: [{ time: 0, text: "Playing local audio file..." }],
                category: 'vibes' 
            };
            
            tracks.push(localTrack);
            tagTracks();
            updatePlaylistCounts();
            
            currentQueue = [...tracks];
            const index = currentQueue.findIndex(t => t.id === localTrack.id);
            currentPlaylist = 'all';
            
            document.querySelectorAll('.playlist-item').forEach(el => el.classList.remove('active-playlist'));
            const plistAll = document.getElementById('playlist-all');
            if (plistAll) plistAll.classList.add('active-playlist');
            
            filterPlaylistDisplay();
            currentTrackIndex = index;
            loadTrack(index);
            playTrack();
        }
    });
}

// 20. 3D Card Hover Tilt Interaction
function init3DCardTilt() {
    const card = document.getElementById('player-3d-card');
    if (!card) return;
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = (yc - y) / 10;
        const angleY = (x - xc) / 10;
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
}

// 21. Mobile Sidebar Menu Toggle
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!toggleBtn || !sidebar || !backdrop) return;

    function openSidebar() {
        sidebar.classList.add('mobile-open');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('mobile-open');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('mobile-open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    backdrop.addEventListener('click', closeSidebar);

    // Close sidebar when any nav item or playlist is clicked on mobile
    sidebar.querySelectorAll('.nav-item, .playlist-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 900) closeSidebar();
        });
    });

    // Update toggle icon
    const observer = new MutationObserver(() => {
        const icon = toggleBtn.querySelector('i');
        if (sidebar.classList.contains('mobile-open')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
}

// ============================================================
// 22. TOAST NOTIFICATION SYSTEM
// ============================================================
function showToast(title, msg = '', icon = 'fas fa-music', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="${icon} toast-icon"></i>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
        </div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 350);
    }, duration);
}

// ============================================================
// 23. THEME SWITCHER
// ============================================================
const THEMES = ['gold', 'ocean', 'forest', 'sunset', 'neon', 'rose'];
let currentTheme = localStorage.getItem('pp_theme') || 'gold';

function applyTheme(theme) {
    THEMES.forEach(t => document.body.classList.remove(`theme-${t}`));
    if (theme !== 'gold') document.body.classList.add(`theme-${theme}`);
    currentTheme = theme;
    localStorage.setItem('pp_theme', theme);

    document.querySelectorAll('.theme-opt').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === theme);
    });
}

function initThemeSwitcher() {
    applyTheme(currentTheme);

    document.querySelectorAll('.theme-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            applyTheme(opt.dataset.theme);
            showToast('Theme Changed', `Switched to ${opt.dataset.theme.charAt(0).toUpperCase() + opt.dataset.theme.slice(1)} theme`, 'fas fa-palette');
            const dropdown = document.getElementById('theme-dropdown');
            if (dropdown) dropdown.classList.remove('open');
        });
    });

    const themeBtn = document.getElementById('theme-toggle-btn');
    const themeDropdown = document.getElementById('theme-dropdown');
    if (themeBtn && themeDropdown) {
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('open');
        });
        document.addEventListener('click', () => themeDropdown.classList.remove('open'));
    }
}

// ============================================================
// 24. PLAYBACK SPEED CONTROL
// ============================================================
let currentSpeed = 1;

function initSpeedControl() {
    const speedBtn = document.getElementById('speed-btn');
    const speedDropdown = document.getElementById('speed-dropdown');
    const speedLabel = document.getElementById('speed-label');
    if (!speedBtn || !speedDropdown) return;

    speedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speedDropdown.classList.toggle('open');
    });

    document.querySelectorAll('.speed-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            const speed = parseFloat(opt.dataset.speed);
            currentSpeed = speed;
            audio.playbackRate = speed;
            speedLabel.textContent = `${speed}×`;
            document.querySelectorAll('.speed-opt').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            speedDropdown.classList.remove('open');
            if (speed !== 1) showToast('Speed Changed', `Playing at ${speed}×`, 'fas fa-gauge-high');
        });
    });

    document.addEventListener('click', () => speedDropdown.classList.remove('open'));
}

// ============================================================
// 25. SLEEP TIMER
// ============================================================
let sleepTimerTimeout = null;
let sleepTimerInterval = null;
let sleepTimerEndTime = null;

function initSleepTimer() {
    const btn = document.getElementById('sleep-timer-btn');
    const modal = document.getElementById('sleep-modal');
    const closeBtn = document.getElementById('close-sleep-modal');
    const cancelBtn = document.getElementById('sleep-cancel-btn');
    const sleepStatus = document.getElementById('sleep-status');
    const sleepCountdown = document.getElementById('sleep-countdown');

    if (!btn) return;

    btn.addEventListener('click', () => {
        if (modal) modal.style.display = 'flex';
    });

    if (closeBtn) closeBtn.addEventListener('click', () => { if (modal) modal.style.display = 'none'; });
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

    document.querySelectorAll('.sleep-opt-btn').forEach(optBtn => {
        optBtn.addEventListener('click', () => {
            clearSleepTimer();

            const mins = optBtn.dataset.mins;
            document.querySelectorAll('.sleep-opt-btn').forEach(b => b.classList.remove('active-sleep'));
            optBtn.classList.add('active-sleep');
            btn.classList.add('active-control');

            if (mins === 'eos') {
                // End of song
                audio.addEventListener('ended', function eosHandler() {
                    pauseTrack();
                    clearSleepTimer();
                    audio.removeEventListener('ended', eosHandler);
                    showToast('Sleep Timer', 'Playback stopped — sleep tight! 🌙', 'fas fa-moon');
                }, { once: true });
                if (sleepStatus) sleepStatus.style.display = 'flex';
                if (sleepCountdown) sleepCountdown.textContent = 'Stopping after current song';
            } else {
                const ms = parseInt(mins) * 60 * 1000;
                sleepTimerEndTime = Date.now() + ms;

                sleepTimerTimeout = setTimeout(() => {
                    pauseTrack();
                    clearSleepTimer();
                    showToast('Sleep Timer', 'Playback stopped — sleep tight! 🌙', 'fas fa-moon');
                }, ms);

                sleepTimerInterval = setInterval(() => {
                    const remaining = sleepTimerEndTime - Date.now();
                    if (remaining <= 0) { clearSleepTimer(); return; }
                    const m = Math.floor(remaining / 60000);
                    const s = Math.floor((remaining % 60000) / 1000);
                    if (sleepCountdown) sleepCountdown.textContent = `Stopping in ${m}:${s < 10 ? '0' : ''}${s}`;
                }, 1000);

                if (sleepStatus) sleepStatus.style.display = 'flex';
                const m = Math.floor(ms / 60000);
                if (sleepCountdown) sleepCountdown.textContent = `Stopping in ${m}:00`;
            }

            if (modal) modal.style.display = 'none';
            showToast('Sleep Timer Set', `Music will stop in ${mins === 'eos' ? 'end of song' : mins + ' minutes'}`, 'fas fa-moon');
        });
    });

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            clearSleepTimer();
            showToast('Sleep Timer', 'Timer cancelled', 'fas fa-times');
        });
    }
}

function clearSleepTimer() {
    if (sleepTimerTimeout) clearTimeout(sleepTimerTimeout);
    if (sleepTimerInterval) clearInterval(sleepTimerInterval);
    sleepTimerTimeout = null;
    sleepTimerInterval = null;
    sleepTimerEndTime = null;

    const sleepStatus = document.getElementById('sleep-status');
    if (sleepStatus) sleepStatus.style.display = 'none';

    const btn = document.getElementById('sleep-timer-btn');
    if (btn) btn.classList.remove('active-control');

    document.querySelectorAll('.sleep-opt-btn').forEach(b => b.classList.remove('active-sleep'));
}

// ============================================================
// 26. A-B LOOP
// ============================================================
let abLoopState = 0; // 0=off, 1=A set, 2=A+B set
let abLoopA = null;
let abLoopB = null;
let abLoopInterval = null;

function initABLoop() {
    const btn = document.getElementById('ab-loop-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        if (abLoopState === 0) {
            // Set A point
            abLoopA = audio.currentTime;
            abLoopState = 1;
            btn.classList.add('ab-active-a');
            btn.classList.remove('ab-active-ab');
            showMarker('ab-marker-a', abLoopA);
            showToast('A-B Loop', `Point A set at ${formatTime(abLoopA)}`, 'fas fa-map-marker-alt');
        } else if (abLoopState === 1) {
            // Set B point
            abLoopB = audio.currentTime;
            if (abLoopB <= abLoopA) {
                showToast('A-B Loop', 'Point B must be after point A', 'fas fa-exclamation-triangle');
                return;
            }
            abLoopState = 2;
            btn.classList.remove('ab-active-a');
            btn.classList.add('ab-active-ab');
            showMarker('ab-marker-b', abLoopB);
            showToast('A-B Loop', `Looping ${formatTime(abLoopA)} → ${formatTime(abLoopB)}`, 'fas fa-repeat');

            // Start loop checking
            abLoopInterval = setInterval(() => {
                if (audio.currentTime >= abLoopB) {
                    audio.currentTime = abLoopA;
                }
            }, 100);
        } else {
            // Cancel loop
            clearABLoop();
            showToast('A-B Loop', 'Loop cancelled', 'fas fa-times');
        }
    });
}

function showMarker(id, time) {
    if (!audio.duration) return;
    const marker = document.getElementById(id);
    if (!marker) return;
    marker.style.display = 'block';
    marker.style.left = `${(time / audio.duration) * 100}%`;
}

function clearABLoop() {
    abLoopState = 0;
    abLoopA = null;
    abLoopB = null;
    if (abLoopInterval) clearInterval(abLoopInterval);
    abLoopInterval = null;

    const btn = document.getElementById('ab-loop-btn');
    if (btn) { btn.classList.remove('ab-active-a', 'ab-active-ab'); }
    ['ab-marker-a', 'ab-marker-b'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

// ============================================================
// 27. SORT ENGINE
// ============================================================
let currentSort = 'default';

function initSortControl() {
    const sortSelect = document.getElementById('sort-select');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        applySortAndRender();
    });
}

function applySortAndRender() {
    let sorted = [...currentQueue];

    switch (currentSort) {
        case 'title-asc': sorted.sort((a, b) => a.title.localeCompare(b.title)); break;
        case 'title-desc': sorted.sort((a, b) => b.title.localeCompare(a.title)); break;
        case 'artist-asc': sorted.sort((a, b) => a.artist.localeCompare(b.artist)); break;
        case 'artist-desc': sorted.sort((a, b) => b.artist.localeCompare(a.artist)); break;
        case 'duration-asc': sorted.sort((a, b) => (a.duration || 0) - (b.duration || 0)); break;
        case 'duration-desc': sorted.sort((a, b) => (b.duration || 0) - (a.duration || 0)); break;
        case 'most-played': {
            const counts = getPlayCounts();
            sorted.sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));
            break;
        }
        case 'top-rated': {
            const ratings = getTrackRatings();
            sorted.sort((a, b) => (ratings[b.id] || 0) - (ratings[a.id] || 0));
            break;
        }
        default: break;
    }

    renderTrackGrid(sorted);
    renderTrackTable(sorted);
}

// ============================================================
// 28. RECENTLY PLAYED TRACKING
// ============================================================
const MAX_RECENT = 30;

function getRecentlyPlayed() {
    return JSON.parse(localStorage.getItem('pp_recently_played') || '[]');
}

function addToRecentlyPlayed(trackId) {
    let recent = getRecentlyPlayed();
    recent = recent.filter(id => id !== trackId);
    recent.unshift(trackId);
    if (recent.length > MAX_RECENT) recent = recent.slice(0, MAX_RECENT);
    localStorage.setItem('pp_recently_played', JSON.stringify(recent));
}

// ============================================================
// 29. PLAY COUNT TRACKING
// ============================================================
function getPlayCounts() {
    return JSON.parse(localStorage.getItem('pp_play_counts') || '{}');
}

function incrementPlayCount(trackId) {
    const counts = getPlayCounts();
    counts[trackId] = (counts[trackId] || 0) + 1;
    localStorage.setItem('pp_play_counts', JSON.stringify(counts));

    // Also track total listens
    let total = parseInt(localStorage.getItem('pp_total_plays') || '0');
    localStorage.setItem('pp_total_plays', total + 1);
}

// Track listening time
let trackStartTime = null;

function startListeningTimer() {
    trackStartTime = Date.now();
}

function stopListeningTimer() {
    if (trackStartTime) {
        const elapsed = Math.floor((Date.now() - trackStartTime) / 1000);
        let total = parseInt(localStorage.getItem('pp_total_listen_secs') || '0');
        localStorage.setItem('pp_total_listen_secs', total + elapsed);
        trackStartTime = null;
    }
}

// ============================================================
// 30. TRACK RATINGS (1-5 STARS)
// ============================================================
function getTrackRatings() {
    return JSON.parse(localStorage.getItem('pp_track_ratings') || '{}');
}

function setTrackRating(trackId, rating) {
    const ratings = getTrackRatings();
    ratings[trackId] = rating;
    localStorage.setItem('pp_track_ratings', JSON.stringify(ratings));
}

function getTrackRating(trackId) {
    return getTrackRatings()[trackId] || 0;
}

function initStarRating() {
    const ratingEl = document.getElementById('fs-rating');
    if (!ratingEl) return;

    ratingEl.addEventListener('mouseover', (e) => {
        const star = e.target.closest('[data-star]');
        if (!star) return;
        const hoverRating = parseInt(star.dataset.star);
        ratingEl.querySelectorAll('[data-star]').forEach(s => {
            const n = parseInt(s.dataset.star);
            s.className = n <= hoverRating ? 'fas fa-star hovered' : 'far fa-star';
        });
    });

    ratingEl.addEventListener('mouseleave', () => {
        const track = currentQueue[currentTrackIndex];
        if (track) updateStarDisplay(track.id);
    });

    ratingEl.addEventListener('click', (e) => {
        const star = e.target.closest('[data-star]');
        if (!star) return;
        const track = currentQueue[currentTrackIndex];
        if (!track) return;
        const rating = parseInt(star.dataset.star);
        setTrackRating(track.id, rating);
        updateStarDisplay(track.id);
        showToast('Track Rated', `${rating} star${rating !== 1 ? 's' : ''} for "${track.title}"`, 'fas fa-star');
    });
}

function updateStarDisplay(trackId) {
    const ratingEl = document.getElementById('fs-rating');
    if (!ratingEl) return;
    const rating = getTrackRating(trackId);
    ratingEl.querySelectorAll('[data-star]').forEach(s => {
        const n = parseInt(s.dataset.star);
        s.className = n <= rating ? 'fas fa-star filled' : 'far fa-star';
    });
}

// ============================================================
// 31. LISTENING STATS
// ============================================================
function initStatsNav() {
    const navStats = document.getElementById('nav-stats');
    const statsModal = document.getElementById('stats-modal');
    const closeBtn = document.getElementById('close-stats-modal');

    if (navStats) {
        navStats.addEventListener('click', (e) => {
            e.preventDefault();
            renderStats();
            if (statsModal) statsModal.style.display = 'flex';
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', () => { if (statsModal) statsModal.style.display = 'none'; });
    if (statsModal) statsModal.addEventListener('click', e => { if (e.target === statsModal) statsModal.style.display = 'none'; });
}

function renderStats() {
    const statsGrid = document.getElementById('stats-grid');
    const topList = document.getElementById('stats-top-list');
    const recentList = document.getElementById('stats-recent-list');

    const totalPlays = parseInt(localStorage.getItem('pp_total_plays') || '0');
    const totalSecs = parseInt(localStorage.getItem('pp_total_listen_secs') || '0');
    const totalHours = (totalSecs / 3600).toFixed(1);
    const liked = likedSongs.length;

    if (statsGrid) {
        statsGrid.innerHTML = `
            <div class="stat-card">
                <span class="stat-value">${totalPlays}</span>
                <span class="stat-label">Total Plays</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${totalHours}h</span>
                <span class="stat-label">Listening Time</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${liked}</span>
                <span class="stat-label">Liked Songs</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${tracks.length}</span>
                <span class="stat-label">Total Songs</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${Object.keys(customPlaylists).length}</span>
                <span class="stat-label">Playlists</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${currentSpeed}×</span>
                <span class="stat-label">Speed</span>
            </div>
        `;
    }

    if (topList) {
        const counts = getPlayCounts();
        const sorted = tracks
            .filter(t => counts[t.id] > 0)
            .sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0))
            .slice(0, 10);

        topList.innerHTML = sorted.length ? sorted.map((t, i) => `
            <div class="stats-track-row">
                <img src="${getSongCover(t)}" alt="${t.title}">
                <div class="stats-track-meta">
                    <span class="stats-track-title">${t.title}</span>
                    <span class="stats-track-count">${t.artist}</span>
                </div>
                <span class="stats-badge">${counts[t.id]}×</span>
            </div>
        `).join('') : '<div style="color:var(--text-sub);font-size:13px;padding:10px;">No plays recorded yet.</div>';
    }

    if (recentList) {
        const recent = getRecentlyPlayed().slice(0, 10);
        const recentTracks = recent.map(id => tracks.find(t => t.id === id || t.id === parseInt(id))).filter(Boolean);
        recentList.innerHTML = recentTracks.length ? recentTracks.map(t => `
            <div class="stats-track-row">
                <img src="${getSongCover(t)}" alt="${t.title}">
                <div class="stats-track-meta">
                    <span class="stats-track-title">${t.title}</span>
                    <span class="stats-track-count">${t.artist}</span>
                </div>
            </div>
        `).join('') : '<div style="color:var(--text-sub);font-size:13px;padding:10px;">No recent plays.</div>';
    }
}

// ============================================================
// 32. RECENTLY PLAYED PLAYLIST
// ============================================================
function initRecentlyPlayedNav() {
    const navEl = document.getElementById('nav-recently-played');
    if (!navEl) return;

    navEl.addEventListener('click', (e) => {
        e.preventDefault();
        const recentIds = getRecentlyPlayed();
        currentQueue = recentIds
            .map(id => tracks.find(t => t.id === id || t.id === parseInt(id)))
            .filter(Boolean);
        const sectionTitle = document.getElementById('section-title');
        if (sectionTitle) sectionTitle.textContent = 'Recently Played';
        filterPlaylistDisplay();

        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        navEl.classList.add('active');
    });
}

// ============================================================
// 33. MINI PLAYER
// ============================================================
let miniPlayerActive = false;

function initMiniPlayer() {
    const miniPlayerBtn = document.getElementById('mini-player-btn');
    const miniPlayer = document.getElementById('mini-player');
    const miniPlay = document.getElementById('mini-play');
    const miniPrev = document.getElementById('mini-prev');
    const miniNext = document.getElementById('mini-next');
    const miniExpand = document.getElementById('mini-expand');
    const miniClose = document.getElementById('mini-close');
    const appContainer = document.querySelector('.app-container');
    const playerBar = document.querySelector('.player-bar');

    if (!miniPlayerBtn || !miniPlayer) return;

    miniPlayerBtn.addEventListener('click', () => {
        miniPlayerActive = true;
        miniPlayer.classList.remove('hidden');
        if (appContainer) appContainer.style.display = 'none';
        if (playerBar) playerBar.style.display = 'none';
        updateMiniPlayer();
    });

    if (miniExpand) miniExpand.addEventListener('click', collapseMiniPlayer);
    if (miniClose) miniClose.addEventListener('click', collapseMiniPlayer);

    if (miniPlay) miniPlay.addEventListener('click', () => {
        togglePlay();
        updateMiniPlayerPlayBtn();
    });

    if (miniPrev) miniPrev.addEventListener('click', () => { prevTrack(); updateMiniPlayer(); });
    if (miniNext) miniNext.addEventListener('click', () => { nextTrack(); updateMiniPlayer(); });
}

function collapseMiniPlayer() {
    miniPlayerActive = false;
    const miniPlayer = document.getElementById('mini-player');
    const appContainer = document.querySelector('.app-container');
    const playerBar = document.querySelector('.player-bar');
    if (miniPlayer) miniPlayer.classList.add('hidden');
    if (appContainer) appContainer.style.display = '';
    if (playerBar) playerBar.style.display = '';
}

function updateMiniPlayer() {
    const track = currentQueue[currentTrackIndex];
    if (!track) return;
    const miniCover = document.getElementById('mini-cover');
    const miniTitle = document.getElementById('mini-title');
    const miniArtist = document.getElementById('mini-artist');
    if (miniCover) miniCover.src = getSongCover(track);
    if (miniTitle) miniTitle.textContent = track.title;
    if (miniArtist) miniArtist.textContent = track.artist;
    updateMiniPlayerPlayBtn();
}

function updateMiniPlayerPlayBtn() {
    const miniPlay = document.getElementById('mini-play');
    if (miniPlay) {
        miniPlay.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }
}

// ============================================================
// 34. FULLSCREEN NOW PLAYING OVERLAY
// ============================================================
function initFullscreenOverlay() {
    const fsCloseBtn = document.getElementById('fs-close-btn');
    const fsOverlay = document.getElementById('fullscreen-overlay');
    const fsProgressSlider = document.getElementById('fs-progress-slider');
    const fsPlay = document.getElementById('fs-play');
    const fsPrev = document.getElementById('fs-prev');
    const fsNext = document.getElementById('fs-next');
    const fsShuffle = document.getElementById('fs-shuffle');
    const fsRepeat = document.getElementById('fs-repeat');

    if (!fsCloseBtn || !fsOverlay) return;

    fsCloseBtn.addEventListener('click', closeFullscreenOverlay);
    fsOverlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeFullscreenOverlay(); });

    if (fsProgressSlider) {
        fsProgressSlider.addEventListener('input', (e) => {
            const seekTime = (e.target.value / 100) * audio.duration;
            audio.currentTime = seekTime;
        });
    }

    if (fsPlay) fsPlay.addEventListener('click', togglePlay);
    if (fsPrev) fsPrev.addEventListener('click', prevTrack);
    if (fsNext) fsNext.addEventListener('click', nextTrack);
    if (fsShuffle) fsShuffle.addEventListener('click', () => {
        shuffleMode = !shuffleMode;
        document.getElementById('player-shuffle').classList.toggle('active-control', shuffleMode);
        fsShuffle.classList.toggle('active-control', shuffleMode);
    });
    if (fsRepeat) fsRepeat.addEventListener('click', () => {
        document.getElementById('player-repeat').click();
    });
}

function openFullscreenOverlay() {
    const fsOverlay = document.getElementById('fullscreen-overlay');
    if (!fsOverlay) return;
    fsOverlay.classList.remove('hidden');
    updateFullscreenOverlay();
    initStarRating();
    document.body.style.overflow = 'hidden';
}

function closeFullscreenOverlay() {
    const fsOverlay = document.getElementById('fullscreen-overlay');
    if (!fsOverlay) return;
    fsOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

function updateFullscreenOverlay() {
    const track = currentQueue[currentTrackIndex];
    if (!track) return;

    const fsTitle = document.getElementById('fs-title');
    const fsArtist = document.getElementById('fs-artist');
    const fsCover = document.getElementById('fs-cover');
    const fsBgBlur = document.getElementById('fs-bg-blur');
    const fsLyricsScroll = document.getElementById('fs-lyrics-scroll');
    const fsPlay = document.getElementById('fs-play');

    if (fsTitle) fsTitle.textContent = track.title;
    if (fsArtist) fsArtist.textContent = track.artist;

    const coverSrc = getSongCover(track);
    if (fsCover) fsCover.src = coverSrc;
    if (fsBgBlur) fsBgBlur.style.backgroundImage = `url('${coverSrc}')`;

    if (fsPlay) fsPlay.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';

    // Sync lyrics to fullscreen
    if (fsLyricsScroll && track.lyrics && track.lyrics.length > 0) {
        fsLyricsScroll.innerHTML = track.lyrics.map((l, i) =>
            `<div class="lyric-line" data-time="${l.time}" data-idx="${i}">${l.text}</div>`
        ).join('');
    } else if (fsLyricsScroll) {
        fsLyricsScroll.innerHTML = '<div class="lyric-line placeholder-lyric">No lyrics available for this track.</div>';
    }

    updateStarDisplay(track.id);
}

// Sync fullscreen progress bar with main progress
function syncFSProgress() {
    const fsSlider = document.getElementById('fs-progress-slider');
    const fsFill = document.getElementById('fs-progress-fill');
    const fsTimeCurrent = document.getElementById('fs-time-current');
    const fsTimeDuration = document.getElementById('fs-time-duration');

    if (audio.duration && !isNaN(audio.duration)) {
        const pct = (audio.currentTime / audio.duration) * 100;
        if (fsSlider) fsSlider.value = pct;
        if (fsFill) fsFill.style.width = `${pct}%`;
        if (fsTimeCurrent) fsTimeCurrent.textContent = formatTime(audio.currentTime);
        if (fsTimeDuration) fsTimeDuration.textContent = formatTime(audio.duration);
    }
}

// ============================================================
// 35. KEYBOARD SHORTCUTS
// ============================================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger shortcuts when typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
            if (e.key === 'Escape') e.target.blur();
            return;
        }

        switch (e.key) {
            case ' ':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (e.shiftKey) { audio.currentTime = Math.max(0, audio.currentTime - 10); }
                else prevTrack();
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (e.shiftKey) { audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10); }
                else nextTrack();
                break;
            case 'ArrowUp':
                e.preventDefault();
                {   const newVol = Math.min(100, parseInt(volumeSlider.value) + 5);
                    volumeSlider.value = newVol; setVolume(newVol); }
                break;
            case 'ArrowDown':
                e.preventDefault();
                {   const newVol = Math.max(0, parseInt(volumeSlider.value) - 5);
                    volumeSlider.value = newVol; setVolume(newVol); }
                break;
            case 'm': case 'M':
                toggleMute();
                break;
            case 'l': case 'L':
                toggleLike();
                break;
            case 's': case 'S':
                shuffleMode = !shuffleMode;
                document.getElementById('player-shuffle').classList.toggle('active-control', shuffleMode);
                showToast('Shuffle', shuffleMode ? 'Shuffle ON' : 'Shuffle OFF', 'fas fa-shuffle');
                break;
            case 'r': case 'R':
                document.getElementById('player-repeat').click();
                break;
            case 'f': case 'F': {
                const fsOverlay = document.getElementById('fullscreen-overlay');
                if (fsOverlay && !fsOverlay.classList.contains('hidden')) closeFullscreenOverlay();
                else openFullscreenOverlay();
                break;
            }
            case '/':
                e.preventDefault();
                {   const si = document.getElementById('search-input');
                    if (si) { si.focus(); document.getElementById('search-bar-container').classList.remove('hidden'); }
                }
                break;
            case 'Escape': {
                const fsOverlay = document.getElementById('fullscreen-overlay');
                if (fsOverlay && !fsOverlay.classList.contains('hidden')) closeFullscreenOverlay();
                break;
            }
            case 'a': case 'A': {
                const abBtn = document.getElementById('ab-loop-btn');
                if (abBtn && abLoopState === 0) abBtn.click();
                break;
            }
            case 'b': case 'B': {
                const abBtn = document.getElementById('ab-loop-btn');
                if (abBtn && abLoopState === 1) abBtn.click();
                break;
            }
            default:
                // Number keys 1-9 for seeking
                if (e.key >= '1' && e.key <= '9') {
                    const pct = parseInt(e.key) / 10;
                    if (audio.duration) audio.currentTime = audio.duration * pct;
                }
        }
    });

    // Keyboard shortcuts modal
    const shortcutsBtn = document.getElementById('shortcuts-btn');
    const shortcutsModal = document.getElementById('shortcuts-modal');
    const closeShortcutsBtn = document.getElementById('close-shortcuts-modal');

    if (shortcutsBtn) shortcutsBtn.addEventListener('click', () => {
        if (shortcutsModal) shortcutsModal.style.display = 'flex';
    });
    if (closeShortcutsBtn) closeShortcutsBtn.addEventListener('click', () => {
        if (shortcutsModal) shortcutsModal.style.display = 'none';
    });
    if (shortcutsModal) shortcutsModal.addEventListener('click', e => {
        if (e.target === shortcutsModal) shortcutsModal.style.display = 'none';
    });
}

// ============================================================
// 36. SHARE SONG
// ============================================================
function shareCurrentSong() {
    const track = currentQueue[currentTrackIndex];
    if (!track) return;

    const shareData = {
        title: track.title,
        text: `🎵 Listening to "${track.title}" by ${track.artist} on Power Player`,
        url: track.src || window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(() => copyToClipboard(shareData.text));
    } else {
        copyToClipboard(`${shareData.text}\n${shareData.url}`);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Link Copied!', 'Song link copied to clipboard', 'fas fa-check-circle');
    }).catch(() => {
        showToast('Share', 'Could not copy to clipboard', 'fas fa-exclamation');
    });
}

function initShareButton() {
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) shareBtn.addEventListener('click', shareCurrentSong);

    const dropdownShare = document.getElementById('dropdown-share-track');
    if (dropdownShare) {
        dropdownShare.addEventListener('click', () => {
            // Share selected track from context menu
            const track = tracks.find(t => t.id === window.selectedTrackIdForMenu);
            if (!track) { shareCurrentSong(); return; }
            const shareData = { title: track.title, text: `🎵 "${track.title}" by ${track.artist} on Power Player`, url: track.src || window.location.href };
            if (navigator.share) {
                navigator.share(shareData).catch(() => copyToClipboard(shareData.text));
            } else {
                copyToClipboard(`${shareData.text}\n${shareData.url}`);
            }
            const menu = document.getElementById('playlist-dropdown-menu');
            if (menu) menu.style.display = 'none';
        });
    }
}

// ============================================================
// 37. PLAY NEXT
// ============================================================
function initPlayNext() {
    const dropdownPlayNext = document.getElementById('dropdown-play-next');
    if (!dropdownPlayNext) return;

    dropdownPlayNext.addEventListener('click', () => {
        const id = window.selectedTrackIdForMenu;
        const track = tracks.find(t => t.id === id);
        if (!track) return;

        // Remove if already in queue
        const existingIdx = currentQueue.findIndex(t => t.id === id);
        if (existingIdx !== -1) currentQueue.splice(existingIdx, 1);

        // Insert after current track
        const insertAt = currentTrackIndex + 1;
        currentQueue.splice(insertAt, 0, track);
        renderQueueList();

        showToast('Play Next', `"${track.title}" will play next`, 'fas fa-forward');
        const menu = document.getElementById('playlist-dropdown-menu');
        if (menu) menu.style.display = 'none';
    });
}

// ============================================================
// 38. CLEAR QUEUE
// ============================================================
function initClearQueue() {
    const clearQueueBtn = document.getElementById('clear-queue-btn');
    if (!clearQueueBtn) return;

    clearQueueBtn.addEventListener('click', () => {
        if (!confirm('Clear the current queue? This cannot be undone.')) return;
        const currentTrack = currentQueue[currentTrackIndex];
        currentQueue = currentTrack ? [currentTrack] : [];
        currentTrackIndex = 0;
        renderQueueList();
        filterPlaylistDisplay();
        showToast('Queue Cleared', 'Queue has been cleared', 'fas fa-trash');
    });
}

// ============================================================
// 39. EQ ACTION BUTTONS (Bass Boost, Reset, Save Preset)
// ============================================================
function initEQActions() {
    // Save custom EQ preset
    const saveBtn = document.getElementById('save-eq-preset-btn');
    const saveModal = document.getElementById('save-eq-modal');
    const closeEqModal = document.getElementById('close-save-eq-modal');
    const confirmSave = document.getElementById('confirm-save-eq');

    if (saveBtn) saveBtn.addEventListener('click', () => { if (saveModal) saveModal.style.display = 'flex'; });
    if (closeEqModal) closeEqModal.addEventListener('click', () => { if (saveModal) saveModal.style.display = 'none'; });
    if (saveModal) saveModal.addEventListener('click', e => { if (e.target === saveModal) saveModal.style.display = 'none'; });

    if (confirmSave) {
        confirmSave.addEventListener('click', () => {
            const nameInput = document.getElementById('eq-preset-name');
            const name = nameInput ? nameInput.value.trim() : '';
            if (!name) { showToast('EQ Preset', 'Please enter a preset name', 'fas fa-exclamation'); return; }

            // Read current EQ values
            const values = [0,1,2,3,4].map(i => {
                const slider = document.getElementById(`eq-band-${i}`);
                return slider ? parseInt(slider.value) : 0;
            });

            // Save to localStorage
            const customPresets = JSON.parse(localStorage.getItem('pp_custom_eq_presets') || '{}');
            customPresets[name] = values;
            localStorage.setItem('pp_custom_eq_presets', JSON.stringify(customPresets));

            // Add option to select
            addCustomEQPresetToSelect(name, values);

            if (saveModal) saveModal.style.display = 'none';
            if (nameInput) nameInput.value = '';
            showToast('EQ Preset Saved', `"${name}" saved!`, 'fas fa-save');
        });
    }

    // Load saved custom presets on startup
    const customPresets = JSON.parse(localStorage.getItem('pp_custom_eq_presets') || '{}');
    Object.keys(customPresets).forEach(name => addCustomEQPresetToSelect(name, customPresets[name]));

    // Bass Boost toggle
    let bassBoostActive = false;
    const bassBoostBtn = document.getElementById('bass-boost-btn');
    if (bassBoostBtn) {
        bassBoostBtn.addEventListener('click', () => {
            bassBoostActive = !bassBoostActive;
            bassBoostBtn.classList.toggle('active', bassBoostActive);
            if (bassBoostActive) {
                applyEQPreset('bass');
                document.getElementById('eq-presets').value = 'bass';
                showToast('Bass Boost', 'Bass Boost ON 🔊', 'fas fa-drum');
            } else {
                applyEQPreset('flat');
                document.getElementById('eq-presets').value = 'flat';
                showToast('Bass Boost', 'Bass Boost OFF', 'fas fa-drum');
            }
        });
    }

    // Reset EQ
    const resetBtn = document.getElementById('reset-eq-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            applyEQPreset('flat');
            document.getElementById('eq-presets').value = 'flat';
            bassBoostActive = false;
            if (bassBoostBtn) bassBoostBtn.classList.remove('active');
            showToast('EQ Reset', 'Equalizer reset to flat', 'fas fa-undo');
        });
    }
}

function addCustomEQPresetToSelect(name, values) {
    const sel = document.getElementById('eq-presets');
    if (!sel) return;
    // Remove existing option with same name
    const existing = sel.querySelector(`option[value="custom_${name}"]`);
    if (existing) existing.remove();
    const opt = document.createElement('option');
    opt.value = `custom_${name}`;
    opt.textContent = `⭐ ${name}`;
    sel.appendChild(opt);

    // Handle change
    sel.addEventListener('change', (e) => {
        if (e.target.value === `custom_${name}`) {
            const customPresets = JSON.parse(localStorage.getItem('pp_custom_eq_presets') || '{}');
            const preset = customPresets[name];
            if (preset && equalizerFilters.length > 0) {
                preset.forEach((gain, i) => {
                    equalizerFilters[i].gain.value = gain;
                    const slider = document.getElementById(`eq-band-${i}`);
                    const valEl = document.getElementById(`eq-val-${i}`);
                    if (slider) slider.value = gain;
                    if (valEl) valEl.textContent = `${gain}dB`;
                });
            }
        }
    });
}

// ============================================================
// 40. WEB NOTIFICATIONS
// ============================================================
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function sendTrackNotification(track) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Now Playing', {
            body: `${track.title} — ${track.artist}`,
            icon: getSongCover(track),
            silent: true
        });
    }
}

// ============================================================
// PATCH: loadTrack override to integrate new features
// ============================================================
const _origLoadTrack = loadTrack;
function loadTrackWithFeatures(index) {
    _origLoadTrack(index);
    const track = currentQueue[index];
    if (!track) return;

    // Track recently played
    addToRecentlyPlayed(track.id);

    // Update fullscreen overlay if open
    const fsOverlay = document.getElementById('fullscreen-overlay');
    if (fsOverlay && !fsOverlay.classList.contains('hidden')) {
        updateFullscreenOverlay();
    }

    // Update mini player
    if (miniPlayerActive) updateMiniPlayer();
}

// Override playTrack to track stats
const _origPlayTrack = playTrack;
function playTrackWithStats() {
    _origPlayTrack();
    stopListeningTimer();
    startListeningTimer();

    const track = currentQueue[currentTrackIndex];
    if (track) {
        incrementPlayCount(track.id);
        sendTrackNotification(track);
        showToast(track.title, track.artist, 'fas fa-music');

        // Update FS play button
        const fsPlay = document.getElementById('fs-play');
        if (fsPlay) fsPlay.innerHTML = '<i class="fas fa-pause"></i>';
        updateMiniPlayerPlayBtn();
    }
}

// Override pauseTrack to stop listen timer
const _origPauseTrack = pauseTrack;
function pauseTrackWithStats() {
    _origPauseTrack();
    stopListeningTimer();
    const fsPlay = document.getElementById('fs-play');
    if (fsPlay) fsPlay.innerHTML = '<i class="fas fa-play"></i>';
    updateMiniPlayerPlayBtn();
}

// Patch the fullscreen button to open overlay instead of old fullscreen
function patchFullscreenButton() {
    const btn = document.getElementById('player-fullscreen');
    if (!btn) return;
    // Remove old listener by replacing button
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, newBtn);
    newBtn.addEventListener('click', () => {
        const fsOverlay = document.getElementById('fullscreen-overlay');
        if (fsOverlay && !fsOverlay.classList.contains('hidden')) {
            closeFullscreenOverlay();
        } else {
            openFullscreenOverlay();
        }
    });
}

// Patch updateProgress to also sync fullscreen
const _origUpdateProgress = typeof updateProgress === 'function' ? updateProgress : null;
function patchProgressSync() {
    audio.addEventListener('timeupdate', () => {
        const fsOverlay = document.getElementById('fullscreen-overlay');
        if (fsOverlay && !fsOverlay.classList.contains('hidden')) {
            syncFSProgress();
        }
    });
}

// ============================================================
// INITIALIZE ALL NEW FEATURES
// ============================================================
function initAllNewFeatures() {
    initThemeSwitcher();
    initSpeedControl();
    initSleepTimer();
    initABLoop();
    initSortControl();
    initMiniPlayer();
    initFullscreenOverlay();
    initKeyboardShortcuts();
    initShareButton();
    initPlayNext();
    initClearQueue();
    initEQActions();
    initStatsNav();
    initRecentlyPlayedNav();
    patchFullscreenButton();
    patchProgressSync();
    requestNotificationPermission();

    // Override global functions
    window.loadTrack = loadTrackWithFeatures;
    window.playTrack = playTrackWithStats;
    window.pauseTrack = pauseTrackWithStats;

    // Expose selectedTrackIdForMenu globally for share/play-next
    window.selectedTrackIdForMenu = null;
}

// Run Init
window.addEventListener('DOMContentLoaded', () => {
    initApp();
    initMobileMenu();
    initAllNewFeatures();
});



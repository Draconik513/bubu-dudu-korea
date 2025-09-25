import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
자기야 🫶🏻
오늘은 세상에서 자기 태어난 가장 특별한 날이야. 난 항상 자기 건강하고 힘내고, 행복 가득하길 기도하고 있어.
인생이 항상 쉽진 않지만, 자기 혼자가 아니라는 걸 기억해. 난 항상 자기 응원하고, 힘들 땐 어깨가 되어 줄게.

자기 걸음마다 축복이 함께하고, 꿈도 하나씩 이루어지길 바래. 자기 마음은 진실되고, 미소는 편안하고, 마음과 영혼 모두 아름다워. 세상은 자기 같은 사람이 더 필요해.

난 자기 믿어. 자기 강하고, 멋지고, 최고로 행복할 자격 있어. 절대 자기 자신을 의심하지 마. 자기 삶 속 많은 사람들, 그리고 나에게도 빛이니까.

혹시 나중에 혹시 두렵거나 의심될 때, 내 기도 기억해줘: 항상 좋은 사람들과 충분한 복, 진심 어린 사랑 속에 있길 바래. 나를 포함해서.

사랑해, 그리고 항상 사랑할 거야. 
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Special Letter for You
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Hide my heart" : "See my heart"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  유승재  💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Only uu in my heart honey 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;

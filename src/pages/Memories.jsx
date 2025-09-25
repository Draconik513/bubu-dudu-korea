import { motion } from "framer-motion";
import { useState } from "react";
import vidioBunga from "../assets/videos/vidioBungadudu.mp4";
import fotoKenangan from "../assets/images/couple.jpg";

const Memories = ({ isIOS }) => {
  const [flowerBloom, setFlowerBloom] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full text-center"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          우리 같이 찍은 사진이 없어서 그냥 이거 쓸게 ㅋㅋ
        </h1>

        <motion.div whileHover={{ scale: isIOS ? 1 : 1.02 }} className="mb-8">
          <img
            src={fotoKenangan}
            alt="우리 둘"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-white"
            style={{ transform: "translateZ(0)" }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8 border border-pink-100"
        >
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">
            생일에 같이할 수 없어 미안해
          </h2>

          <div className="text-left text-pink-800 space-y-4 leading-relaxed">
            <p>
              💌 <strong>자기야...</strong>
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              자기야 🫶🏻 오늘 같이 생일을 보낼 수 없어서 정말 미안해. 이렇게
              멀리 있어서 아쉽고 마음이 안 놓여. 하지만 걱정하지 마. 내 마음과
              기도는 항상 자기랑 함께 있어.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              생일을 직접 축하해주지 못하지만, 내 마음 속에서는 이미 축하하고
              있어. 자기의 하루가 행복과 웃음으로 가득하길 바래.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              빨리 만나서 같이 웃고, 같이 축하할 날이 오길 손꼽아 기다릴게.
              자기의 모든 순간을 응원하고 사랑하고 있다는 걸 잊지 마. 사랑해.
              생일 축하해! 💖
            </motion.p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: isIOS ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFlowerBloom(!flowerBloom)}
          className="relative overflow-hidden bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-white/30"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="button-text">
            {flowerBloom ? "꽃 닫기" : "사랑의 꽃 피우기"}
          </span>
        </motion.button>

        {flowerBloom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
            style={{
              WebkitTransform: "translate3d(0,0,0)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* 로맨틱 비디오 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-rose-200"
              style={{ backfaceVisibility: "hidden" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                className="w-72 h-72 object-cover"
              >
                <source src={vidioBunga} type="video/mp4" />
              </video>
            </motion.div>

            {/* 현실적인 꽃 피기 */}
            <motion.div
              initial={{ y: 200, scale: 0 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-64 h-64 overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-48 bg-green-600 rounded-full"></div>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full"
                  style={{
                    top: `${Math.cos((i / 5) * 2 * Math.PI) * 40 + 40}px`,
                    left: `${Math.sin((i / 5) * 2 * Math.PI) * 40 + 40}px`,
                    transform: "translateZ(0)",
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                />
              ))}
              <motion.div
                className="absolute w-14 h-14 bg-yellow-300 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            </motion.div>
          </motion.div>
        )}

        {flowerBloom && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="text-center text-pink-600 mt-6 italic text-lg"
          >
            🌸 이 꽃은 나의 사과와 사랑의 선물이야, 자기야... 받아줘 🥺❤️
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Memories;

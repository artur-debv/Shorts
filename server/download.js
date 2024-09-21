import ytdl from "ytdl-core";
import fs from "fs";

export const download = (videoId) =>
  new Promise((resolve, reject) => {
    const videoURL = "https://www.youtube.com/watch?v=" + videoId;
    console.log("Realizando o download do vídeo:", videoId);

    ytdl(videoURL, {
      quality: "lowestaudio",
      filter: "audioonly",
      requestOptions: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
      },
    })
      .on("info", (info) => {
        try {
          const seconds = info.formats[0].approxDurationMs / 1000;
          if (seconds > 60) {
            throw new Error("A duração desse vídeo é maior do que 60 segundos");
          }
        } catch (err) {
          console.error("Erro ao processar informações do vídeo:", err.message);
          reject(err);
        }
      })
      .on("end", () => {
        console.log("Download do vídeo finalizado.");
        resolve();
      })
      .on("error", (error) => {
        console.log("Não foi possível fazer o download do vídeo. Detalhes do erro:", error);
        reject(error);
      })
      .pipe(fs.createWriteStream("./tmp/audio.mp4"));
  });

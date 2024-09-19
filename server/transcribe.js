/*import { Transcription } from "./utils/transcription"; // Exemplo de transcrição estática

export async function transcribe(audioFilePath, useExample = false) {
  try {
    // Verifica se devemos usar o exemplo de transcrição estática
    if (useExample) {
      console.log("Usando exemplo de transcrição...");
      return Transcription; // Retorna o exemplo de transcrição
    }

    console.log("Iniciando transcrição do áudio...");

    // Aqui você incluiria a lógica para transcrever o arquivo de áudio
    // Por exemplo, utilizar uma API ou um serviço de transcrição

    const transcribedText = await someTranscriptionService(audioFilePath);

    console.log("Transcrição concluída com sucesso!");
    return transcribedText;
  } catch (error) {
    console.log("Erro ao realizar transcrição, retornando exemplo de transcrição", error);
    return Transcription; // Retorna o exemplo estático em caso de erro
  }
}*/

module.exports = {
    apps: [
      {
        name: "voice-agent",
        script: "app.js",
        env: {
          OPENAI_API_KEY: "sk-proj-xxx",
          VOICE: "nova",
          PORT: 80,
          URL_CLINICA: "http://xpto"
        }
      }
    ]
  };
  
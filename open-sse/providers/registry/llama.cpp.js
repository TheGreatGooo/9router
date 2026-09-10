export default {
  id: "llama.cpp",
  priority: 30,
  alias: "llama.cpp",
  display: {
    name: "llama.cpp",
    icon: "auto_awesome",
    color: "#10A37F",
    textIcon: "OA",
    website: "https://github.com/ggml-org/llama.cpp",
  },
  category: "apikey",
  thinkingConfig: {
    options: [
      "none",
      "low",
      "medium",
      "high",
    ],
    defaultMode: "high",
  },
  transport: {
    baseUrl: "http://llama.cpp.local:8080/v1/chat/completions",
    forceStream: true,
    timeoutMs: 1800000,
  },
  models: [
    { id: "burra", name: "burra" },
  ],
  serviceKinds: ["llm"],
};

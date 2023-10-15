import Dataset from "./dataset.js";

const commands = [
  {
    command: '/template',
    textResponse: Dataset.letterTemplateUrl
  },
  {
    command: '/adart',
    textResponse: Dataset.adArtUrl
  },
  {
    command: '/monitoring',
    textResponse: Dataset.monitoringLetterUrl
  }
]

export default commands
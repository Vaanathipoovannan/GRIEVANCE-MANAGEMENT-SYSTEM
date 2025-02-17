const { HfInference } = require("huggingface");

// Initialize Hugging Face API
const hf = new HfInference("your_huggingface_api_key"); // Replace with your actual API key

// Function to analyze grievances
async function analyzeGrievance(text) {
    try {
        const result = await hf.textClassification({
            model: "facebook/bart-large-mnli",
            inputs: text,
            parameters: { candidate_labels: ["Infrastructure", "Service", "Corruption", "Other"] },
        });
        return result;
    } catch (error) {
        console.error("Error in AI processing:", error);
        return [{ label: "Unknown", score: 0 }];
    }
}

module.exports = { analyzeGrievance };

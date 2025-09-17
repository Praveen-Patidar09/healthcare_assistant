// src/api/aiMock.js
// This simulates analysis → in production, call your backend (which uses OpenAI or a rules engine)
export async function analyzeSymptoms(text) {
  // artificial delay
  await new Promise(res => setTimeout(res, 900));

  const lower = text.toLowerCase();
  if (!text.trim()) return { condition: "No input", specialist: "General Physician", advice: "Please describe symptoms" };

  if (lower.includes("chest") || lower.includes("pain") || lower.includes("breath")) {
    return { condition: "Possible cardiac-related issue", specialist: "Cardiologist", advice: "Please seek urgent care if severe" };
  }
  if (lower.includes("ear") || lower.includes("hearing") || lower.includes("earache")) {
    return { condition: "ENT related", specialist: "ENT Specialist", advice: "Consider ENT consultation" };
  }
  if (lower.includes("fever") || lower.includes("cough") || lower.includes("cold")) {
    return { condition: "General infection/allergy", specialist: "General Physician", advice: "Rest, fluids, follow-up" };
  }
  // fallback
  return { condition: "Unclear — needs review", specialist: "General Physician", advice: "Book a GP consult for proper triage" };
}

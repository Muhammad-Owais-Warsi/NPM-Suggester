import {
	FunctionDeclarationSchemaType,
	GoogleGenerativeAI,
} from "@google/generative-ai";
import { prompt } from "./prompt";

class AI {
	genAi;
	model;

	constructor() {
		this.genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);
		this.model = this.genAi.getGenerativeModel({
			model: "gemini-1.5-flash",
			generationConfig: {
				responseMimeType: "application/json",
				responseSchema: {
					type: FunctionDeclarationSchemaType.ARRAY,
					items: {
						type: FunctionDeclarationSchemaType.OBJECT,
						properties: {
							no: {
								type: FunctionDeclarationSchemaType.NUMBER,
							},
							package: {
								type: FunctionDeclarationSchemaType.STRING,
							},
							description: {
								type: FunctionDeclarationSchemaType.STRING,
							},
							link: {
								type: FunctionDeclarationSchemaType.STRING,
							},
						},
					},
				},
			},
		});
	}

	async generate(query: string) {
		try {
			const result = await this.model.generateContent(prompt + query);
			console.log(result.response.text());
			return result.response.text();
		} catch (error) {
			console.error("Error fetching or parsing response:", error);
		}
	}
}

const ai = new AI();

export { ai };

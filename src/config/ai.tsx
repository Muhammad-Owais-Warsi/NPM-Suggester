import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt } from "./prompt";




class AI {

    genAi;
    model;

    constructor() {
        this.genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);
        this.model = this.genAi.getGenerativeModel({model:"gemini-1.5-pro"})
    

    }
    async generate(query: string) {
        try {
            const result = await this.model.generateContent(prompt + query);
            
            const response = await result.response;
            const text = await response.text();
            
            return text;



            
           
        } catch (error) {
            console.error("Error fetching or parsing response:", error);
        }
    }


}


const ai = new AI();

export {ai};
import ollama

class LLM:
    def __init__(self, model_name="gemma3:1b"):
        self.model_name = model_name
    
    def respond(self, user_prompt):        
        try:
            response = ollama.chat(
                model=self.model_name,
                messages=[
                    {"role":"user","content":user_prompt}
                ]
            )
            return response["message"]["content"].strip()
        
        except Exception as e:
            return f"Error: {e}. Please try again"
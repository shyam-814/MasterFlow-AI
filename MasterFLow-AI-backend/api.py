from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from groq import Groq
import os
import aiosmtplib
from email.message import EmailMessage

# Initialize FastAPI app
app = FastAPI(title="Gemini 2.5 Flash API", version="1.0")

# Initialize Google GenAI client
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY", "")
)
# Request models
class GPTSettings(BaseModel):
    system_prompt: str 

class GPTRequest(BaseModel):
    input: str
    settings: GPTSettings 

class ContentRequest(BaseModel):
    input: str

class sendEmailSettings(BaseModel):
    toEmail: str
    fromEmail: str
    subject: str
    smtpHost: str
    smtpPort: int
    smtpUsername: str
    smtpPassword: str

class sendEmailRequest(BaseModel):
    input: str
    settings: sendEmailSettings 


@app.post("/gpt")
async def generate_prompt(request: GPTRequest):
    """
    You are an expert prompt generator, skilled in crafting clear and effective prompts for AI language models.
    Takes a topic and generates a detailed prompt with specific instructions. Respond in Markdown format STRICTLY.
    """
    try:
        response = client.chat.completions.create(
            messages=[
                {
                    "role":"system",
                    "content": request.settings.system_prompt
                },
                {
                    "role": "user",
                    "content": request.input,
                }
            ],
            model="llama-3.3-70b-versatile",
        )
        return {"response": response.choices[0].message.content}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    


@app.post('/send-email')
async def send_email(request: sendEmailRequest):
    """
    Send an email using SMTP.
    - input: The email body content
    - settings: SMTP configuration and recipient details
    """
    try:
        # Create email message
        message = EmailMessage()
        message["From"] = request.settings.fromEmail
        message["To"] = request.settings.toEmail
        message["Subject"] = request.settings.subject
        message.set_content(request.input)  # input = email body

        # Send email via SMTP
        await aiosmtplib.send(
            message,
            hostname=request.settings.smtpHost,
            port=request.settings.smtpPort,
            username=request.settings.smtpUsername,
            password=request.settings.smtpPassword,
            start_tls=True  # Use TLS encryption
        )

        return {
            "response": "Email sent successfully",
            "success": True,
            "recipient": request.settings.toEmail
        }

    except aiosmtplib.SMTPException as e:
        raise HTTPException(status_code=500, detail=f"SMTP Error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
async def root():
    return {"message": "FastAPI is running 🚀"}

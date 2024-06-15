// test-api-connection | route.js


//THIS WORKS NOW!

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const GET = async (request) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant. What is the meaning of life?" }],
      model: "gpt-3.5-turbo",
    });

    const responseText = completion.choices[0].message.content;

    return new Response(JSON.stringify({ response: responseText }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "something went wrong!" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

from typing import Union

from fastapi import FastAPI, Request
from pydantic import BaseModel

from summ import summar

from fastapi.middleware.cors import CORSMiddleware

class Item(BaseModel):
    text : str
    power: int

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5137",
    "http://127.0.0.1:5137"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Running")
@app.post("/")
def read_root(item: Item):
    summary = summar(item.text, item.power)
    return {"text": summary}

@app.get("/")
def asd():
    return {"text": "hi bithc"}
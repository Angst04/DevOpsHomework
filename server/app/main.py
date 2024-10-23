from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware

import psycopg2

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search")
async def search(query: str):
    conn = psycopg2.connect(
        host='localhost',
        user='stas',
        password='angst0437',
        database='postgres'
    )
    cur = conn.cursor()

    cur.execute("SELECT * FROM students WHERE name LIKE %s", (query.capitalize(),))
    data = cur.fetchall()

    cur.close()
    conn.close()

    return [{"id": item[0], "name": item[1], "age": item[2], "major": item[3]} for item in data]

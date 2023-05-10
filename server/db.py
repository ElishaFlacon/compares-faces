import os
import psycopg2


class DataBase():
    connect = psycopg2.connect(host='localhost',
                               database=os.environ['DB_NAME'],
                               user=os.environ['DB_USER'],
                               password=os.environ['DB_PASSWORD'],
                               port=os.environ['DB_PORT'])
    cursor = connect.cursor()

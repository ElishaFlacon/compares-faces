import os
import psycopg2


class DataBase():
    def connect(): return psycopg2.connect(os.environ['DATABASE'])
    cursor = connect.cursor()

import os
import psycopg2


class DataBase():
    connect = psycopg2.connect(os.environ['DATABASE'])
    cursor = connect.cursor()

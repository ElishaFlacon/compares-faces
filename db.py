import os
import psycopg2


class DataBase():
    connect = psycopg2.connect(host='localhost',
                               database=os.environ['DB_NAME'],
                               user=os.environ['DB_USER'],
                               password=os.environ['DB_PASSWORD'],
                               port=os.environ['DB_PORT'])
    cursor = connect.cursor()

    # def __del__(self):
    #     self.cursor.close()
    #     self.connect.close()

# тут можно методы сдлеть, для удобного использования бд

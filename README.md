<h1> 
     👀 DOSY
</h1>

<h3>
     DOSY (detection object system) или ласково дося - это Fullstack приложение, которое может найти нужного человека или очень на него похожего и вывести информацию о нем из базы данных, а также можно загружать данные о новых людях в базу данных. Front-end построен на React в связке с библиотекой компонентов Material-UI. Back-end использует библиотеку Flask для работы API, который построен на архитектурном стиле REST. А также, на back-end, используется нейросеть для обнаружения и поиска похожих лиц из библиотеки deepface. База данных PostgreSQL.
</h3>



</br>



<h2>
  🛠️ Инструменты, которые использовались при разработке приложения:
</h2>

- Front-end:
     - JavaScript
     - React
     - Material-UI
- Back-end:
     - Python
     - Flask
     - Deepface
     - PostgreSQL



</br>



<h2>
  🚀 Зпуск приложения:
</h2>

- `git clone https://github.com/ElishaFlacon/dosy.git`
- `cd dosy`
- Собираем front-end:
     - `cd client`
     - `npm install`
     - `npm audit fix` (если появились ошибки)
- Собираем back-end:
     - `cd server`
     - `python -m venv <venv_name>`
     - `<venv_name>/Scripts/activate` (windows) или `source <venv_name>/Scripts/activate` (linux)
     - `pip install -r ./requirements.txt`
- Собираем базу данных:
     - устанавливаем postgresql https://www.postgresql.org/ (при разработке использовалась версия 15)
     - оставляем все значения по умолчанию
     - пароль устанавливаем root
     - переходим в папку с postgresql (по умаолчанию это C:\Program Files\PostgreSQL)
     - переходим в папку 15 (или, если у вас другая версия, то переходите в нее), затем в папку bin
     - запускаем powershell (слева в углу окна написано файл, нажмите, там будет запустить powershell)
     - `.\psql -U postgres`
     - вводим пароль root (при вводе пароль не будет отображаться, не пугайтесь)
     - `psql \! chcp 1251`
     - при вводе следующих команд может появляться ошибка: ошибка синтаксиса (примерное положение: "psql"), игнорируем ее и просто повторно вводим команду
     - `create database <название_базы_данных>;`
     - `\connect <название_базы_данных>;`
     - затем из файлика db.sql копируем все содержимое и вводим в консоль
     - `\dt` если появилась таблица, где в столбце "имя" находится faces и person - значит все прошло успешно
- Запуск:
     - создаем файлик .env в папке dosy
     - записываем в него значения указанные ниже
     ```       
          UPLOAD_FOLDER_PATH="server/app/static"
          ALLOWED_EXTENSIONS=["png", "jpg", "jpeg"]
          DB_NAME="<название_базы_данных>"
          DB_USER="postgres" (если меняли пользователя - то пишите свое название)
          DB_PASSWORD="root" (если у вас другой пароль - то пишите свое значение)
          DB_PORT=5432 (если меняли порт при установке postgresql - то пишите свое значение)
     ```
     - `cd client`
     - `npm start`
     - `cd server`
     - `python main.py`
<h3>
    Запускаем, не работет, ура! 🗿🚬
</h3>



</br>



<h2>
 📺 Демо:
</h2>

<p align="center">
  <img src="https://github.com/ElishaFlacon/compares-faces/assets/83610362/b0019b31-adc4-4e71-ad78-239fdf60b3ad"/>
</p>



</br>



<h2>
⚡ Немного дополнительной информации:
</h2>

- На данный момент проект находится на последних стадиях разработки
- P.S. Все баги и недочеты - это фичи




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=d179b8&height=64&section=footer"/>
</p>



<h1> 
     👀 DOSY
</h1>

<h3>
     DOSY (detection object system) или ласково дося - это Fullstack приложение, которое может найти нужного человека или очень на него похожего и вывести информацию о нем из базы данных, а также можно загружать данные о новых людях в базу данных. Front-end построен на React в связке с библиотекой компонентов Material-UI. Back-end использует библиотеку Flask для работы API, который построен на архитектурном стиле REST. А также, на back-end, используется нейросеть для обнаружения и поиска похожих лиц из библиотеки deepface. База данных PostgreSQL
</h3>

<h3>
     
> Вы можете протестировать работу приложения прямо <a href="https://eelisey.ru/dosy/">здесь</a>
     
> Из-за ограничений серверной части, функционал с поиском человека не работает!
     
> Вы можете посмотреть полноценное демо-видео ниже, в блоке Демо!
     
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
     - меняем адрес API в файлах API/Service, должно получиться `<адрес_api>/api/.../...`
- Собираем back-end:
     - `cd server`
     - `python -m venv <venv_name>`
     - `<venv_name>/Scripts/activate` (windows) или `source <venv_name>/Scripts/activate` (linux)
     - `pip install -r ./requirements.txt`
     - убираем комментарии с 91-94 строки в файле main.py
     - 
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
          STATIC_PATH="<пусть_до_папки_static>"
          DATABASE="postgres://<имя_пользователя>:<пароль>@<адрес_хоста>/<название_базы_данных>"
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

- <a href="https://github.com/ElishaFlacon/dosy/assets/83610362/a91040b3-0258-4a6f-adf4-96846c033a35">Нажать чтобы демо!</a>
- <video src="https://github.com/ElishaFlacon/dosy/assets/83610362/a91040b3-0258-4a6f-adf4-96846c033a35" />




</br>



<h2>
⚡ Немного дополнительной информации:
</h2>

- На данный момент проект полностью реализован, но возможны редкие обновления!
- Front-end приложения находится на хостинге GitHub Pages, а Back-end и База данных на хостинге <a href="https://render.com/">render.com</a>
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



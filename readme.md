# Install PostgresSQL

## On Windows using chocolatey
```bash
cinst postgresql12 --params '/Password:postgres' -y
```

**Active Postgres**
**Open the command prompt with administrator privilege and navigate to the installation folder**
```bash
cd "C:\Program Files\PostgreSQL\12\bin\"
```

**Start Postgres with the command below**
```bash
.\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" start
```

**Shutting down Postgres**
```bash
.\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" stop
```

## Linux

[Documentação Oficial de Instalação do Postgres](https://www.postgresql.org/download/linux/)

## Postbird

É um aplicativo multi plataforma que vai te permitir usar o PostgresSQL com uma interface gráfica, para fazer as operações no banco de dados.

Para instalar, vá até o site: https://electronjs.org/apps/postbird e baixe o app.

# Python Project

1. I recommend using virtual environments to create an isolated environment for this Python project. This project can have its own dependencies, regardless of what dependencies every other project has.**

2. Install Python project dependencies:
```
pip install requirements.txt
```

3. Run the migrations using the commands:
```
python manage.py makemigrations
```
```
python manage.py migrate
```

4. Run the server usgin the command:
```
python manage.py runserver
```

# Angular Project

1. Install the dependencies using the command:
```
npm install or npm i
```

2. Builds and serves the Angular project usgin the command:
```
ng serve or ng s
```

# TO DO
merge development -> master